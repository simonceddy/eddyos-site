import React from 'react';
import Underlay from './Layout/Underlay';
import Taskbar from './Layout/Taskbar';

function App({ children }) {
  return (
    <div className="flex-1 flex flex-col m-1 border">
      <Underlay />
      <div className="flex-1" id="desktop-container">
        {/* desktop */}
        {children}
      </div>
      <Taskbar />
    </div>
  );
}

export default App;
