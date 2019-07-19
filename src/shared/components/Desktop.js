import React from 'react';

function Desktop({ children }) {
  return (
    <div className="flex-1 h-full w-full overflow-hidden">
      {children}
    </div>
  );
}

export default Desktop;
