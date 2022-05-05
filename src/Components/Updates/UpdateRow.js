import styles from "./UpdateRow.module.css";

const UpdateRow = (props) => {
  return (
    <div>
      <h2 className={styles.UpdateRow}>{props.line}</h2>
    </div>
  );
};

export default UpdateRow;
