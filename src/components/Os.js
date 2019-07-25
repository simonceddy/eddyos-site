/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useCookies } from 'react-cookie';
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

function Os({ os }) {
  const [cookies, setCookies] = useCookies(['EDDYOS_THEME']);

  const [themeMode, setThemeMode] = useState(cookies.EDDYOS_THEME || defaultThemeMode);

  const {
    textWindowPos,
    setTextWindowPos,
    textWindowDimensions,
    setTextWindowDimensions,
  } = useAppWindow();

  if (cookies === {}) setCookies('EDDYOS_THEME', themeMode);

  // console.log(cookies);

  const setTheme = (newTheme) => {
    setCookies('EDDYOS_THEME', newTheme);
    setThemeMode(newTheme);
  };

  return (
    <ThemeProvider theme={{ mode: themeMode }}>
      <Desktop>
        <Underlay />
        <DesktopContent>
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
