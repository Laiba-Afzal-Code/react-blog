const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      require: true,
    },
    title: {
      type: String,
      min: 50,
    },
    desc: {
      type: String,
      min: 500,
    },
    img: {
      type: String,
    },
    cats: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Post", PostSchema);
