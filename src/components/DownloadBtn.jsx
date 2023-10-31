import React from 'react';

const DownloadButton = ({ onClick }) => {
  return (
    <div className="mt-8">
      <button onClick={onClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Download T-Shirt
      </button>
    </div>
  );
};

export default DownloadButton;
