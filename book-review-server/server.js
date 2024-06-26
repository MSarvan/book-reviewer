const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

require("dotenv").config();

// config
const mongoDBConnect = require("./config/mongoConnect");
const PORT = process.env.PORT || 3005;

// route imports
const bookRoutes = require("./routes/v1/books");
const reviewRoutes = require("./routes/v1/reviews");

// middlewares
app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use("/v1/books", bookRoutes);
app.use("/v1/reviews", reviewRoutes);

app.get("/", (req, res) => {
  return res.status(200).json({ status: true, message: "App is running" });
});

app.listen(PORT, (error) => {
  if (error) {
    console.log(error);
  }
  else {
    mongoDBConnect();
    console.log(`Server is running on port ${PORT}`);
  }
});
