import React, { useState } from "react";
import HDSOptionsList from "./HDSOptionsList";
const HDSCollapsable = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapsable = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="collapsable">
      <button onClick={toggleCollapsable} className="collapsable--btn">
        {props.name}
      </button>
      {isOpen && <HDSOptionsList>{props.children}</HDSOptionsList>}
    </div>
  );
};

export default HDSCollapsable;
