import HDSMonths from "./HDSMonths";
import HDSYears from "./HDSYears";
import { v4 as uuidv4 } from "uuid";
import React, { useState } from "react";

const idOfDefaultCheck = uuidv4();
const defaultFilterOptions = {
  years: {
    [idOfDefaultCheck]: { name: 2022, value: 2022, checked: true },
    [uuidv4()]: { name: 2021, value: 2021, checked: false },
  },
  months: {
    [uuidv4()]: { name: "January", value: 0, checked: false },
    [uuidv4()]: { name: "February", value: 1, checked: false },
    [uuidv4()]: { name: "March", value: 2, checked: false },
    [uuidv4()]: { name: "April", value: 3, checked: false },
    [uuidv4()]: { name: "May", value: 4, checked: false },
    [uuidv4()]: { name: "June", value: 5, checked: false },
    [uuidv4()]: { name: "July", value: 6, checked: false },
    [uuidv4()]: { name: "August", value: 7, checked: false },
    [uuidv4()]: { name: "September", value: 8, checked: false },
    [uuidv4()]: { name: "October", value: 9, checked: false },
    [uuidv4()]: { name: "November", value: 10, checked: false },
    [uuidv4()]: { name: "December", value: 11, checked: false },
  },
};

const HDSFilterOptions = () => {
  const [filterOptions, setFilterOptions] = useState(defaultFilterOptions);
  const [idOfCheckedYear, setIdOfCheckedYear] = useState(idOfDefaultCheck);
  const [idOfCheckedMonth, setIdOfCheckedMonth] = useState("");

  const onYearChange = (event) => {
    setFilterOptions((prevFilterOptions) => {
      const newYearState = { ...prevFilterOptions };

      if (idOfCheckedYear !== event.target.id) {
        newYearState.years[idOfCheckedYear].checked = false;
        newYearState.years[event.target.id].checked = true;
      }
      return newYearState;
    });
    setIdOfCheckedYear(event.target.id);
  };

  const onMonthChange = (event) => {
    setFilterOptions((prevFilterOptions) => {
      const newMonthState = { ...prevFilterOptions };

      if (idOfCheckedMonth.length > 0) {
        newMonthState.months[idOfCheckedMonth].checked = false;
      }
      newMonthState.months[event.target.id].checked = event.target.checked;
      return newMonthState;
    });
    setIdOfCheckedMonth(event.target.id);
  };

  return (
    <div className="filter-options">
      <HDSYears filterOptions={filterOptions} onChange={onYearChange} />
      <HDSMonths filterOptions={filterOptions} onChange={onMonthChange} />
    </div>
  );
};
export default HDSFilterOptions;
