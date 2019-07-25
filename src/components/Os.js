/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useCookies } from 'react-cookie';
import isBoolean from 'lodash/isBoolean';
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
import useAppWindow from '../hooks/useAppWindow';
import SoftwareWindow from '../shared/components/SoftwareWindow/SoftwareWindow';
import CookieNotification from './Os/CookieNotification';

function Os() {
  const [cookies, setCookies] = useCookies([
    'EDDYOS_THEME',
    'EDDYOS_COOKIE_NOTIFIED'
  ]);

  console.log(cookies);
  setCookies('EDDYOS_COOKIE_NOTIFIED', false);

  // eslint-disable-next-line eqeqeq
  const [notified, setNotified] = useState(cookies.EDDYOS_COOKIE_NOTIFIED == 'true');

  const setCookieNotified = () => {
    setCookies('EDDYOS_COOKIE_NOTIFIED', true);
    setNotified(true);
  };

  if (cookies.EDDYOS_THEME === undefined) setCookies('EDDYOS_THEME', defaultThemeMode);

  const [themeMode, setThemeMode] = useState(cookies.EDDYOS_THEME);

  const {
    textWindowPos,
    setTextWindowPos,
    textWindowDimensions,
    setTextWindowDimensions,
  } = useAppWindow();

  const setTheme = (newTheme) => {
    setCookies('EDDYOS_THEME', newTheme);
    setThemeMode(newTheme);
  };

  return (
    <ThemeProvider theme={{ mode: themeMode }}>
      <Desktop>
        <Underlay />
        <DesktopContent>
          {
            notified === true ? null
              : (
                <CookieNotification
                  open={!notified}
                  acknowledge={setCookieNotified}
                />
              )
          }
          <SoftwareWrapper
            pos={textWindowPos}
            setPos={setTextWindowPos}
            size={textWindowDimensions}
            setSize={setTextWindowDimensions}
          >
            <SoftwareWindow title="Settings">
              <Settings themeMode={themeMode} themeHandler={setTheme} />
            </SoftwareWindow>
          </SoftwareWrapper>
        </DesktopContent>
        <MenuBar>
          <MenuButton menuToggle={() => {}} />
        </MenuBar>
      </Desktop>
    </ThemeProvider>
  );
}

export default Os;
