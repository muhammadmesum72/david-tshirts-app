import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

const FileUpload = ({ onFileUpload }) => {
  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    onFileUpload(file);
  }, [onFileUpload]);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: 'image/*',
  });

  return (
    <div className="mt-8">
      <div {...getRootProps()} className="border-dashed border-2 p-8 text-center">
        <input {...getInputProps()} />
        <p>Drag & drop your design here, or click to select a file</p>
      </div>
    </div>
  );
};

export default FileUpload;
