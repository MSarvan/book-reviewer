import React, { useEffect, useState } from "react";
import "../styles/BookList.scss";
import book from "../images/book-cover.png";
import LoadingCard from "./LoadingCard";
import axios from "axios";
import Card from "./Card";

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBooks = async () => {
      setIsLoading(true);
      const response = await axios.get('http://localhost:3005/v1/books');
      let result = response?.data?.data;
      console.log(result, 'books data');
      setBooks(result);
      setIsLoading(false);
    };

    fetchBooks();
  }, []);

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
        {isLoading ? (
          Array(8)
            .fill("")
            .map((e, i) => {
              return <LoadingCard index={i} />;
            })
        ) : (
          <>
            {books?.map((e, i) => {
              return (
                <Card
                  title={e?.title}
                  image={e?.image}
                  author={e?.author}
                  id={e?._id}
                />
              );
            })}
          </>
        )}
      </div>
    </div>
  );
};

export default BookList;
