import HDSFilterBtn from "./Header/HDSFilterBtn";
import { ReactComponent as FilterSVG } from "../../Icons/filter.svg";
import React, { useState } from "react";
import HDSFilterOptions from "./Header/HDSFilterOptions";
const HDSHeader = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFilterBtn = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="HD-Header">
      <HDSFilterBtn icon={<FilterSVG />} onClick={toggleFilterBtn} />
      {isOpen && <HDSFilterOptions />}
    </div>
  );
};

export default HDSHeader;
