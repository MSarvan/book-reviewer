import React, { useEffect, useState } from "react";
import "../styles/BookInfo.scss";
import ReviewForm from "./ReviewForm";
import LoadingInfo from "./LoadingInfo";
import { useParams } from "react-router-dom";
import axios from "axios";

const BookInfo = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [book, setBook] = useState(null);

  useEffect(() => {
    const fetchBookDetails = async () => {
      setIsLoading(true);
      const response = await axios.get(`https://book-reviewer.onrender.com/v1/books/${id}`);
      let result = response?.data?.data;
      console.log(result, "book details");
      setBook(result);
      setIsLoading(false);
    };

    fetchBookDetails();
  }, [id]);

  const calculateOverallRating = () => {
    if (book?.reviews?.length > 0) {
      const totalRating = book.reviews.reduce(
        (acc, review) => acc + review.rating,
        0
      );
      return (totalRating / book.reviews.length).toFixed(1);
    } else {
      return "No ratings yet";
    }
  };

  return (
    <div className="bookinfo">
      {isLoading ? (
        <>
          <LoadingInfo />
        </>
      ) : (
        <>
          <div className="book-coverImg">
            <img src={book?.image} alt="" />
          </div>
          <div className="book-details">
            <h1>{book?.title}</h1>
            <div className="authour-details">
              <div>By</div>
              <div className="author-name">{book?.author}</div>
            </div>
            <p style={{ textAlign: "center" }}>
              Description: {book?.description}
            </p>
            <p className="overall-ratings">
              Overall Ratings: {calculateOverallRating()}
            </p>
            <div className="user-reviews">
              <h2>User Reviews</h2>
              {book?.reviews?.length > 0 ? (
                book?.reviews?.map((e, i) => {
                  return (
                    <div className="each-review" key={i}>
                      <p>Name: {e?.name}</p>
                      <p>Rating: {e?.rating}</p>
                      <p>Comment: {e?.message}</p>
                    </div>
                  );
                })
              ) : (
                <div className="each-review">
                  <p>Be the first to review the book!</p>
                </div>
              )}
            </div>

            <ReviewForm bookId={id} />
          </div>
        </>
      )}
    </div>
  );
};

export default BookInfo;
