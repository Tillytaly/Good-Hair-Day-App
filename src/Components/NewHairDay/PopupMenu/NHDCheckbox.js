import React, { useState } from "react";

const NHDCheckbox = (props) => {
  const [checkboxChecked, setCheckboxChecked] = useState(true);

  const checkboxClickHandler = (event) => {
    const checkboxData = {
      name: event.target.value,
      id: event.target.id,
      type: event.target.value === "Date" ? "date" : "text",
    };

    if (checkboxChecked) {
      props.onAddValue(checkboxData);
    } else {
      props.onRemoveValue(event.target.id);
    }
    setCheckboxChecked(!checkboxChecked);
  };

  return (
    <div className="checkbox-container">
      <input
        type="checkbox"
        id={props.id}
        value={props.name}
        onChange={checkboxClickHandler}
      ></input>
      <label htmlFor={props.id}>{props.name}</label>
    </div>
  );
};

export default NHDCheckbox;
