import React, { useState } from "react";

const NHDCheckbox = (props) => {
  const [isChecked, setIsChecked] = useState(true);

  const toggle = (event) => {
    const checkboxData = {
      name: event.target.value,
      id: event.target.id,
      type: event.target.value === "Date" ? "date" : "text",
    };

    if (isChecked) {
      props.onChecked(checkboxData);
    } else {
      props.onUnchecked(event.target.id);
    }
    setIsChecked(!isChecked);
  };

  return (
    <div className="checkbox-container">
      <input
        type="checkbox"
        id={props.id}
        value={props.name}
        onChange={toggle}
      ></input>
      <label htmlFor={props.id}>{props.name}</label>
    </div>
  );
};

export default NHDCheckbox;
