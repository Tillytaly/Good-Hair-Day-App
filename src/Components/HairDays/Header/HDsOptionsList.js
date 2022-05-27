const HDsOptionsList = (props) => {
  return (
    <>
      <ul className="options-list">
        {props.children.map((child) => (
          <ul className="options-list--item">{child}</ul>
        ))}
      </ul>
    </>
  );
};

export default HDsOptionsList;
