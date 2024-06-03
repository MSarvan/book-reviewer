import React, { useState } from "react";
import "../styles/ReviewForm.scss";
import { toast } from "react-toastify";
import axios from "axios";

const ReviewForm = ({ bookId }) => {
  const [reviewForm, setReviewForm] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(reviewForm, "reviewForm");

    if (reviewForm.rating < 1 || reviewForm.rating > 5) {
      toast.error("Rating must be 1-5");
      return;
    }

    if (!reviewForm.message) {
      toast.error("Comment cannot be empty");
      return;
    }

    if (!reviewForm.name) {
      toast.error("Please enter your name");
      return;
    }

    axios
      .post(`https://book-reviewer.onrender.com/v1/reviews/${bookId}`, reviewForm)
      .then((response) => {
        if (response.data.error) {
          toast.error(response.data.error);
        } else {
          toast.success("Review submitted successfully");
          setReviewForm({ rating: 0, comment: "", name: "" });
        }
      })
      .catch((error) => toast.error("Error submitting review"));
  };

  return (
    <form className="reviewform" onSubmit={handleSubmit}>
      <h3>Submit a Review</h3>

      <div className="name-div">
        <label>Name:</label>
        <input
          type="text"
          value={reviewForm.name}
          onChange={(e) =>
            setReviewForm((prev) => {
              return {
                ...prev,
                name: e.target.value,
              };
            })
          }
        />
      </div>

      <div className="rating-div">
        <label>Rating:</label>
        <input
          type="number"
          value={reviewForm.rating}
          onChange={(e) =>
            setReviewForm((prev) => {
              return {
                ...prev,
                rating: e.target.value,
              };
            })
          }
          min="1"
          max="5"
        />
      </div>

      <div className="comment-div">
        <label>Comment:</label>
        <textarea
          value={reviewForm.message}
          onChange={(e) =>
            setReviewForm((prev) => {
              return {
                ...prev,
                message: e.target.value,
              };
            })
          }
        ></textarea>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default ReviewForm;
