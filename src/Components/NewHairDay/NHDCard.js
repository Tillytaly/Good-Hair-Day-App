import NHDForm from "./NHDForm";
import NHDHeader from "./NHDHeader";
import React, { useState } from "react";

const NHDCard = (props) => {
  const [cardData, setCardData] = useState([]);

  const onChange = (data) => {
    setCardData(data);
  };

  return (
    <div className="new-day-card">
      <NHDHeader onChange={onChange} />
      <NHDForm
        formData={cardData}
        onClose={props.onClose}
      />
    </div>
  );
};

export default NHDCard;
