import React, { useState } from "react";
import "../styles/BookInfo.scss";
import book from "../images/book-cover.png";
import ReviewForm from "./ReviewForm";
import LoadingInfo from "./LoadingInfo";

const BookInfo = () => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="bookinfo">
      {isLoading ? (
        <>
          <LoadingInfo />
        </>
      ) : (
        <>
          <div className="book-coverImg">
            <img src={book} alt="" />
          </div>
          <div className="book-details">
            <h1>Book Title</h1>
            <p>Book Author</p>
            <p>Book description</p>
            <p>Ratings: 3.5</p>
            <div className="user-reviews">
              <h2>User Reviews</h2>
              <div className="each-review">
                <p>Rating: 4</p>
                <p>This is very useful book</p>
              </div>
            </div>

            <ReviewForm />
          </div>
        </>
      )}
    </div>
  );
};

export default BookInfo;
