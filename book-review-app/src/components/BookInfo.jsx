import React, { useEffect, useState } from "react";
import "../styles/BookInfo.scss";
import ReviewForm from "./ReviewForm";
import LoadingInfo from "./LoadingInfo";
import { useParams } from 'react-router-dom';
import axios from "axios";

const BookInfo = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [book, setBook] = useState(null);

  useEffect(() => {
    const fetchBookDetails = async () => {
      setIsLoading(true);
      const response = await axios.get(`http://localhost:3005/v1/books/${id}`);
      let result = response?.data?.data;
      console.log(result, "book details");
      setBook(result);
      setIsLoading(false);
    };

    fetchBookDetails();
  }, [id])

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
            <p>By {book?.author}</p>
            <p>Description: {book?.description}</p>
            <p>Ratings: 3.5</p>
            <div className="user-reviews">
              <h2>User Reviews</h2>
              <div className="each-review">
                <p>Rating: 4</p>
                <p>This is very useful book</p>
              </div>
            </div>

            <ReviewForm bookId={id} />
          </div>
        </>
      )}
    </div>
  );
};

export default BookInfo;
