import React from 'react';
import { Switch, Route as Software } from 'react-router-dom';
// import Home from './pages/Home';
import About from './pages/About';
import Desktop from '../shared/components/Desktop';
import Layout from './Layout';

function App() {
  return (
    <Layout>
      <Desktop>
        <Switch>
          <Software path="/" exact render={() => (<div className="text-5xl">Welcome</div>)} />
          <Software path="/about" exact render={() => (<About key="a" />)} />
          <Software path="/code" exact render={() => (<About key="a" />)} />
          <Software path="/previous-work" exact render={() => (<About key="a" />)} />
          <Software path="/services" exact render={() => (<About key="a" />)} />
          <Software path="/contact" exact render={() => (<About key="a" />)} />
          <Software render={() => (<div>404</div>)} />
        </Switch>
      </Desktop>
    </Layout>
  );
}

export default App;
