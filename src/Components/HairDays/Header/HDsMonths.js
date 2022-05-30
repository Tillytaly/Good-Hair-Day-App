import HDsCollapsable from "./HDSCollapsable";
import UICheckbox from "../../UI/UICheckbox";

const HDSMonths = (props) => {
  return (
    <HDsCollapsable name="Month">
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
    </HDsCollapsable>
  );
};

export default HDSMonths;
