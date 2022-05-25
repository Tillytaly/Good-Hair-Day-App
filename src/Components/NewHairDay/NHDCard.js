import NHDForm from "./NHDForm";
import NHDForm2 from "./NHDForm2";
import NHDPopupMenu from "./PopupMenu/NHDPopupMenu";
import React, { useState } from "react";

const NHDCard = (props) => {
  const [cardData, setCardData] = useState([]);

  const onChange = (checkboxData) => {
    setCardData(checkboxData);
  };

  return (
    <div className="new-day-card">
      <NHDPopupMenu onChange={onChange} />
    <NHDForm2/>
      <NHDForm
        formData={cardData}
        onClose={props.onClose}
      />
    </div>
  );
};

export default NHDCard;
