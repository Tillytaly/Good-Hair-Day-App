import Form from "./Form";
import PopupMenu from "./PopupMenu/PopupMenu";
import React, {useState} from "react";

import Card from "../UI/Card";
const NewHairDayCard = () => {
const [inputNames, setInputNames] = useState([]) 

const inputNameHandler = (checkboxValues) =>{

setInputNames(checkboxValues);
}

  return (
    <Card className="new-day-card">
      <PopupMenu onChangeFormInputs ={inputNameHandler}/>
      <Form formData = {inputNames}/>
    </Card>
  );
};

export default NewHairDayCard;
