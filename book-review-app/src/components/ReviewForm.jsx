import React, { useState } from "react";
import "../styles/ReviewForm.scss";
import { toast } from "react-toastify";

const ReviewForm = () => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(rating, "rating");

    if (rating < 1 || rating > 5) {
      toast.error("Rating must be 1-5");
      return;
    }

    if (!comment) {
      toast.error("Comment cannot be empty");
      return;
    }
  };

  return (
    <form className="reviewform" onSubmit={handleSubmit}>
      <h3>Submit a Review</h3>

      <div className="rating-div">
        <label>Rating:</label>
        <input
          type="number"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          min="1"
          max="5"
        />
      </div>

      <div className="comment-div">
        <label>Comment:</label>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        ></textarea>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default ReviewForm;
