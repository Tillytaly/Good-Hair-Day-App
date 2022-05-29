import HDsFilterBtn from "./Header/HDsFilterBtn";
import { ReactComponent as FilterSVG } from "../../Icons/filter.svg";
import React, { useState } from "react";
import HDsFilterOptions from "./Header/HDsFilterOptions";
const HDsHeader = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFilterBtn = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="HD-Header">
      <HDsFilterBtn icon={<FilterSVG />} onClick={toggleFilterBtn} />
      {isOpen && <HDsFilterOptions />}
    </div>
  );
};

export default HDsHeader;
