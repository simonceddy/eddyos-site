import React from 'react';
import { withRouter } from 'react-router-dom';
import Underlay from './Layout/Underlay';
import Taskbar from './Layout/Taskbar';
import AppContainer from './Layout/AppContainer';

function App({ children }) {
  return (
    <AppContainer>
      <Underlay />
      <div className="flex-1" id="desktop-container">
        {/* desktop */}
        {children}
      </div>
      <Taskbar />
    </AppContainer>
  );
}

export default withRouter(App);
