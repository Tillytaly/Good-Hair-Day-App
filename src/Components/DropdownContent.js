import DropdownInput from "./DropdownInput";
import Button from "./UI/Button"

const DropdownContent = (props) =>{
return (
    <div className={`dropdown-content ${props.menuState ? "open" : ""}`}>
        <DropdownInput hairTreatment="OMO"/>
        <DropdownInput hairTreatment="Heat Protector"/>
        <DropdownInput hairTreatment="PEH"/>
        <DropdownInput hairTreatment="Serum"/>
        <DropdownInput hairTreatment="Hair Oil"/>
        <DropdownInput hairTreatment="Date"/>
        <Button type="submit" className="dropdown-button" value="submit">Submit</Button>
    </div>
)

}

export default DropdownContent;