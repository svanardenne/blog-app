const Image = require("../models/image");
const formidable = require("formidable");
const fs = require("fs");

// creates new image and caption
exports.create = (req, res) => {
  let formData = new formidable.IncomingForm();
  formData.parse(req, (err, fields, files) => {
    if (err) {
      return res.status(400).json({
        error: "Image could not be uploaded",
      });
    }

    // check for all fields
    const { image } = files;
    const { image_caption } = fields;

    // checks for required data
    if (!image_caption || !image) {
      return res.status(400).json({
        error: "All fields are required",
      });
    }

    // creates imageCaption variable using field info
    let imageCaption = new Image(fields);

    // adds photo data to product if size is under 1mb
    if (files.image) {
      if (files.image.size > 1000000) {
        return res.status(400).json({
          error: "Image should be less than 1mb in size",
        });
      }
      imageCaption.image.data = fs.readFileSync(files.image.path);
      imageCaption.image.contentType = files.image.type;
    }

    // saves image and image caption to database
    imageCaption.save((err, result) => {
      if (err) {
        return res.status(400).json({
          error: err,
        });
      }
      res.json(result);
    });
  });
};
