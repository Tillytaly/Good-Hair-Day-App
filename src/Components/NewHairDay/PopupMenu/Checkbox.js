import React, {useState} from "react";

const Checkbox = (props) => {
  const [checkboxChecked, setCheckboxChecked] = useState(true);

const checkboxClickHandler = (event) => {
if(checkboxChecked){
  props.onAddValue(event.target.value)
}else{
  props.onRemoveValue(event.target.value)
}
setCheckboxChecked(!checkboxChecked)
}

  return (
    <div className="checkbox-container">
      <input type="checkbox" id={props.id} value={props.name} onChange={checkboxClickHandler}></input>
      <label htmlFor={props.id}>{props.name}</label>
    </div>
  );
};

export default Checkbox;
