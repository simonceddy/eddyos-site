import React from 'react';

function Bootstrapper({ children }) {
  return (
    <div className="w-full h-full">
      {children}
    </div>
  );
}

export default Bootstrapper;
