const UIButton = (props) => {
  return (
    <button
      className={`ul-button ${props.className}`}
      type={props.type}
      value={props.value}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default UIButton;
