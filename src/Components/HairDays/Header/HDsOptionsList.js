const HDsOptionsList = (props) => {
  return (
    <>
      <ul className="options-list">
        {props.children.map((child) => (
          <li key = {child.key} className="options-list--item">{child}</li>
        ))}
      </ul>
    </>
  );
};

export default HDsOptionsList;
