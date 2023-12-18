import React, { useCallback, useState } from "react";
import styles from "./FileUpload.module.scss";
import { useDropzone } from "react-dropzone";

function FileUpload({ onChange }) {
  const [file, setFile] = useState(null);

  const maxSize = 5 * 1024 * 1024;

  const acceptedFileTypes = "image/jpeg, image/jpg";

  const onDrop = useCallback(
    (acceptedFiles) => {
      onChange(acceptedFiles);
      setFile(acceptedFiles[0]?.name);
    },
    [onChange]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    noClick: true,
    accept: acceptedFileTypes,
    maxSize: maxSize,
  });

  return (
    <div className={styles.wrapper}>
      <label className={styles.label} {...getRootProps()} tabIndex="0" role="button" aria-label="Click to upload a photo">
        <input {...getInputProps()} />
        Upload
      </label>
      <span className={styles.span}>{file ? file : "Upload your photo"}</span>
    </div>
  );
}

export default FileUpload;
