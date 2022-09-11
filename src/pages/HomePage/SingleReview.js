import React from "react";

const SingleReview = ({review}) => {
    const{description,name,rating}=review
  return (
    <div className="card w-96 bg-neutral text-neutral-content">
      <div className="card-body items-center text-center">
        <p>"{description}"</p>
        <p>rating: {rating} of 5</p>
        <h2>{name}</h2>
      </div>
    </div>
  );
};

export default SingleReview;
