import React from 'react';
import Layout from './Layout';

function App({ children }) {
  return (
    <Layout>
      {children}
    </Layout>
  );
}

export default App;
