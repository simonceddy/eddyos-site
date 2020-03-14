import React from 'react';

function LeftSection({ children }) {
  return (
    <div className="flex-1 flex-row flex justify-start items-center">
      {children}
    </div>
  );
}

export default LeftSection;
