import UIButton from "../../UI/UIButton";
import UICheckbox from "../../UI/UICheckbox";
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

const NHDOptionsForm = (props) => {
  const [options, setOptions] = useState([]);

  const toggle = (event) => {
    const checkboxData = {
      name: event.target.name,
      id: event.target.id,
      type: event.target.name === "Date" ? "date" : "text",
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

      className={`checkbox-form ${props.isMenuOpen ? "open" : ""}`}
      onSubmit={onSubmit}
    >
      <p className="checkbox-form--title">Hair Day Options</p>
      {HAIR_DAY_OPTIONS.map((option) => (
        <UICheckbox
          className = "NHD-checkbox-container"
          name={option.name}
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
