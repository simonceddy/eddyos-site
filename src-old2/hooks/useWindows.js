import useTextWindow from './useTextWindow';
import useSettingsWindow from './useSettingsWindow';

export default function useWindows() {
  return {
    useTextWindow,
    useSettingsWindow
  };
}
