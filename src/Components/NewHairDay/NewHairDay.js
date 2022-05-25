import UICard from "../UI/UICard";
import React, { useState } from "react";
import UIButton from "../UI/UIButton";
import NHDCard from "./NHDCard";

const NewHairDay = () => {
  const [isEditing, setIsEditing] = useState(false);

  const editingHandler = () => {
    setIsEditing(!isEditing);
  };

  return (
    <UICard className="new-hair-day">
      {!isEditing && (
        <UIButton onClick={editingHandler} className="new-hair-day--btn">
          Add New Hair Day
        </UIButton>
      )}
      {isEditing && <NHDCard onCancelNewHairDay={editingHandler} />}
    </UICard>
  );
};

export default NewHairDay;

// onClick={startEditingHandler}>Add New Expense
