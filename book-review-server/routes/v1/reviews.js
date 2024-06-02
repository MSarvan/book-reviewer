const express = require("express");
const router = express.Router();
const controller = require("../../controller/reviewController");

router.get("/", controller.getReviews);
router.post("/:id", controller.addReview);

module.exports = router;
