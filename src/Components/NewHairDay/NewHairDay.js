import UICard from "../UI/UICard";
import React, { useState } from "react";
import UIButton from "../UI/UIButton";
import NHDCard from "./NHDCard";

const NewHairDay = () => {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  const toggleCreateModal = () => {
    setIsCreateModalOpen(!isCreateModalOpen);
  };

  return (
    <UICard className="new-hair-day">
      {!isCreateModalOpen && (
        <UIButton onClick={toggleCreateModal} className="new-hair-day--btn">
          Add New Hair Day
        </UIButton>
      )}
      {isCreateModalOpen && <NHDCard onClose={toggleCreateModal} />}
    </UICard>
  );
};

export default NewHairDay;

