import logo from "./logo.svg";
import "./App.css";
import StatusTable from "./Components/StatusTable/StatusTable";
import TableModeDropdown from "./Components/UI/TableModeDropdown";
import { useState } from "react";

function App() {
    const [tableMode, setTableMode] = useState("Standard");

    const tableModeDropdownHandler = (event) => {
        setTableMode(event.target.value);
    };
    return (
        <div>
            <TableModeDropdown onChange={tableModeDropdownHandler} />
            <StatusTable mode={tableMode} />
        </div>
    );
}

export default App;
