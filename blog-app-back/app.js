const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const { body } = require("express-validator");
require("dotenv").config();

// Import routes
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const postRoutes = require("./routes/blogPost");
const imageRoutes = require("./routes/image");

// Set up React app
const app = express();

// DB
mongoose
  .connect(process.env.MONGO_DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("DB Connected"));

mongoose.connection.on("error", (err) => {
  console.log(`DB connection error: ${err.message}`);
});

// Middleware
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(body());

// Routes middleware
app.use("/api", authRoutes);
app.use("/api", userRoutes);
app.use("/api", postRoutes);
app.use("/api", imageRoutes);

// Set up server
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
