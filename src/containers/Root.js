import React from 'react';
import { Route } from 'react-router-dom';
// import { ThemeProvider } from 'styled-components';
import App from '../components/App';
import Text from './Text';
import Cli from './Cli';
import SettingsWindow from './SettingsWindow';

function Root() {
  return (
    <div className="w-full h-full flex flex-col">
      <App>
        <Route path="/text" component={Text} />
        <Route path="/cli" component={Cli} />
        <Route path="/settings" component={SettingsWindow} />
      </App>
    </div>
  );
}

export default Root;
