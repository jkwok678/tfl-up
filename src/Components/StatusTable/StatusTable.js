import { useState, useEffect } from "react";

import StatusTableRow from "./StatusTableRow";
import lineColours from "../lineColours.module.css";
import statusTableStyle from "./StatusTable.module.css";
function StatusTable(props) {
    const { mode, api } = props;
    const [data, setData] = useState([]);

    useEffect(() => {
        getTFLData();
    }, [api]);

    function getTFLData() {
        fetch(api)
            .then((response) => response.json())
            .then((result) => {
                setData(result);
            });
    }

    if (mode === "Standard") {
        return (
            <div className={statusTableStyle.StatusTable}>
                {data.map((tubeLine) => (
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
    } else if (mode === "Delay-top-detailed") {
        const noIssues = data.filter(
            (line) =>
                line.lineStatuses[0].statusSeverityDescription ===
                "Good Service"
        );
        const issues = data.filter(
            (line) =>
                line.lineStatuses[0].statusSeverityDescription !==
                "Good Service"
        );
        return (
            <div className={statusTableStyle.StatusTable}>
                {issues.map((tubeLine) => (
                    <StatusTableRow
                        key={tubeLine.id}
                        className={lineColours[tubeLine.id]}
                        line={tubeLine.name}
                        status={
                            tubeLine.lineStatuses[0].statusSeverityDescription
                        }
                    ></StatusTableRow>
                ))}
                {noIssues.map((tubeLine) => (
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
    } else if (mode === "Delay-top-simple") {
        const issues = data.filter(
            (line) =>
                line.lineStatuses[0].statusSeverityDescription !==
                "Good Service"
        );
        return (
            <div className={statusTableStyle.StatusTable}>
                {issues.map((tubeLine) => (
                    <StatusTableRow
                        key={tubeLine.id}
                        className={lineColours[tubeLine.id]}
                        line={tubeLine.name}
                        status={
                            tubeLine.lineStatuses[0].statusSeverityDescription
                        }
                    ></StatusTableRow>
                ))}
                <div className={statusTableStyle["goodServiceRow"]}>
                    <h3 className={statusTableStyle["goodServiceText"]}>
                        Good Service on all other lines.
                    </h3>
                </div>
            </div>
        );
    }
}

export default StatusTable;
