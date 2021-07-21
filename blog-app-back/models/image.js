const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema(
  {
    photo: {
      data: Buffer,
      contentType: String,
    },
    photo_caption: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("BlogPost", postSchema);
