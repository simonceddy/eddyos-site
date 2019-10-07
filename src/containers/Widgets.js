/* eslint-disable no-unused-vars */
import React, { useCallback } from 'react';
import useWidgetZIndexes from '../hooks/useWidgetZIndexes';
import useWidgets from '../hooks/useWidgets';
import { CLI_WIDGET, TEXT_WIDGET, SETTINGS_WIDGET } from '../shared/types/widgetTypes';

function Widgets({ widgets = {} }) {
  const widgetKeys = Object.keys(widgets);
  const widgetComponents = Object.entries(widgets);

  const { zIndexes, setTop, topWidget } = useWidgetZIndexes();
  const renderWidgets = useCallback(() => widgetComponents.map((widget, id) => {
    if (widget[1] === false) return null;
    const { component, props = {} } = widget[1];

    if (widgetKeys[id] === undefined) {
      return null;
    }
    const key = widgetKeys[id];
    const wProps = {
      selected: false,
      zIndex: zIndexes[key],
      ...props
    };
    if (topWidget !== key) {
      wProps.selected = true;
      wProps.onClick = () => setTop(key);
    }
    return (
      <div key={key}>
        {component(wProps)}
      </div>
    );
  }),
  [widgetComponents, setTop, zIndexes, topWidget]);
  return (
    <>
      {renderWidgets()}
    </>
  );
}

export default Widgets;
