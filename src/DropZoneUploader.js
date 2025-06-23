import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

function DropzoneUploader() {
  const onDrop = useCallback((acceptedFiles) => {
    console.log(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div
      {...getRootProps()}
      style={{
        border: "2px dashed #888",
        padding: "20px",
        textAlign: "center",
      }}
    >
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the logo here...</p>
      ) : (
        <p>Drag 'n' drop a logo here, or click to select</p>
      )}
    </div>
  );
}

export default DropzoneUploader;
