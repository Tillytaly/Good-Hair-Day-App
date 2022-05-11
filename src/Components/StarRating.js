import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";

const StarRating = () => {
  const [rating, setRating] = useState(0); // initial rating value

  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate);
    // other logic
  };

  return (
    <div className="form starRating">
      <p className="form starRating-paragraph">Rate Hair Day</p>
      <Rating
        onClick={handleRating}
        ratingValue={rating}
        allowHalfIcon={true}
        size={45} /* Available Props */
      />
    </div>
  );
};
export default StarRating;
