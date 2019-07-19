import React from 'react';
import { Rnd } from 'react-rnd';

function Desktop3({ children }) {
  return (
    <div className="flex-1 h-full w-full overflow-hidden">
      <Rnd
        default={{
          x: 0,
          y: 0,
          width: 320,
          height: 200,
        }}
      >
        {children}
      </Rnd>
    </div>
  );
}

export default Desktop3;
