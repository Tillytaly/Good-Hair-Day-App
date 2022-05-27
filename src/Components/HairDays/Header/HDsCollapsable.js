import React, { useState } from "react";
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
      {isOpen && props.children}
    </div>
  );
};

export default HDsCollapsable;