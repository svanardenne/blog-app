const BlogPost = require("../models/blogPost");

// finds a single post by id
exports.postById = (req, res, next, id) => {
  BlogPost.findById(id).exec((err, post) => {
    if (err || !user) {
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

exports.createPost = (req, res) => {
  BlogPost.create();
};
