const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const { body } = require("express-validator");
require("dotenv").config();

// import routes
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");

// set up React app
const app = express();

// db
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

// middleware
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use(body());

// routes middleware
app.use("/api", authRoutes);
app.use("/api", userRoutes);

// set up server
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
