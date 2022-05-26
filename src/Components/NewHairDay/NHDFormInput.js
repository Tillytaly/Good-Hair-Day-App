import React from "react";
const NHDFormInput = (props) => {
  return (
    <div className="form--input-container">
      <label htmlFor={props.id}>{props.label}</label>
      <input
        name={props.name}
        type={props.type}
        onChange={props.onChange}
        id={props.id}
      ></input>
    </div>
  );
};

export default NHDFormInput;
