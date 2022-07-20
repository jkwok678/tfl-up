import logo from "./logo.svg";
import "./App.css";
import StatusTable from "./Components/StatusTable/StatusTable";
import TableModeDropdown from "./Components/UI/TableModeDropdown";
import { useState } from "react";
import ModeChooser from "./Components/UI/ModeChooser";

function App() {
    const [tableMode, setTableMode] = useState("Standard");
    const [api, setAPI] = useState(
        "https://api.tfl.gov.uk/Line/Mode/tube/Status?app_key=23a57889b1cc471d8080b321a0eb9ae3"
    );

    const tableModeDropdownHandler = (event) => {
        setTableMode(event.target.value);
    };
    return (
        <div>
            <ModeChooser api={api} setAPI={setAPI} />
            <TableModeDropdown onChange={tableModeDropdownHandler} />
            <StatusTable mode={tableMode} api={api} />
        </div>
    );
}

export default App;
