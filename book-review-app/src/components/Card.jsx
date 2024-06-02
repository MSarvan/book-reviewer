import React from "react";
import {useNavigate} from 'react-router-dom';

const Card = ({ title, image, author, id }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/${id}`)
    }

  return (
    <div className="book-card" key={id} onClick={handleClick}>
      <img src={image} alt="book" />
      <h3> {title}</h3>
      <p>By: {author}</p>
    </div>
  );
};

export default Card;
