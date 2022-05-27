import HDsCollapsable from "./HDsCollapsable";
import UICheckbox from ".././../UI/UICheckbox";
import HDsOptionsList from "./HDsOptionsList";
const FilterOptions = () => {
  return (
    <div className="filter-options">
      <HDsCollapsable name="Year">
        <HDsOptionsList>
          <UICheckbox className="HD-checkbox-container" name="2022" id="123" />
          <UICheckbox className="HD-checkbox-container" name="2021" id="234" />
        </HDsOptionsList>
      </HDsCollapsable>
    </div>
  );
};
export default FilterOptions;
