import React from 'react';
import Layout from './Layout';
import Desktop from './Desktop';

function App({ children }) {
  return (
    <Layout>
      <Desktop>
        {children}
      </Desktop>
    </Layout>
  );
}

export default App;
