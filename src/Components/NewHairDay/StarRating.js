import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";

const StarRating = (props) => {
  return (
    <div className="star-rating">
      <p className="star-rating--paragraph">Rate Hair Day</p>
      <Rating
        onClick={props.onClickRating}
        ratingValue={props.value}
        allowHalfIcon={true}
        size={props.starRatingSize}
      />
    </div>
  );
};
export default StarRating;
