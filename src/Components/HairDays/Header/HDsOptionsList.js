const HDSOptionsList = (props) => {
  return (
    <>
      <ul className={`options-list ${props.className}`}>
        {props.children.map((child) => (
          <li key={child.key} className="options-list--item">
            {child}
          </li>
        ))}
      </ul>
    </>
  );
};

export default HDSOptionsList;
