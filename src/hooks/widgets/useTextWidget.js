import storeWidget from '../../util/storeWidget';
import { getWidth, getHeight } from '../../util/widgetSize';

// TODO make responsive/add breakpoints
const textWidgetInitialState = {
  x: 20,
  y: 20,
  width: getWidth(250),
  height: getHeight(250),
};

const STORAGE_KEY = 'eddyosTextWidget';

const useTextWidget = () => storeWidget(STORAGE_KEY, textWidgetInitialState);

export default useTextWidget;
