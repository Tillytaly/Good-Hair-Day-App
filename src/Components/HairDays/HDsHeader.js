import HDsFilter from "./Header/HDsFilter";
import { ReactComponent as FilterSVG } from "../../Icons/filter.svg";
import React, { useState } from "react";
import HDsFilterOptions from "./Header/HDsFilterOptions";
const HDsHeader = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFilterOptions = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="HD-Header">
      <HDsFilter icon={<FilterSVG />} onClick={toggleFilterOptions} />
      {isOpen && <HDsFilterOptions />}
    </div>
  );
};

export default HDsHeader;
