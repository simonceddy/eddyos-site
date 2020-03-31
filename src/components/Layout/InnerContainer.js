import React from 'react';
import Flex1Container from '../../shared/components/Layout/Flex1Container';

function InnerContainer({ children }) {
  return (
    <Flex1Container className="relative w-full inner-container">
      {children}
    </Flex1Container>
  );
}

export default InnerContainer;
