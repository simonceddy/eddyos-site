import React from 'react';

function Underlay() {
  return (
    <div
      className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center"
      style={{
        zIndex: '-1'
      }}
    >
      <span className="text-center text-theme-primary-c flex flex-col">
        <span style={{ fontSize: '7rem' }}>
          Simon Eddy
        </span>
        <span style={{ fontSize: '2rem' }}>
          Web Development, I.T. Support
        </span>
      </span>
    </div>
  );
}

export default Underlay;
