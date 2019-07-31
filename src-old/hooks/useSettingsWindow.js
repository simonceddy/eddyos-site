import { useState } from 'react';

export default function useSettingsWindow() {
  const [settingsToggled, setSettingsToggled] = useState(false);
  const [settingsWindowPos, setSettingsWindowPos] = useState({ x: 30, y: 30 });
  const [
    settingsWindowDimensions,
    setSettingsWindowDimensions
  ] = useState({ width: 250, height: 220 });

  return {
    settingsToggled,
    setSettingsToggled,
    settingsWindowPos,
    setSettingsWindowPos,
    settingsWindowDimensions,
    setSettingsWindowDimensions
  };
}
