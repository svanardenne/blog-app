const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },
    photo: {
      data: Buffer,
      contentType: String,
    },
    photo_info: {
      type: String,
    },
    photo_link: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("BlogPost", postSchema);
