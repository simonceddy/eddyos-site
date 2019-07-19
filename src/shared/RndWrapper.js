import React from 'react';
import { Rnd } from 'react-rnd';

function RndWrapper({ children }) {
  return (
    <Rnd
      default={{
        x: 1,
        y: 1,
        width: 320,
        height: 400,
      }}
    >
      {children}
    </Rnd>
  );
}

export default RndWrapper;
