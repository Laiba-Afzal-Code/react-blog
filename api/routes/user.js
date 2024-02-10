const router = require("express").Router();
const mongoose = require("mongoose");
const User = require("../module/User");
const bcrypt = require("bcrypt");

//Update user
router.put("/:id", async (req, res) => {
  if (req.body.userId === req.params.id) {
    if (req.body.password) {
      // Genrate bcrypt password
      const salt = await bcrypt.genSalt(10);
      req.body.password = await bcrypt.hash(req.body.password, salt);
    }
    try {
      const updateUser = await User.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      res.status(200).json(updateUser);
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(401).json("you can Update only your account!");
  }
});

// GET User 
router.get('/:id', async (req, res)=>{
   try {
     const user = await User.findById(req.params.id)
     const {password, ...others} = user._doc;
     res.status(200).json(others)
   } catch (error) {
    res.status(500).json(error)
   }
});

// Delete User
router.delete("/:id", async (req, res)=>{
    if(req.body.userId === req.params.id){
       try {
         const user = await User.findById(req.params.id)
         try {
            // await Post.deleteMany({userId: user.userId})
            await User.findByIdAndDelete(req.params.id)
            res.status(200).json('User has been Deleted')
         } catch (error) {
            console.log(error);
         }
       } catch (error) {
        res.status(404).json("User Not Found")
       }
    }else{
        res.status(401).json("You can deleted only your Account!")
    }
})
module.exports = router;
