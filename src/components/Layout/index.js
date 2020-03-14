import React from 'react';
import RootContainer from './RootContainer';
import OsContainer from './OsContainer';

function Layout({ children }) {
  return (
    <RootContainer>
      <OsContainer>
        {children}
      </OsContainer>
    </RootContainer>
  );
}

export default Layout;
