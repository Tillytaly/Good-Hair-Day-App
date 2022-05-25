import React, { useState } from "react";

const defaultFormState = {
    checkboxes: {
        'a': {
            name: 'AAA',
            checked: false
        },
        'b': {
            name: 'BBB',
            checked: false
        },
        'c': {
            name: 'CCC',
            checked: false
        },
    }
};

const NHDForm2 = (props) => {
    const [formState, setFormState] = useState(defaultFormState);

    const onCheckboxChange = (e) => {
        setFormState(prev => {
            const newState = {...prev};
            newState.checkboxes[e.target.id] = {
                name: e.target.name,
                checked: e.target.checked
            };
            return newState;
        });
    }

    return (
        <form>
            <div>
                {Object.keys(formState.checkboxes).map((id) =>
                    <input
                        key={id}
                        onChange={onCheckboxChange}
                        type={"checkbox"}
                        id={id}
                        name={formState.checkboxes[id].name}
                        checked={formState.checkboxes[id].checked}
                    />
                )}
            </div>
        </form>
    );
};

export default NHDForm2;
