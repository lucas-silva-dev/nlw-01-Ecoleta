import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { FiUpload } from "react-icons/fi";

import "./styles.css";

const DropZone: React.FC = () => {
  const [selectedFilesUrl, setSelectedFilesUrl] = useState("");

  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];

    const fileUrl = URL.createObjectURL(file);

    setSelectedFilesUrl(fileUrl);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: "image/*",
  });

  return (
    <div className="dropzone" {...getRootProps()}>
      <input accept="image/*" {...getInputProps()} />

      {isDragActive ? (
        <p>Drop the image here...</p>
      ) : (
        <>
          {selectedFilesUrl ? (
            <img src={selectedFilesUrl} alt="Imagem do estabelecimento" />
          ) : (
            <p>
              <FiUpload />
              Drag 'n' drop some image here, or click to select image
            </p>
          )}
        </>
      )}
    </div>
  );
};

export default DropZone;
