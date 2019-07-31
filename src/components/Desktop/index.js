import React from 'react';

function Desktop({ children }) {
  return (
    <div className="flex-1" id="desktop-container">
      {children}
    </div>
  );
}

export default Desktop;
