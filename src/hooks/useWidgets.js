/* eslint-disable no-unused-vars */
import { useState } from 'react';

export const SETTINGS_WIDGET = 'settings';
export const TEXT_WIDGET = 'text';
export const CLI_WIDGET = 'cli';

const validWidgets = {
  [SETTINGS_WIDGET]: true,
  [TEXT_WIDGET]: true,
  [CLI_WIDGET]: true,
};

function useWidgets() {
  const [activeWidgets, setActiveWidgets] = useState([]);

  const showWidget = (name) => {
    // TODO
    if (validWidgets[name] !== true) {
      return false;
    }
    // TODO map instead of spread
    setActiveWidgets([...activeWidgets, name]);
    return true;
  };

  // TODO
  const closeWidget = (name) => {
    if (validWidgets[name] !== true) {
      return false;
    }
    return true;
  };

  return {
    activeWidgets,
    closeWidget,
    showWidget
  };
}

export default useWidgets;
