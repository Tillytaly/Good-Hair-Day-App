import React from "react";

const NHDCheckbox = (props) => {
  return (
    <div className="checkbox-container">
      <input
        type="checkbox"
        id={props.id}
        value={props.value}
        onChange={props.onChange}
      ></input>
      <label htmlFor={props.id}>{props.value}</label>
    </div>
  );
};

export default NHDCheckbox;