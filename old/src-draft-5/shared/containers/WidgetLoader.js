import { useEffect } from 'react';

function WidgetLoader({ loadWidget = () => null }) {
  // TODO
  // eslint-disable-next-line no-unused-vars
  useEffect(() => {
    loadWidget();
  }, []);
  return null;
}

export default WidgetLoader;
