import React from 'react';

function Icons({ children }) {
  return (
    <div className="flex-1 w-full h-full flex flex-row flex-wrap justify-start items-start">
      {children}
    </div>
  );
}

export default Icons;
