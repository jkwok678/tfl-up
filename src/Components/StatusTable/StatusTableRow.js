import styles from "./StatusTableRow.module.css";

const StatusTableRow = (props) => {
    return (
        <div className={styles.StatusTableRow}>
            <span className={`${props.className} ${styles.LineColumn}`}>
                {props.line}
            </span>
            <span className={styles.StatusColumn}> {props.status}</span>
        </div>
    );
};

export default StatusTableRow;
