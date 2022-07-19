function TableModeDropdown(props) {
    return (
        <div>
            <select onChange={props.onChange} selected={"Standard"}>
                <option value="Standard">Standard</option>
                <option value="Delay-top">Delay-top</option>
            </select>
        </div>
    );
}

export default TableModeDropdown;
