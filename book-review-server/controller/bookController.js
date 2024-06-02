const Book = require("../model/bookModal");

module.exports = {
  addBook: async (req, res) => {
    try {
      const { title, author, description, image } = req.body;
      if (!title || !author || !description || !image) {
        return res
          .status(400)
          .json({ status: false, message: "All fields are mandatory" });
      }
      const book = await Book.create({ title, author, description, image });

      if (!book) {
        return res
          .status(400)
          .json({ status: false, message: "Error while creating book" });
      }
      return res.status(200).json({
        status: true,
        message: "Added new book successfully",
        data: book,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        status: false,
        message: "Internal server error while creating book",
      });
    }
  },

  getBooks: async (req, res) => {
    try {
      const books = await Book.find({}).populate("reviews");

      if (books.length < 1) {
        return res
          .status(200)
          .json({ status: false, message: "No books found" });
      }
      return res
        .status(200)
        .json({ status: true, message: "All books found", data: books });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        status: false,
        message: "Internal server error while fetching books",
      });
    }
  },

  getBooksById: async (req, res) => {
    try {
      const bookId = req.params.id;
      const book = await Book.findById(bookId).populate("reviews");

      if (!book) {
        return res
          .status(404)
          .json({ status: false, message: "No book with given id found" });
      }
      return res
        .status(200)
        .json({ status: true, message: "Book details found", data: book });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        status: false,
        message: "Internal server error while fetching book data",
      });
    }
  },

  deleteBook: async (req, res) => {
    try {
      const bookId = req.params.id;
      const book = await Book.findByIdAndDelete(bookId);

      if (!book) {
        return res
          .status(404)
          .json({ status: false, message: "Book not found" });
      }
      return res
        .status(200)
        .json({ status: true, message: "Deleted book successfully" });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        status: false,
        message: "Internal server error while deleting book",
      });
    }
  },
};
