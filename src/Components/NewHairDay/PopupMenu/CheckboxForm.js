import Checkbox from "./Checkbox"
import Button from "../../UI/Button";

const CheckboxForm = (props) =>{
return (
    <div className={`checkbox-form ${props.onButtonClick ? "open" : ""}`}>
        <p className="checkbox-form--title">Hair Day Options</p>
        <Checkbox hairTreatment="OMO"/>
        <Checkbox hairTreatment="Heat Protector"/>
        <Checkbox hairTreatment="PEH"/>
        <Checkbox hairTreatment="Serum"/>
        <Checkbox hairTreatment="Hair Oil"/>
        <Checkbox hairTreatment="Date"/>
        <Button type="submit" className="checkbox-form--button__submit" value="submit">Submit</Button>
    </div>
)

}

export default CheckboxForm;