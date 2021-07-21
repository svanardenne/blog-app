const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema(
  {
    image: {
      data: Buffer,
      contentType: String,
    },
    image_caption: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Image", imageSchema);
