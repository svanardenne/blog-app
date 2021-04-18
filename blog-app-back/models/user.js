const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      maxlength: 32,
    },
    email: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  { timestamps: true }
);

// hashes password
userSchema.pre("save", async function (next) {
  const user = this;
  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 10);
  }
  next();
});

// schema methods
userSchema.methods = {
  authenticate: async function (password) {
    const user = this;
    bcrypt.compare(password, user.password, (err, res) => {
      if (err) {
        return false;
      }
      if (res) {
        return true;
      }
    });
  },
};

module.exports = mongoose.model("User", userSchema);
