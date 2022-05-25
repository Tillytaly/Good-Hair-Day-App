import NHDStarRating from "./NHDStarRating";
import NHDFormInput from "./NHDFormInput";
import NHDFormFooter from "./NHDFormFooter";
import React, { useState } from "react";
const NHDForm = (props) => {
  const [formData, setFormData] = useState([]);
  const [rating, setRating] = useState(0);

  const onFormDataChange = (event) => {
    const newInputData = {
      id: event.target.id,
      inputLabel: event.target.previousElementSibling.textContent,
      inputValue: event.target.value,
    };

    setFormData((prevData) => {
      const previousInputDataIndex = prevData.findIndex(
        ({ id }) => id === event.target.id
      );
      const isInputDataAlreadyInList = previousInputDataIndex > -1;

      if (isInputDataAlreadyInList) {
        const filteredData = prevData.splice(previousInputDataIndex, 1);
        return [newInputData, ...filteredData];
      }

      return [newInputData, ...prevData];
    });
  };

  const onStarRatingClick = (newRating) => {
    setRating(newRating);
  };

  const onSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <form className="form" onSubmit={onSubmit}>
        {props.formData.map((formDataItem) => (
          <NHDFormInput
            inputLabel={formDataItem.name}
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
          readonly = {false}
        />
        <NHDFormFooter onClose={props.onClose} />
      </form>
    </>
  );
};

export default NHDForm;
