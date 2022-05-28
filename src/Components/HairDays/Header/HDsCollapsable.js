import React, { useState } from "react";
import HDsOptionsList from "./HDsOptionsList";
const HDsCollapsable = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapsable = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="collapsable">
      <button onClick={toggleCollapsable} className="collapsable--btn">
        {props.name}
      </button>
      {isOpen && <HDsOptionsList>{props.children}</HDsOptionsList>}
    </div>
  );
};

export default HDsCollapsable;
