 
import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

function LogoDropzone() {
  const onDrop = useCallback((acceptedFiles) => {
    console.log("Dropped files:", acceptedFiles);
  
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div
      {...getRootProps()}
      style={{
        border: '2px dashed #aaa',
        padding: '2rem',
        textAlign: 'center',
        marginTop: '1rem'
      }}
    >
      <input {...getInputProps()} />
      {isDragActive
        ? <p>Drop the logo here ...</p>
        : <p>Drag and drop your logo here, or click to select</p>}
    </div>
  );
}

export default LogoDropzone;