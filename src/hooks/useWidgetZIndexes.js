import { useState } from 'react';
import { CLI_WIDGET, TEXT_WIDGET, SETTINGS_WIDGET } from '../shared/types/widgetTypes';

const defaultState = {
  [SETTINGS_WIDGET]: 20,
  [TEXT_WIDGET]: 20,
  [CLI_WIDGET]: 20
};

export default function useWidgetZIndexes() {
  const [zIndexes, setZIndexes] = useState(defaultState);
  const [topWidget, setTopWidget] = useState(null);

  const setTop = (name) => {
    if (zIndexes[name] !== undefined) {
      const newState = topWidget === null
        ? { ...defaultState, [name]: 30 }
        : { ...defaultState, [topWidget]: 25, [name]: 30 };

      setTopWidget(name);
      setZIndexes(newState);
    }
  };

  return {
    topWidget,
    zIndexes,
    setTop
  };
}
