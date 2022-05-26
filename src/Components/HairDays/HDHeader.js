import HDFilter from "./Header/HDFilter";
import { ReactComponent as FilterSVG } from "../../Icons/filter.svg";
import React, { useState } from "react";
import FilterOptions from "./Header/NHDFilterOptions";
const HDHeader = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFilterOptions = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="HD-Header">
      {isOpen && <FilterOptions />}
      <HDFilter icon={<FilterSVG />} onClick={toggleFilterOptions} />
    </div>
  );
};

export default HDHeader;
