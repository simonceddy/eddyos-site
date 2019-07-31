/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import useSettingsWindow from './useSettingsWindow';
import useTextWindow from './useTextWindow';
import SoftwareWrapper from '../shared/components/SoftwareWrapper';

export default function useWindows() {
  const {
    settingsToggled,
    setSettingsToggled,
    settingsWindowPos,
    setSettingsWindowPos,
    settingsWindowDimensions,
    setSettingsWindowDimensions,
  } = useSettingsWindow();

  const {
    textWindowToggled,
    setTextWindowToggled,
    textWindowPos,
    setTextWindowPos,
    textWindowDimensions,
    setTextWindowDimensions,
  } = useTextWindow();

  const [windows, setWindows] = useState([]);

  const removeWindow = (type) => {
    const key = windows.findIndex(app => app.type === type);
    console.log(key);
    if (key !== undefined) {
      windows.splice(key, 1);
      console.log(windows);
      setWindows(windows);
    }
  };

  const makeWindowComponent = (type, windowProps) => {
    const WindowComponent = props => (
      <SoftwareWrapper key={props.key} {...windowProps} onClose={() => removeWindow(type)}>
        {props.children}
      </SoftwareWrapper>
    );

    return WindowComponent;
  };

  const addWindow = (type, component) => {
    const key = windows.length;
    windows.push({
      type,
      component,
      focused: false,
      key
    });
    setWindows(windows);
  };

  const setFocused = (type) => {
    setWindows(windows.map((app) => {
      if (app.type === type) {
        console.log(app);
        // return { ...app, focused: true };
      }
      return { ...app, focused: false };
    }));

    console.log(windows);
  };

  const makeWindow = (type) => {
    let windowProps = false;
    switch (type) {
      case 'text':
        windowProps = {
          pos: textWindowPos,
          setPos: setTextWindowPos,
          size: textWindowDimensions,
          setSize: setTextWindowDimensions,
        };
        break;
      case 'settings':
        windowProps = {
          pos: settingsWindowPos,
          setPos: setSettingsWindowPos,
          size: settingsWindowDimensions,
          setSize: setSettingsWindowDimensions,
        };
        break;
      default:
    }
    if (!windowProps) return null;

    const component = makeWindowComponent(type, windowProps);

    addWindow(type, component);

    return component;
  };

  const getWindow = (type) => {
    let appWindow = windows.find(app => app.type === type);
    if (appWindow === undefined) {
      appWindow = makeWindow(type);
    }
    return appWindow;
  };


  return {
    windows,
    setFocused,
    getWindow,
    removeWindow
  };
}
