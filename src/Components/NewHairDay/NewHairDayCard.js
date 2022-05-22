import Form from "./Form";
import PopupMenu from "./PopupMenu/PopupMenu";
import React, {useState} from "react";
import Card from "../UI/Card";

const NewHairDayCard = () => {
const [inputData, setInputData] = useState([]) 

const inputNameHandler = (checkboxData) =>{

setInputData(checkboxData);
}

  return (
    <Card className="new-day-card">
      <PopupMenu onChangeFormInputs ={inputNameHandler}/>
      <Form formData = {inputData}/>
    </Card>
  );
};

export default NewHairDayCard;
