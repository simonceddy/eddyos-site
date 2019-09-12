import React from 'react';

function TitleBar({ children }) {
  return (
    <div
      className="overflow-hidden whitespace-no-wrap"
      style={{
        textOverflow: 'ellipsis'
      }}
    >
      {children}
    </div>
  );
}

export default TitleBar;
