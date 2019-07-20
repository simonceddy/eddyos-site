import React from 'react';
import Scrollbar from 'react-perfect-scrollbar';

function SoftwareWindowContent({ children, handler }) {
  return (
    <div onDoubleClick={handler} className="window-content bg-black text-green text-xl whitespace-pre-line flex-1 cursor-text overflow-hidden">
      <Scrollbar className="p-2">
        <div>
          {children}
        </div>
      </Scrollbar>
    </div>
  );
}

export default SoftwareWindowContent;
