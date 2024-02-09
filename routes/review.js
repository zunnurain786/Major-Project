const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync");
const ExpressError = require("../utils/ExpressError.js");
const Review = require("../Models/review.js");
const Listing = require("../Models/listing.js");

const reviewController = require("../controllers/review.js");
const {
  validateReview,
  isLoggedIn,
  isReviewAuthor,
} = require("../middleware.js");

// Reviews
//POST Route
router.post(
  "/",
  isLoggedIn,
  validateReview,
  wrapAsync(reviewController.createReview)
);
//delete review route
router.delete(
  "/:reviewId",
  isReviewAuthor,
  wrapAsync(reviewController.deleteReview)
);

module.exports = router;
