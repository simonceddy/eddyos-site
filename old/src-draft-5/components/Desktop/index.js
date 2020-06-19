import React from 'react';

function Desktop({ children }) {
  return (
    <div className="flex-1 flex flex-row justify-start" id="desktop-container">
      {children}
    </div>
  );
}

export default Desktop;
