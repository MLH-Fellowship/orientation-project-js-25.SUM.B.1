import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

function LogoDropzone({ onImageUpload }) {
  const [logoUrl, setLogoUrl] = useState(null);

  const onDrop = useCallback(
    (acceptedFiles) => {
      const file = acceptedFiles[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setLogoUrl(reader.result);
        onImageUpload(reader.result);
      };
      reader.readAsDataURL(file);
    },
    [onImageUpload]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/*": [] },
  });

  return (
    <div className="logo-dropzone" {...getRootProps()}>
      <input {...getInputProps()} data-testid="file-input" />
      {logoUrl ? (
        <img
          src={logoUrl}
          alt="Uploaded Logo"
          className="uploaded-logo-preview"
        />
      ) : (
        <p>Drag and drop your logo here, or click to select</p>
      )}
    </div>
  );
}

export default LogoDropzone;
