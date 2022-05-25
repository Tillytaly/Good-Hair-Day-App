import NHDForm from "./NHDForm";
import NHDPopupMenu from "./PopupMenu/NHDPopupMenu";
import React, { useState } from "react";

const NHDCard = (props) => {
  const [inputData, setInputData] = useState([]);

  const inputNameHandler = (checkboxData) => {
    setInputData(checkboxData);
  };

  return (
    <div className="new-day-card">
      <NHDPopupMenu onChangeFormInputs={inputNameHandler} />
      <NHDForm
        formData={inputData}
        onNewHairDayCancel={props.onCancelNewHairDay}
      />
    </div>
  );
};

export default NHDCard;
