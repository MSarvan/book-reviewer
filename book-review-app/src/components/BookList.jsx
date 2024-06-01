import React, { useState } from "react";
import "../styles/BookList.scss";
import book from "../images/book-cover.png";

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="booklist">
      <div className="input-container">
        <input
          type="text"
          placeholder="Search by title or author"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <div className="book-grid">
        <div className="book-card">
          <img src={book} alt="book" />
          <h3>Book title: Soul</h3>
          <p>Author: Olivia Wilson</p>
        </div>
        <div className="book-card">
          <img src={book} alt="book" />
          <h3>Book title: Soul</h3>
          <p>Author: Olivia Wilson</p>
        </div>
        <div className="book-card">
          <img src={book} alt="book" />
          <h3>Book title: Soul</h3>
          <p>Author: Olivia Wilson</p>
        </div>
        <div className="book-card">
          <img src={book} alt="book" />
          <h3>Book title: Soul</h3>
          <p>Author: Olivia Wilson</p>
        </div>
        <div className="book-card">
          <img src={book} alt="book" />
          <h3>Book title: Soul</h3>
          <p>Author: Olivia Wilson</p>
        </div>
        <div className="book-card">
          <img src={book} alt="book" />
          <h3>Book title: Soul</h3>
          <p>Author: Olivia Wilson</p>
        </div>
        <div className="book-card">
          <img src={book} alt="book" />
          <h3>Book title: Soul</h3>
          <p>Author: Olivia Wilson</p>
        </div>
        <div className="book-card">
          <img src={book} alt="book" />
          <h3>Book title: Soul</h3>
          <p>Author: Olivia Wilson</p>
        </div>
        <div className="book-card">
          <img src={book} alt="book" />
          <h3>Book title: Soul</h3>
          <p>Author: Olivia Wilson</p>
        </div>
        <div className="book-card">
          <img src={book} alt="book" />
          <h3>Book title: Soul</h3>
          <p>Author: Olivia Wilson</p>
        </div>
        <div className="book-card">
          <img src={book} alt="book" />
          <h3>Book title: Soul</h3>
          <p>Author: Olivia Wilson</p>
        </div>
        <div className="book-card">
          <img src={book} alt="book" />
          <h3>Book title: Soul</h3>
          <p>Author: Olivia Wilson</p>
        </div>
        
      </div>
    </div>
  );
};

export default BookList;