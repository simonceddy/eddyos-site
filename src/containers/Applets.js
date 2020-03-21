import React from 'react';
import Applet from './Applet';
import ErrorBoundary from '../shared/components/ErrorBoundary';

function Applets({ applets = [], closeApplet }) {
  return (
    <ErrorBoundary>
      <div className="absolute">
        {applets.map((applet = {}, key) => (
          <Applet
            applet={applet}
            key={key}
            onClose={() => closeApplet(applet)}
          />
        ))}
      </div>
    </ErrorBoundary>
  );
}

export default Applets;
