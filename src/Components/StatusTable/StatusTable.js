import { useState, useEffect } from "react";

import StatusTableRow from "./StatusTableRow";
import lineColours from "../lineColours.module.css";
import statusTableStyle from "./StatusTable.module.css";
function StatusTable(props) {
    const { mode } = props;
    const [tubeData, setTubeData] = useState([]);

    useEffect(() => {
        getTFLData();
    }, []);

    function getTFLData() {
        fetch(
            "https://api.tfl.gov.uk/Line/Mode/tube,overground,dlr,elizabeth-line/Status?app_key=23a57889b1cc471d8080b321a0eb9ae3"
        )
            .then((response) => response.json())
            .then((result) => {
                setTubeData(result);
            });
    }
    console.log(tubeData);

    if (mode === "Standard") {
        return (
            <div className={statusTableStyle.StatusTable}>
                {tubeData.map((tubeLine) => (
                    <StatusTableRow
                        key={tubeLine.id}
                        className={lineColours[tubeLine.id]}
                        line={tubeLine.name}
                        status={
                            tubeLine.lineStatuses[0].statusSeverityDescription
                        }
                    ></StatusTableRow>
                ))}
            </div>
        );
    }
}

export default StatusTable;
