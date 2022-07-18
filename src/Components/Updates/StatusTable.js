import { useState, useEffect } from "react";

import StatusTableRow from "./StatusTableRow";
import lineColours from "../lineColours.module.css";
import styles from "./StatusTableRow.module.css";
function StatusTable() {
    const [tubeData, setTubeData] = useState([]);

    useEffect(() => {
        getTFLData();
    }, []);

    function getTFLData() {
        fetch(
            "https://api.tfl.gov.uk/Line/Mode/tube/Status?app_key=23a57889b1cc471d8080b321a0eb9ae3"
        )
            .then((response) => response.json())
            .then((result) => {
                setTubeData(result);
            });
    }
    console.log(tubeData);

    return (
        <div>
            {tubeData.map((tubeLine) => (
                <StatusTableRow
                    key={tubeLine.id}
                    className={`${lineColours[tubeLine.id]} ${
                        styles.StatusTableRow
                    }`}
                    line={tubeLine.name}
                    status={tubeLine.lineStatuses[0].statusSeverityDescription}
                ></StatusTableRow>
            ))}
        </div>
    );
}

export default StatusTable;
