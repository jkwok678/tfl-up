function TableModeDropdown(props) {
    return (
        <div>
            <select onChange={props.onChange} selected={"Standard"}>
                <option value="Standard">Standard</option>
                <option value="Delay-top-detailed">Delay-top-detailed</option>
                <option value="Delay-top-simple">Delay-top-simple</option>
            </select>
        </div>
    );
}

export default TableModeDropdown;
