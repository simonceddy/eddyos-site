import React from 'react';
import RndWrapper from '../../shared/components/RndWrapper';

function WrappedErrorBox({ children }) {
  return (
    <RndWrapper>
      {children}
    </RndWrapper>
  );
}

export default WrappedErrorBox;
