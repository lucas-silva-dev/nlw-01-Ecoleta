import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { FiUpload } from "react-icons/fi";

import "./styles.css";

const DropZone: React.FC = () => {
  const onDrop = useCallback((acceptedFiles) => {
    console.log(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className="dropzone" {...getRootProps()}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>
          <FiUpload />
          Drop the files here...
        </p>
      ) : (
        <p>
          <FiUpload />
          Drag 'n' drop some files here, or click to select files
        </p>
      )}
    </div>
  );
};

export default DropZone;
