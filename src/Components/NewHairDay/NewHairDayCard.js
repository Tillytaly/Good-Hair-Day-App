import Form from "./Form";
import PopupMenu from "./PopupMenu/PopupMenu";
import React, {useState} from "react";

const NewHairDayCard = (props) => {
const [inputData, setInputData] = useState([]) 

const inputNameHandler = (checkboxData) =>{

setInputData(checkboxData);
}

  return (
    <div className="new-day-card">
      <PopupMenu onChangeFormInputs ={inputNameHandler}/>
      <Form formData = {inputData} onNewHairDayCancel={props.onCancelNewHairDay}/>
    </div>
  );
};

export default NewHairDayCard;
