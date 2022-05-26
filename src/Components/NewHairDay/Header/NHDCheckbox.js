import React from "react";

const NHDCheckbox = (props) => {
  return (
    <div className="checkbox-container">
      <input
        type="checkbox"
        id={props.id}
        name={props.name}
        onChange={props.onChange}
      ></input>
      <label htmlFor={props.id}>{props.name}</label>
    </div>
  );
};

export default NHDCheckbox;