import React from 'react';

function TitleBar({ children }) {
  return (
    <div
      className="overflow-hidden whitespace-no-wrap drag-handle text-left text-2xl"
      style={{
        textOverflow: 'ellipsis'
      }}
    >
      {children}
    </div>
  );
}

export default TitleBar;
