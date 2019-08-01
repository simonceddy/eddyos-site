import React from 'react';
import AppWrapper from '../../shared/components/AppWrapper';

function WindowManager({ kernel }) {
  const windows = kernel.desktop.getWindows();
  console.log(windows);
  const closeWindow = () => {
    console.log('closed');
    kernel.loadBinding('history').push('/');
  };

  return (
    <div>
      {windows.map(app => (
        <AppWrapper
          key={app.id}
          title="Text"
          windowHandlers={app}
          onClose={closeWindow}
        >
          {app.name}
        </AppWrapper>
      ))}
    </div>
  );
}

export default WindowManager;
