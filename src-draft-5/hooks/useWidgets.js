/* eslint-disable no-unused-vars */
import { useState, useCallback } from 'react';
import { SETTINGS_WIDGET, TEXT_WIDGET, CLI_WIDGET } from '../shared/types/widgetTypes';

const widgets = {
  [SETTINGS_WIDGET]: false,
  [TEXT_WIDGET]: false,
  [CLI_WIDGET]: false,
};

function useWidgets() {
  const [activeWidgets, setActiveWidgets] = useState(widgets);

  const addWidget = (name, widget = {}) => {
    // TODO
    if (widgets[name] === undefined) {
      return false;
    }
    setActiveWidgets(() => ({ ...activeWidgets, [name]: widget }));
    return true;
  };

  // TODO
  const closeWidget = (name, callback = () => null) => {
    if (widgets[name] !== undefined) {
      callback();
      setActiveWidgets(() => ({ ...activeWidgets, [name]: false }));
    }
  };

  return {
    activeWidgets,
    closeWidget,
    addWidget
  };
}

export default useWidgets;
