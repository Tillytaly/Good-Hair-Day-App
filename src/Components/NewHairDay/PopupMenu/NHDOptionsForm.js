import NHDCheckbox from "./NHDCheckbox";
import UIButton from "../../UI/UIButton";
import { v4 as uuidv4 } from "uuid";
import React, { useState } from "react";

const HAIR_DAY_OPTIONS = [
  { value: "OMO", id: uuidv4() },
  { value: "Heat Protector", id: uuidv4() },
  { value: "PEH", id: uuidv4() },
  { value: "Serum", id: uuidv4() },
  { value: "Hair Oil", id: uuidv4() },
  {
    value: "Date",
    id: uuidv4(),
    title: "If not chosen today's date is default.",
  },
];

const NHDOptionsForm = (props) => {
  const [options, setOptions] = useState([]);

  const toggle = (event) => {
    const checkboxData = {
      name: event.target.value,
      id: event.target.id,
      type: event.target.value === "Date" ? "date" : "text",
    };

    const indexOfCheckboxInList = options.findIndex(
      ({ id }) => id === checkboxData.id
    );
    const isCheckboxInList = indexOfCheckboxInList > -1;

    if (isCheckboxInList) {
      removeCheckbox(checkboxData.id);
    } else {
      addCheckbox(checkboxData);
    }
  };

  const addCheckbox = (checkbox) => {
    setOptions((prevOptions) => {
      return [checkbox, ...prevOptions];
    });
  };

  const removeCheckbox = (checkboxId) => {
    setOptions((prevOptions) => {
      return prevOptions.filter(({ id }) => id !== checkboxId);
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    props.onChange(options);
    props.onSubmit();
  };

  return (
    <form
    //props menuState -> isMenuOpen
      className={`checkbox-form ${props.isMenuOpen ? "open" : ""}`}
      onSubmit={onSubmit}
    >
      <p className="checkbox-form--title">Hair Day Options</p>
      {HAIR_DAY_OPTIONS.map((option) => (
        <NHDCheckbox
          value={option.value}
          key={option.id}
          id={option.id}
          onChange={toggle}
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

export default NHDOptionsForm;
