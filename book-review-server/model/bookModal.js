const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({
  title: { type: "String", required: true },
  author: { type: "String", required: true },
  description: { type: "String", required: true },
  reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: "Review" }],
});

module.exports = mongoose.model("Book", bookSchema);
