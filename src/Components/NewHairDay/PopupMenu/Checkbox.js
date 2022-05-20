import React from "react";
import { v4 as uuidv4 } from "uuid";
const Checkbox = (props) => {
  const checkboxID = uuidv4();


  return (
    <div className="checkbox-container">
      <input type="checkbox" id={checkboxID}></input>
      <label htmlFor={checkboxID}>{props.hairTreatment}</label>
    </div>
  );
};

export default Checkbox;
