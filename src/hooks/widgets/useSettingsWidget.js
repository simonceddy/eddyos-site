import storeWidget from '../../util/storeWidget';
import { getWidth, getHeight } from '../../util/widgetSize';

// TODO make responsive/add breakpoints
const settingsWidgetInitialState = {
  x: 15,
  y: 15,
  width: getWidth(250),
  height: getHeight(250),
};

const STORAGE_KEY = 'eddyosSettingsWidget';

const useSettingsWidget = () => storeWidget(STORAGE_KEY, settingsWidgetInitialState);

export default useSettingsWidget;
