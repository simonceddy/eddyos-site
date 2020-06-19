import React from 'react';

function DesktopContent({ children }) {
  return (
    <div id="desktop-container" className="w-full flex-1">
      {children}
    </div>
  );
}

export default DesktopContent;
