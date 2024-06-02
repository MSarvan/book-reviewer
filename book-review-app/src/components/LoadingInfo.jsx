import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const LoadingInfo = () => {
  return (
    <>
      <div className="book-coverImg">
        <Skeleton width={"100%"} height={'100%'} />
      </div>
      <div className="book-details">
        <Skeleton width={200} height={40} />
        <Skeleton width={400} height={35} />
        <Skeleton width={500} height={80} />
        <Skeleton width={100} height={35} />
        <div className="user-reviews">
          <Skeleton width={200} height={40} />
          <div className="each-review">
            <Skeleton width={500} height={30} />
            <Skeleton width={500} height={30} />
          </div>
          <div className="each-review">
            <Skeleton width={500} height={30} />
            <Skeleton width={500} height={30} />
          </div>
        </div>
      </div>
    </>
  );
};

export default LoadingInfo;
