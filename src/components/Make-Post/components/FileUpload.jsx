import React from "react";

function FileUpload({ label, id, name, accept, required, onChange }) {
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
          onChange={onChange}
        />
      </label>
    </div>
  );
}

export default FileUpload;
