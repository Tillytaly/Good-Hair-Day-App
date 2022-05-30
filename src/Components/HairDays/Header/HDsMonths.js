import HDSCollapsable from "./HDSCollapsable";
import UICheckbox from "../../UI/UICheckbox";

const HDSMonths = (props) => {
  return (
    <HDSCollapsable name="Month">
      {Object.keys(props.filterOptions.months).map((id) => (
        <UICheckbox
          key={id}
          id={id}
          name={props.filterOptions.months[id].name}
          checked={props.filterOptions.months[id].checked}
          className="HDs-checkbox-container"
          onChange={props.onChange}
        />
      ))}
    </HDSCollapsable>
  );
};

export default HDSMonths;
