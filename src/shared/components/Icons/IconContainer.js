import React from 'react';

function IconContainer({ children, width = '120px', height = '120px' }) {
  return (
    <div
      className="flex flex-col justify-center items-center mx-1"
      style={{
        width,
        height,
      }}
    >
      {children}
    </div>
  );
}

export default IconContainer;
