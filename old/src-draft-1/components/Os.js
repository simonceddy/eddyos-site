/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { useCookies } from 'react-cookie';
// import isBoolean from 'lodash/isBoolean';
// import { Helmet } from 'react-helmet';
import { ThemeProvider } from 'styled-components';
// import theme from 'styled-theming';
import Desktop from './Os/Desktop';
import Settings from './Os/Settings';
import DesktopContent from './Os/DesktopContent';
import MenuBar from './Os/MenuBar';
import Underlay from './Os/Underlay';
import MenuButton from './Os/MenuButton';
import { defaultThemeMode } from '../shared/themes';
import SoftwareWrapper from '../shared/components/SoftwareWrapper';
import SoftwareWindow from '../shared/components/SoftwareWindow/SoftwareWindow';
import MenuIcons from './Os/MenuIcons';
import Menu from './Os/Menu';
import useSettingsWindow from '../hooks/useSettingsWindow';
import history from '../createHistory';
import useTextWindow from '../hooks/useTextWindow';
import TextApp from './Apps/TextApp';
// import articles from '../storage/articles';
import useWindows from '../hooks/useWindows';

function Os() {
  const [cookies, setCookies] = useCookies([
    'EDDYOS_THEME'
  ]);

  if (cookies.EDDYOS_THEME === undefined) setCookies('EDDYOS_THEME', defaultThemeMode);

  const [themeMode, setThemeMode] = useState(cookies.EDDYOS_THEME);

  const [menuToggled, setMenuToggled] = useState(false);

  const { windows, getWindow, removeWindow } = useWindows();

  console.log(windows);

  const setTheme = (newTheme) => {
    setCookies('EDDYOS_THEME', newTheme);
    setThemeMode(newTheme);
  };

  const toggleMenu = () => setMenuToggled(!menuToggled);

  // getWindow('text');
  // removeWindow('text');

  return (
    <Router history={history}>
      <ThemeProvider theme={{ mode: themeMode }}>
        <Desktop>
          <Underlay />
          <DesktopContent>
            {windows.map(({ component, key }) => (component({ key })))}
            {/* {settingsToggled
              ? (
                <SoftwareWrapper
                  pos={settingsWindowPos}
                  setPos={setSettingsWindowPos}
                  size={settingsWindowDimensions}
                  setSize={setSettingsWindowDimensions}
                >
                  <SoftwareWindow
                    onFocus={() => console.log('test')}
                    title="Settings"
                    onClose={() => {
                      setSettingsToggled(false);
                      history.push('/');
                    }}
                  >
                    <Settings themeMode={themeMode} themeHandler={setTheme} />
                  </SoftwareWindow>
                </SoftwareWrapper>
              )
              : null
            }
            {textWindowToggled
              ? (
                <SoftwareWrapper
                  pos={textWindowPos}
                  setPos={setTextWindowPos}
                  size={textWindowDimensions}
                  setSize={setTextWindowDimensions}
                >
                  <Switch>
                    <Route
                      path="/text/:article"
                      render={({ match }) => {
                        console.log(match.params.article);
                        return (
                          <TextApp
                            title={match.params.article}
                            onClose={() => {
                              setTextWindowToggled(false);
                              history.push('/');
                            }}
                          >
                            Testing
                          </TextApp>
                        );
                      }}
                    />
                    <Route
                      render={() => (
                        <TextApp
                          title="Text"
                          onClose={() => {
                            setTextWindowToggled(false);
                            history.push('/');
                          }}
                        >
                          Text window
                        </TextApp>
                      )}
                    />
                  </Switch>
                </SoftwareWrapper>
              )
              : null
            } */}
            <Switch>
              <Route path="/" exact render={() => null} />
              <Route
                path="/settings"
                exact
                render={(props) => {
                  getWindow('settings');
                  return null;
                }}
              />
              <Route
                path="/text"
                render={(props) => {
                  getWindow('text');
                  return null;
                }}
              />
            </Switch>
          </DesktopContent>
          <MenuBar>
            { menuToggled ? <Menu toggleMenu={toggleMenu} toggled={menuToggled} /> : null }
            <MenuButton menuToggle={toggleMenu} />
            <MenuIcons />
          </MenuBar>
        </Desktop>
      </ThemeProvider>
    </Router>
  );
}

export default Os;
