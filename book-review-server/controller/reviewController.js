const Review = require("../model/reviewModal");
const Book = require("../model/bookModal");

module.exports = {
  addReview: async (req, res) => {
    try {
      const { name, message, rating } = req.body;
      if (!name || !message || !rating) {
        return res
          .status(400)
          .json({ status: false, message: "All fields are mandatory" });
      }
      const review = await Review.create({ name, message, rating });

      if (!review) {
        return res
          .status(400)
          .json({ status: false, message: "Error while creating review" });
      }
      const bookId = req.params.id;
      const book = await Book.findOne({ _id: bookId });
      const updateBook = await Book.findOneAndUpdate(
        { _id: bookId },
        {
          reviews:
            Array.isArray(book?.reviews) && book?.reviews?.length > 0
              ? [...book.reviews, review?._id]
              : [review?._id],
        },
        { new: true }
      );
      console.log(updateBook, "updateBook", bookId, "bookId", book, "book");

      return res.status(200).json({
        status: true,
        message: "Added new review successfully",
        data: review,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        status: false,
        message: "Internal server error while creating review",
      });
    }
  },
  getReviews: async (req, res) => {
    try {
      const reviews = await Review.find({});

      if (reviews.length < 1) {
        return res
          .status(200)
          .json({ status: false, message: "No reviews found" });
      }
      return res
        .status(200)
        .json({ status: true, message: "All reviews found", data: reviews });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        status: false,
        message: "Internal server error while fetching reviews",
      });
    }
  },
  deleteReview: async (req, res) => {
    try {
      const reviewId = req.params.id;
      const review = await Review.findByIdAndDelete(reviewId);

      if (!review) {
        return res
          .status(404)
          .json({ status: false, message: "Review not found" });
      }
      return res
        .status(200)
        .json({ status: true, message: "Deleted review successfully" });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        status: false,
        message: "Internal server error while deleting review",
      });
    }
  },
};
