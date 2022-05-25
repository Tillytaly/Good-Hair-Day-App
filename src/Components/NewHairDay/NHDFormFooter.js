import UIButton from "../UI/UIButton";

const NHDFormFooter = (props) => {
  return (
    <div className="form-footer">
      <UIButton
        className=" form-footer--button form-footer--button__cancel"
        type="button"
        onClick={props.onCancel}
      >
        Cancel
      </UIButton>
      <UIButton
        className="form-footer--button form-footer--button__submit"
        type="submit"
        value="submit"
      >
        Submit
      </UIButton>
    </div>
  );
};

export default NHDFormFooter;
