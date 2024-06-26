const mongoose = require("mongoose");

const reviewSchema = mongoose.Schema({
  name: { type: "String", required: true },
  message: { type: "String", required: true },
  rating: { type: "Number", required: true },
});

module.exports = mongoose.model("Review", reviewSchema);