const StatusTableRow = (props) => {
    return (
        <div>
            <span className={props.className}>{props.line}</span>
            <span> {props.status}</span>
        </div>
    );
};

export default StatusTableRow;
