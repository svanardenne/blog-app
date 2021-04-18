const User = require("../models/user");

exports.signup = (req, res) => {
  const user = new User(req.body);
  if (!req.body.isAdmin) {
    user.save((err, user) => {
      if (err) {
        return res.status(400).json({
          error: err,
        });
      }
      res.json({ user });
    });
  }
  res.status(401).json({
    error: "You do not have permission to set admin",
  });
};
