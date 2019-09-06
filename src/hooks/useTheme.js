import { useState } from 'react';
import { getTheme, storeTheme } from '../storage/themeMode';

const themeMode = getTheme();

/**
 * Wraps useState and stores the new theme mode in localStorage
 */
export default function useTheme() {
  const [theme, setTheme] = useState(themeMode);

  const setThemeMode = (mode) => {
    setTheme(mode);
    storeTheme(mode);
  };

  return {
    theme,
    setThemeMode
  };
}
