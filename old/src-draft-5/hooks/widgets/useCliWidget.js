import storeWidget from '../../util/storeWidget';
import { getWidth, getHeight } from '../../util/widgetSize';

// TODO make responsive/add breakpoints
const cliWidgetInitialState = {
  x: 35,
  y: 35,
  width: getWidth(250),
  height: getHeight(250),
};

const STORAGE_KEY = 'eddyosCliWidget';

const useCliWidget = () => storeWidget(STORAGE_KEY, cliWidgetInitialState);

export default useCliWidget;
