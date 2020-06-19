import { useState } from 'react';

export const SETTINGS_WINDOW = 'settings';
export const TEXT_WINDOW = 'text';
export const CLI_WINDOW = 'cli';

export default function useFocus() {
  const [focused, setFocused] = useState({
    [SETTINGS_WINDOW]: false,
    [TEXT_WINDOW]: false,
    [CLI_WINDOW]: false
  });

  return {
    focused,
    setFocused
  };
}
