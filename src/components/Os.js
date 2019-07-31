import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Desktop from './Desktop';
import OsStylesWrapper from './OsStylesWrapper';
import BottomBar from './BottomBar';
import Underlay from './Underlay';
import Settings from './Apps/Settings';
import AppWrapper from '../shared/components/AppWrapper';

// eslint-disable-next-line no-unused-vars
function Os({ kernel }) {
  const themeMode = kernel.loadBinding('themeMode');

  const settingsWindowHandlers = kernel.loadBinding('settingsWindow');

  return (
    <div className="w-full h-full flex flex-col">
      <Underlay />
      <OsStylesWrapper themeMode={themeMode}>
        <Desktop>
          <Switch>
            <Route path="/" exact render={() => null} />
            <Route
              path="/settings"
              exact
              render={() => (
                <AppWrapper title="Settings" windowHandlers={settingsWindowHandlers}>
                  <Settings kernel={kernel} />
                </AppWrapper>
              )}
            />
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
