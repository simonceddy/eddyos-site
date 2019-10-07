import React from 'react';
import { withRouter } from 'react-router-dom';
import { withTheme } from 'styled-components';
import useSettingsWidget from '../hooks/widgets/useSettingsWidget';
import Widget from '../shared/containers/Widget';
import Settings from '../components/Widgets/Settings';

function SettingsWidget({
  history,
  theme,
  setTheme = () => null,
  onClick = () => null,
  zIndex,
  onClose,
  selected
}) {
  const { mode: themeMode } = theme;
  const { state, setPos, setSize } = useSettingsWidget();
  return (
    <Widget
      data={state}
      setPos={setPos}
      setSize={setSize}
      title="Settings"
      onClose={onClose}
      onClick={(e) => {
        history.push('/settings');
        onClick(e);
      }}
      zIndex={zIndex}
      selected={selected}
    >
      <Settings themeMode={themeMode} setTheme={setTheme} />
    </Widget>
  );
}

export default withRouter(withTheme(SettingsWidget));
