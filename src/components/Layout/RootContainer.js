import React from 'react';

function RootContainer({ children }) {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full font-mono">
      {children}
    </div>
  );
}

export default RootContainer;
