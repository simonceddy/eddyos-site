import React from 'react';

function Icons({ children }) {
  return (
    <div className="flex-1 w-full flex flex-row flex-wrap">
      {children}
    </div>
  );
}

export default Icons;
