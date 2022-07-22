import { useState } from "react";

function Checkbox(props) {
    const { value, checked, onChange, modeNumber } = props;
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
    return (
        <label>
            <input
                type="checkbox"
                checked={ticked}
                onChange={(event) => {
                    if (canCheck()) {
                        setTicked(!ticked);
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
