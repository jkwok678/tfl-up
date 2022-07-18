import logo from "./logo.svg";
import "./App.css";
import UpdateTable from "./Components/Updates/StatusTable";
import { useState } from "react";

function App() {
    const [tableMode, setTableMode] = useState();

    const tableModeDropdownHandler = (event) => {
        setTableMode(event.target.value);
    };
    return (
        <div>
            <div>
                <select>
                    <option value="Standard">Standard</option>
                    <option value="Delay-top">Delay-top</option>
                </select>
            </div>
            <UpdateTable />
        </div>
    );
}

export default App;
