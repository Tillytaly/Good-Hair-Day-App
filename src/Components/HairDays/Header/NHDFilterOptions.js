import Months from "./Months";
import Years from "./Years";
import { v4 as uuidv4 } from "uuid";
import React, { useState } from "react";
const idOfDefaultCheck = uuidv4();
const defaultFilterOptions = {
  years: {
    [idOfDefaultCheck]: { name: 2022, checked: true },
    [uuidv4()]: { name: 2021, checked: false },
  },
  months: {
    [uuidv4()]: { name: "January", checked: false },
    [uuidv4()]: { name: "February", checked: false },
    [uuidv4()]: { name: "March", checked: false },
    [uuidv4()]: { name: "April", checked: false },
    [uuidv4()]: { name: "May", checked: false },
    [uuidv4()]: { name: "June", checked: false },
    [uuidv4()]: { name: "July", checked: false },
    [uuidv4()]: { name: "August", checked: false },
    [uuidv4()]: { name: "September", checked: false },
    [uuidv4()]: { name: "October", checked: false },
    [uuidv4()]: { name: "November", checked: false },
    [uuidv4()]: { name: "December", checked: false },
  },
};

const FilterOptions = () => {
  const [filterOptions, setFilterOptions] = useState(defaultFilterOptions);
  const [idOfCheckedYear, setIdOfCheckedYear] = useState(idOfDefaultCheck);
  const [idOfCheckedMonth, setIdOfCheckedMonth] = useState("");

  const onYearChange = (event) => {
    setFilterOptions((prevOptions) => {
      const newYearState = { ...prevOptions };

      if (idOfCheckedYear !== event.target.id) {
        newYearState.years[idOfCheckedYear].checked = !event.target.checked;
        newYearState.years[event.target.id].checked = event.target.checked;
      }
      return newYearState;
    });
    setIdOfCheckedYear(event.target.id);
  };

  const onMonthChange = (event) => {
    setFilterOptions((prevOptions) => {
      const newMonthState = { ...prevOptions };

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
      <Years filterOptions={filterOptions} onChange={onYearChange}/>
      <Months filterOptions={filterOptions} onChange={onMonthChange}/>
    </div>
  );
};
export default FilterOptions;
