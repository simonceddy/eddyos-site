import React from 'react';

function SoftwareWindowContent({ children, handler }) {
  return (
    <div onDoubleClick={handler} className="window-content bg-black text-green text-xl p-2 whitespace-pre-line flex-1 cursor-text overflow-scroll">
      {children}
    </div>
  );
}

export default SoftwareWindowContent;
