const express = require("express");
const router = express.Router();
const controller = require("../../controller/bookController");

router.get("", controller.getBooks);
router.post("", controller.addBook);
router.delete("/:id", controller.deleteBook);

module.exports = router;
