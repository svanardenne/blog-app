const fs = require("fs");
const formidable = require("formidable");
const _ = require("lodash");

// imports blog post model
const BlogPost = require("../models/blogPost");

// finds a single post by id
exports.postById = (req, res, next, id) => {
  BlogPost.findById(id).exec((err, post) => {
    if (err || !post) {
      return res.status(400).json({
        error: "User not found",
      });
    }
    req.post = post;
    next();
  });
};

// reads a single post
exports.read = (req, res) => {
  return res.json(req.post);
};

// creates a post
exports.create = (req, res) => {
  let form = formidable.IncomingForm();
  form.keepExtensions = true;
  form.parse(req, (err, fields, files) => {
    if (err) {
      return res.status(400).json({
        error: "Something went wrong",
      });
    }
    // deconstruct and check for all fields
    const { title, markdown } = fields;
    if (!title || !markdown) {
      return res.status(400).json({
        error: "All fields are required",
      });
    }
    // creates new post using field info
    let post = new BlogPost(fields);
    // adds photo data to post if size is under 1mb
    if (files.photo) {
      if (files.photo.size > 1000000) {
        return res.status(400).json({
          error: "Image should be under 1mb in size",
        });
      }
      post.photo.data = fs.readFileSync(files.photo.path);
      post.photo.contentType = files.photo.type;
    }
    // saves new post to database
    post.save((err, result) => {
      if (err) {
        return res.status(400).json({
          error: "Something went wrong",
        });
      }
      res.json(result);
    });
  });
};

// lists all post with queries
exports.listAll = (req, res) => {
  let order = req.query.order ? req.query.order : "asc";
  let sortBy = req.query.sortBy ? req.query.sortBy : "_id";
  let limit = req.query.limit ? parseInt(req.query.limit) : 6;

  BlogPost.find()
    .select("-photo")
    .sort([[sortBy, order]])
    .limit(limit)
    .exec((err, post) => {
      if (err) {
        return res.status(400).json({
          error: "Products not found",
        });
      }
      res.json(post);
    });
};

// creates a post
exports.update = (req, res) => {
  let form = formidable.IncomingForm();
  form.keepExtensions = true;
  form.parse(req, (err, fields, files) => {
    if (err) {
      return res.status(400).json({
        error: "Something went wrong",
      });
    }
    // deconstruct and check for all fields
    const { title, markdown } = fields;
    if (!title || !markdown) {
      return res.status(400).json({
        error: "All fields are required",
      });
    }
    // creates new post using field info
    let post = req.post;
    product = _.extend(post, fields);
    // adds photo data to post if size is under 1mb
    if (files.photo) {
      if (files.photo.size > 1000000) {
        return res.status(400).json({
          error: "Image should be under 1mb in size",
        });
      }
      post.photo.data = fs.readFileSync(files.photo.path);
      post.photo.contentType = files.photo.type;
    }
    // saves new post to database
    post.save((err, result) => {
      if (err) {
        return res.status(400).json({
          error: "Something went wrong",
        });
      }
      res.json(result);
    });
  });
};
