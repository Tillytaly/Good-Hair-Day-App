import NHDCheckbox from "./NHDCheckbox";
import UIButton from "../../UI/UIButton";
import { v4 as uuidv4 } from "uuid";
import React, { useState } from "react";

const HAIR_DAY_OPTIONS = [
  { name: "OMO", id: uuidv4() },
  { name: "Heat Protector", id: uuidv4() },
  { name: "PEH", id: uuidv4() },
  { name: "Serum", id: uuidv4() },
  { name: "Hair Oil", id: uuidv4() },
  {
    name: "Date",
    id: uuidv4(),
    title: "If not chosen today's date is default.",
  },
];

const NHDCheckboxForm = (props) => {
  const [checkboxDataList, setCheckboxDataList] = useState([]);

  const removeCheckboxValue = (checkboxId) => {
    setCheckboxDataList((prevValues) => {
      return prevValues.filter(({ id }) => id !== checkboxId);
    });
  };

  const addCheckboxValue = (checkboxData) => {
    setCheckboxDataList((prevValues) => {
      return [checkboxData, ...prevValues];
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onNewHairDayOptions(checkboxDataList);
    props.newMenuState();
  };

  return (
    <form
      className={`checkbox-form ${props.menuState ? "open" : ""}`}
      onSubmit={submitHandler}
    >
      <p className="checkbox-form--title">Hair Day Options</p>
      {HAIR_DAY_OPTIONS.map((option) => (
        <NHDCheckbox
          name={option.name}
          key={option.id}
          id={option.id}
          onAddValue={addCheckboxValue}
          onRemoveValue={removeCheckboxValue}
        />
      ))}
      <UIButton
        type="submit"
        className="checkbox-form--button__submit"
        value="submit"
      >
        Save
      </UIButton>
    </form>
  );
};

export default NHDCheckboxForm;