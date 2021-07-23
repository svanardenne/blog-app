const Image = require("../models/image");
const formidable = require("formidable");
const fs = require("fs");

// gets image object by id
exports.imageById = (req, res, next, id) => {
  Image.findById(id).exec((err, image) => {
    if (err || !image) {
      return res.status(400).json({
        error: "Image data not found",
      });
    }
    req.image = image;
    next();
  });
};

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

exports.getImages = (req, res) => {
  let order = req.query.order ? req.query.order : "desc";
  let sortBy = req.query.sortBy ? req.query.sortBy : "createdAt";
  let limit = req.query.limit ? parseInt(req.query.limit) : 6;

  Image.find()
    .select("-image")
    .sort([[sortBy, order]])
    .limit(limit)
    .exec((err, images) => {
      if (err) {
        return res.status(400).json({
          error: "Images not found",
        });
      }
      res.json(images);
    });
};

exports.image = (req, res) => {
  if (req.image.image.data) {
    res.set("Content-Type", req.image.image.contentType);
    return res.send(req.image.image.data);
  }
};
