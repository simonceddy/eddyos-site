import React from 'react';
import Underlay from './Underlay';

function Layout({ children }) {
  return (
    <div>
      <Underlay />
      {children}
    </div>
  );
}

export default Layout;
