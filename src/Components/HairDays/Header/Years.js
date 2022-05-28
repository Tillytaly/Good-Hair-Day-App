import HDsCollapsable from "./HDsCollapsable";
import UICheckbox from "../../UI/UICheckbox";

const Years = (props) => {
  return (
    <HDsCollapsable name="Year">
      {Object.keys(props.filterOptions.years).map((id) => (
        <UICheckbox
          key={id}
          id={id}
          name={props.filterOptions.years[id].name}
          checked={props.filterOptions.years[id].checked}
          className="HDs-checkbox-container"
          onChange={props.onChange}
        />
      ))}
    </HDsCollapsable>
  );
};

export default Years;
