import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Desktop from './Desktop';
import OsStylesWrapper from './OsStylesWrapper';
import BottomBar from './BottomBar';
import Underlay from './Underlay';
import Settings from './Apps/Settings';
import AppWrapper from '../shared/components/AppWrapper';
import Text from './Apps/Text';
import WindowManager from './WindowManager';

// eslint-disable-next-line no-unused-vars
function Os({ kernel }) {
  const themeMode = kernel.loadBinding('themeMode');

  const textWindowHandlers = kernel.loadBinding('textWindow');
  const settingsWindowHandlers = kernel.loadBinding('settingsWindow');
  const closeWindow = () => {
    console.log('closed');
    kernel.loadBinding('history').push('/');
  };

  return (
    <div className="w-full h-full flex flex-col">
      <Underlay />
      <OsStylesWrapper themeMode={themeMode}>
        <Desktop>
          <WindowManager kernel={kernel} />
          <Switch>
            <Route path="/" exact render={() => null} />
            <Route
              path="/text/:id"
              exact
              render={() => (
                <AppWrapper
                  title="Text"
                  windowHandlers={textWindowHandlers}
                  onClose={closeWindow}
                >
                  <Text kernel={kernel} />
                </AppWrapper>
              )}
            />
            <Route
              path="/settings"
              exact
              render={() => (
                <AppWrapper
                  title="Settings"
                  windowHandlers={settingsWindowHandlers}
                  onClose={closeWindow}
                >
                  <Settings kernel={kernel} />
                </AppWrapper>
              )}
            />
            <Route path="/cookie-policy" exact render={() => (<div>Delicious</div>)} />
            <Route render={() => null} />
          </Switch>
        </Desktop>
        <BottomBar>
          {/*  */}
        </BottomBar>
      </OsStylesWrapper>
    </div>
  );
}

export default Os;
