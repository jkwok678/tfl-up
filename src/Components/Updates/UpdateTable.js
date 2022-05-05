import { useState, useEffect } from "react";
import axios from "axios";

import UpdateRow from "./UpdateRow";

function UpdateTable() {
  const [latestData, setLatestData] = useState([]);

  const getData = () => {
    axios
      .get(
        "https://api.tfl.gov.uk/Line/Mode/tube,dlr,tflrail/Status?app_key=23a57889b1cc471d8080b321a0eb9ae3"
      )
      .then((response) => {
        setLatestData(response.data);
        console.log(latestData[0].lineStatuses[0].statusSeverityDescription);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  //at(0).statusSeverityDescription
  return (
    <div>
      {latestData &&latestData.map((element) => (
      <UpdateRow
          line={element.id}
        ></UpdateRow>
      ))}

      <button onClick={getData}>Go</button>
    </div>
  );
}

export default UpdateTable;
