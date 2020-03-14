import React from 'react';

function IconContainer({ children }) {
  return (
    <div
      className="flex flex-col justify-center items-center"
      style={{
        width: '120px',
        height: '120px',
      }}
    >
      {children}
    </div>
  );
}

export default IconContainer;
