import React from 'react';
import Flex1Container from '../../shared/components/Layout/Flex1Container';

function InnerContainer({ children }) {
  return (
    <Flex1Container>
      {children}
    </Flex1Container>
  );
}

export default InnerContainer;
