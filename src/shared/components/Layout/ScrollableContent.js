import React from 'react';
import Scrollbar from 'react-perfect-scrollbar';

function ScrollableContent({ children }) {
  return (
    <div className="flex-1 w-full h-full overflow-hidden whitespace-pre-line">
      <Scrollbar>
        <div>
          {children}
        </div>
      </Scrollbar>
    </div>
  );
}

export default ScrollableContent;
