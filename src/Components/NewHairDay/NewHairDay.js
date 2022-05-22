import Card from "../UI/Card";
import React, { useState } from "react";
import Button from "../UI/Button";
import NewHairDayCard from "./NewHairDayCard";

const NewHairDay = () => {
  const [isEditing, setIsEditing] = useState(false);

  const editingHandler = () => {
    setIsEditing(!isEditing);
  };

  return (
    <Card className="new-hair-day">
      {!isEditing && (
        <Button onClick={editingHandler} className="new-hair-day--btn">
          Add New Hair Day
        </Button>
      )}
      {isEditing && <NewHairDayCard  onCancelNewHairDay = {editingHandler}/>}
    </Card>
  );
};

export default NewHairDay;

// onClick={startEditingHandler}>Add New Expense
