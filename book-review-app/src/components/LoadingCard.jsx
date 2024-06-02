import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const LoadingCard = ({index}) => {
  return (
    <div className="book-card" key={index}>
      <Skeleton width={200} height={200} />
      <Skeleton width={'100%'} height={35} />
      <Skeleton width={'100%'} height={25} />
    </div>
  );
};

export default LoadingCard;
