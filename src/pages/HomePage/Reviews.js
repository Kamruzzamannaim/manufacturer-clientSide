import { useQuery } from "@tanstack/react-query";
import React from "react";
import Loading from "../Shared/Loading";
import SingleReview from "./SingleReview";

const Reviews = () => {
  const { data: reviews, isLoading } = useQuery(["reviews"], () =>
    fetch("https://afternoon-hamlet-34240.herokuapp.com/reviews",{
        method:"GET",
        headers:{
            authorization: `bearer ${localStorage.getItem("accessToken")}`,
        }
        
    }).then((res) => res.json())
  );


  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <h2 className="text-center text-xl font-bold mb-3">Customers Review</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5">
        {reviews.map((review) => (
          <SingleReview key={review._id} review={review}></SingleReview>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
