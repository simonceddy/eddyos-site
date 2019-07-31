import React, { useState } from 'react';
import { Router } from 'react-router-dom';
import { CookiesProvider, useCookies } from 'react-cookie';
import useWindows from '../hooks/useWindows';
import history from '../createHistory';

function Bootloader({ children, kernel }) {
  const [cookies, setCookies] = useCookies([
    'EDDYOS_THEME'
  ]);

  if (cookies.EDDYOS_THEME === undefined) setCookies('EDDYOS_THEME', 'pleasantSunshine');

  const { useSettingsWindow, useTextWindow } = useWindows();

  kernel.register('settingsWindow', useSettingsWindow());
  kernel.register('textWindow', useTextWindow());

  kernel.register('history', history);

  // Adding to window for debugging
  window.eddyOS = kernel;

  const [themeMode, setThemeMode] = useState(cookies.EDDYOS_THEME);

  kernel.register('themeMode', () => themeMode);

  kernel.register('setTheme', (mode) => {
    setThemeMode(mode);
    kernel.register('themeMode', mode);
    setCookies('EDDYOS_THEME', mode);
    console.log(kernel.loadBinding('themeMode'));
  });

  return (
    <Router history={history}>
      <CookiesProvider>
        <div className="w-full h-full">
          {children}
        </div>
      </CookiesProvider>
    </Router>
  );
}

export default Bootloader;
