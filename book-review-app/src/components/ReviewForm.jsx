import React, { useState } from "react";
import "../styles/ReviewForm.scss";

const ReviewForm = () => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  return (
    <form className="reviewform">
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
