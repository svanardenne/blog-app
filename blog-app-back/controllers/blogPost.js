const Post = require("../models/blogPost");
const formidable = require("formidable");
const fs = require("fs");

// Finds post by Id and attaches it to request body
exports.postById = (req, res, next, id) => {
  Post.findById(id).exec((err, post) => {
    if (err || !post) {
      return res.status(400).json({
        error: "User not found",
      });
    }
    req.post = post;
    next();
  });
};

exports.listAll = (req, res) => {
  let order = req.query.order ? req.query.order : "desc";
  let sortBy = req.query.sortBy ? req.query.sortBy : "createdAt";
  let limit = req.query.limit ? parseInt(req.query.limit) : 6;

  Post.find()
    .select("-photo")
    .select("-slug")
    .sort([[sortBy, order]])
    .exec((err, posts) => {
      if (err) {
        return res.status(400).json({
          error: "Posts not found",
        });
      }
      res.json(posts);
    });
};

// Method for creating and saving a post
exports.create = (req, res) => {
  let formData = new formidable.IncomingForm();
  formData.parse(req, (err, fields, files) => {
    if (err) {
      return res.status(400).json({
        error: "Image could not be uploaded",
      });
    }

    // check for all fields
    const { title, body, slug, photo } = fields;

    // Checks for required data
    if (!title || !body) {
      return res.status(400).json({
        error: "All fields are required",
      });
    }

    // creates post variable using field info
    let post = new Post(fields);

    // Adds photo data to product if size is under 1mb
    if (files.photo) {
      if (files.photo.size > 1000000) {
        return res.status(400).json({
          error: "Image should be less than 1mb in size",
        });
      }
      post.photo.data = fs.readFileSync(files.photo.path);
      post.photo.contentType = files.photo.type;
    }

    // Saves product to database
    post.save((err, result) => {
      if (err) {
        return res.status(400).json({
          error: err,
        });
      }
      res.json(result);
    });
  });
};
