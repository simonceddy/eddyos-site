import React from 'react';
import Layout from './Layout';
import Desktop from './Desktop';
import Toolbar from './Toolbar';

function App({ children }) {
  return (
    <Layout>
      <Desktop>
        {children}
      </Desktop>
      <Toolbar />
    </Layout>
  );
}

export default App;
