// import user model
const User = require("../models/user");

const bcrypt = require("bcrypt");

// JWT imports
const jwt = require("jsonwebtoken");
const expressJwt = require("express-jwt");

exports.signin = (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email }, (err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: "User with that email does not exist.  Please signup.",
      });
    }
    bcrypt.compare(password, user.password, (err, results) => {
      if (err || !results) {
        return res.status(401).json({
          error: "Email and password do not match.",
        });
      }
      const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
      res.cookie("t", token, { expire: new Date() + 9999 });
      const { _id, name, email, isAdmin } = user;
      return res.json({ token, user: { _id, email, name, isAdmin } });
    });
  });
};

exports.signout = (req, res) => {
  res.clearCookie("t");
  res.json({ message: "Signout success" });
};

exports.requireSignin = expressJwt({
  secret: process.env.JWT_SECRET,
  algorithms: ["HS256"],
  userProperty: "auth",
});

exports.isAuth = (req, res, next) => {
  let user = req.profile && req.auth && req.profile._id == req.auth._id;
  if (!user) {
    return res.status(403).json({
      error: "Access denied",
    });
  }
  next();
};

exports.isAdmin = (req, res, next) => {
  if (!req.profile.isAdmin) {
    return res.status(403).json({
      error: "Admin resource!  Access denied",
    });
  }
  next();
};
