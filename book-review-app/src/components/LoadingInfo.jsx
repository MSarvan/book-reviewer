import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const LoadingInfo = () => {

  return (
    <>
      <div className="book-coverImg">
        <Skeleton containerClassName="image-loader" />
      </div>
      <div className="book-details">
        <Skeleton containerClassName='book-details1' />
        <Skeleton containerClassName='book-details2' />
        <Skeleton containerClassName='book-details3' />
        <Skeleton containerClassName='book-details4' />
        <div className="user-reviews">
          <Skeleton containerClassName='user-review-heading' />
          <div className="each-review">
            <Skeleton containerClassName="user-review-loader" />
            <Skeleton containerClassName="user-review-loader" />
          </div>
          <div className="each-review">
            <Skeleton containerClassName="user-review-loader" />
            <Skeleton containerClassName="user-review-loader" />
          </div>
        </div>
      </div>
    </>
  );
};

export default LoadingInfo;
