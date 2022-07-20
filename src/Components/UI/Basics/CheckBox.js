import { useState } from "react";

function Checkbox(props) {
    const { value, checked, index, onChange, modeNumber } = props;
    const [ticked, setTicked] = useState(checked);

    function canCheck() {
        if (modeNumber >= 1 && !ticked) {
            return true;
        } else if (modeNumber >= 2) {
            return true;
        } else {
            return false;
        }
    }
    console.log(modeNumber);
    return (
        <label>
            <input
                type="checkbox"
                checked={ticked}
                onChange={(event) => {
                    if (canCheck()) {
                        setTicked(!ticked);
                        console.log(event);
                        onChange(event);
                    }
                }}
                value={value}
            />
            {value}
        </label>
    );
}

export default Checkbox;
