import NHDStarRating from "./NHDStarRating";
import NHDFormInput from "./NHDFormInput";
import NHDFormFooter from "./NHDFormFooter";
import { v4 as uuidv4 } from "uuid";
import React, { useState } from "react";
const NHDForm = (props) => {
  const [hairDayData, setHairDayData] = useState({ id: uuidv4() });
  const [rating, setRating] = useState(0);

  const onFormDataChange = (event) => {
    setHairDayData({
      ...hairDayData,
      [event.target.name]: event.target.value,
    });
  };

  const onStarRatingClick = (newRating) => {
    setRating(newRating);
    setHairDayData({
      ...hairDayData,
      ratingValue: rating / 20,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <form className="form" onSubmit={onSubmit}>
        {props.formData.map((formDataItem) => (
          <NHDFormInput
            label={formDataItem.name}
            name={formDataItem.name}
            key={formDataItem.id}
            type={formDataItem.type}
            id={formDataItem.id}
            onChange={onFormDataChange}
          />
        ))}
        <NHDStarRating
          onClickRating={onStarRatingClick}
          value={rating}
          starSize={50}
          readonly={false}
        />
        <NHDFormFooter onClose={props.onClose} />
      </form>
    </>
  );
};

export default NHDForm;
