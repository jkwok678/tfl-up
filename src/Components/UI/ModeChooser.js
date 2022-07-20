import { useState, useEffect } from "react";
import Checkbox from "./Basics/CheckBox";

const TUBE = "tube";
const OVERGROUND = "overground";
const DLR = "dlr";
const ELIZABETHLINE = "elizabeth-line";
const TRAM = "tram";

const modesList = [TUBE, OVERGROUND, DLR, ELIZABETHLINE, TRAM];

function ModeChooser(props) {
    const { api, setAPI } = props;
    const link = "tube,overground,dlr,elizabeth-line,tram";

    const [modes, setModes] = useState([TUBE]);

    function changeModes(event) {
        if (modes)
            switch (event.target.value) {
                case TUBE:
                    if (event.target.checked && !modes.includes(TUBE)) {
                        setModes([...modes, TUBE]);
                    } else if (!event.target.checked && modes.includes(TUBE)) {
                        setModes((modes) =>
                            modes.filter((mode) => mode !== TUBE)
                        );
                    }
                    break;
                case OVERGROUND:
                    if (event.target.checked && !modes.includes(OVERGROUND)) {
                        setModes([...modes, OVERGROUND]);
                    } else if (
                        !event.target.checked &&
                        modes.includes(OVERGROUND)
                    ) {
                        setModes((modes) =>
                            modes.filter((mode) => mode !== OVERGROUND)
                        );
                    }
                    break;
                case DLR:
                    if (event.target.checked && !modes.includes(DLR)) {
                        setModes([...modes, DLR]);
                    } else if (!event.target.checked && modes.includes(DLR)) {
                        setModes((modes) =>
                            modes.filter((mode) => mode !== DLR)
                        );
                    }
                    break;
                case ELIZABETHLINE:
                    if (
                        event.target.checked &&
                        !modes.includes(ELIZABETHLINE)
                    ) {
                        setModes([...modes, ELIZABETHLINE]);
                    } else if (
                        !event.target.checked &&
                        modes.includes(ELIZABETHLINE)
                    ) {
                        setModes((modes) =>
                            modes.filter((mode) => mode !== ELIZABETHLINE)
                        );
                    }
                    break;
                case TRAM:
                    if (event.target.checked && !modes.includes(TRAM)) {
                        setModes([...modes, TRAM]);
                    } else if (!event.target.checked && modes.includes(TRAM)) {
                        setModes((modes) =>
                            modes.filter((mode) => mode !== TRAM)
                        );
                    }
                    break;
                default:
            }
    }

    function updateAPI() {
        let search = modes.join(",");
        console.log(search);
        setAPI(
            `https://api.tfl.gov.uk/Line/Mode/${search}/Status?app_key=23a57889b1cc471d8080b321a0eb9ae3`
        );
    }

    useEffect(() => {
        updateAPI();
    }, [modes]);

    return (
        <>
            <label>Mode Choser</label>
            {modesList.map((mode, index) => (
                <Checkbox
                    value={mode}
                    checked={index === 0 ? true : false}
                    key={mode}
                    onChange={changeModes}
                    modeNumber={modes.length}
                />
            ))}
        </>
    );
}

export default ModeChooser;
