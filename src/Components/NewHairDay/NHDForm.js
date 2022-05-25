import StarRating from "./StarRating";
import NHDFormInput from "./NHDFormInput";
import NHDFormFooter from "./NHDFormFooter";
import React, { useState } from "react";
const NHDForm = (props) => {
  const [inputDataList, setInputDataList] = useState([]);
  const [rating, setRating] = useState(0);

  const inputDataHandler = (event) => {
    const newInputData = {
      id: event.target.id,
      inputLabel: event.target.previousElementSibling.textContent,
      inputValue: event.target.value,
    };

    setInputDataList((prevData) => {
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

  const starRatingHandler = (newRating) => {
    setRating(newRating);
    console.log(rating);
  };

  const submitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <form className="form" onSubmit={submitHandler}>
        {props.formData.map((checkboxDataObj) => (
          <NHDFormInput
            inputLabel={checkboxDataObj.name}
            key={checkboxDataObj.id}
            inputType={checkboxDataObj.type}
            id={checkboxDataObj.id}
            onStateChange={inputDataHandler}
          />
        ))}
        <StarRating
          onClickRating={starRatingHandler}
          value={rating}
          starSize={50}
          readonly = {false}
        />
        <NHDFormFooter onCancel={props.onNewHairDayCancel} />
      </form>
    </>
  );
};

export default NHDForm;
