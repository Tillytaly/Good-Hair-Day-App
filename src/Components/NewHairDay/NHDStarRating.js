import React from "react";
import { Rating } from "react-simple-star-rating";

const NHDStarRating = (props) => {
  return (
    <div className="star-rating">
      <p className="star-rating--paragraph">Rate Hair Day</p>
      <Rating
        onClick={props.onClick}
        ratingValue={props.value}
        allowHalfIcon={true}
        size={props.starSize}
        readonly={props.readonly}
      />
    </div>
  );
};
export default NHDStarRating;
