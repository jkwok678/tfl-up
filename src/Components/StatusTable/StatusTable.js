import { useState, useEffect } from "react";

import StatusTableRow from "./StatusTableRow";
import lineColours from "../lineColours.module.css";
import statusTableStyle from "./StatusTable.module.css";
function StatusTable(props) {
    const { mode, api } = props;
    const [tubeData, setTubeData] = useState([]);

    useEffect(() => {
        getTFLData();
    }, [api]);

    function getTFLData() {
        fetch(api)
            .then((response) => response.json())
            .then((result) => {
                setTubeData(result);
            });
    }

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
