import React from "react";

const NHDFormInput = (props) => {
  return (
    <div className="form--input-container">
      <label htmlFor={props.id}>{props.inputLabel}</label>
      <input
        type={props.type}
        onChange={props.onChange}
        id={props.id}
      ></input>
    </div>
  );
};

export default NHDFormInput;
