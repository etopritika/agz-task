import React from "react";
import styles from "./FileUpload.module.scss";

function FileUpload({ label, id, name, accept, required, onChange }) {
  return (
    <div className={styles.wrapper}>
      {/* <label for={id}>{label}</label> */}
      <input
        type="file"
        id={id}
        name={name}
        accept={accept}
        required={required}
        onChange={onChange}
      />
    </div>
  );
}

export default FileUpload;
