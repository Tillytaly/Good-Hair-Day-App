import HDSCollapsable from "./HDSCollapsable";
import UICheckbox from "../../UI/UICheckbox";

const HDSYears = (props) => {
  return (
    <HDSCollapsable name="Year">
      {Object.keys(props.filterOptions.years).map((id) => (
        <UICheckbox
        key={id}
        id={id}
        className="HDs-checkbox-container"
          name={props.filterOptions.years[id].name}
          checked={props.filterOptions.years[id].checked}
          value={props.filterOptions.years[id].value}
          onChange={props.onChange}
        />
      ))}
    </HDSCollapsable>
  );
};

export default HDSYears;
