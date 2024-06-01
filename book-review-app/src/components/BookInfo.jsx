import React from "react";
import "../styles/BookInfo.scss";
import book from '../images/book-cover.png'
import ReviewForm from "./ReviewForm";

const BookInfo = () => {
  return (
    <div className="bookinfo">
      <div className="book-coverImg">
        <img src={book} alt="" />
      </div>
      <div className="book-details">
        <h1>Book Title</h1>
        <p>Book Author</p>
        <p>Book description</p>
        <p>Ratings: 3.5</p>
        <div>
          <h2>User Reviews</h2>
          <div>
            <p>Rating: 4</p>
            <p>This is very useful book</p>
          </div>
        </div>

        <ReviewForm />
      </div>
    </div>
  );
};

export default BookInfo;
