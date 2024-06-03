import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ title, image, author, id }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/${id}`);
  };

  return (
    <div className="book-card" key={id} onClick={handleClick}>
      <div style={{aspectRatio: '1/1'}}>
        <img src={image} alt="book" />
      </div>
      <h3> {title}</h3>
      <p>By: {author}</p>
    </div>
  );
};

export default Card;
