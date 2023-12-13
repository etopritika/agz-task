import React from "react";

function FileUpload({ label, id, name, accept, required }) {
  return (
    <div>
      <label>
        {label}
        <input
          type="file"
          id={id}
          name={name}
          accept={accept}
          required={required}
        />
      </label>
    </div>
  );
}

export default FileUpload;
