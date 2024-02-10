const connectDB = require("./db");
const express = require("express");
const cors = require("cors");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/post");
const multer = require('multer');
const path = require('path')

connectDB();
const app = express();
const port = 8800;

// middleware
app.use(cors());
app.use(express.json());
app.use("images", express.static(path.join(__dirname, "/images")))

const storage = multer.diskStorage({
destination: (req, file, cb)=>{
  cb(null, 'images')
},
filename: (req, file, cb)=>{
  cb(null, req.body.name)
},
});
const upload = multer({storage : storage});
app.post("/api/upload", upload.single("file"), (req, res)=>{
  res.status(200).json("File has been Uploaded")
});

//routes
app.use("/api/user", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/post", postRoute);

app.listen(port, () => {
  console.log(`Backend server is running at http://localhost:${port}`);
});