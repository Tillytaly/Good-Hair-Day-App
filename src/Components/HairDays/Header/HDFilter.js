const HDFilter = (props) => {
  return (
    <button className="filter--btn" onClick={props.onClick}>
     {props.icon}
    </button>
  );
};

export default HDFilter;
