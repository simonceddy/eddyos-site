import React from 'react';
import { withRouter } from 'react-router-dom';
import { withTheme } from 'styled-components';
import useSettingsWidget from '../hooks/widgets/useSettingsWidget';
import Widget from '../shared/containers/Widget';
import Settings from '../components/Widgets/Settings';

function SettingsWidget({ history, theme, setTheme = () => null }) {
  const { mode: themeMode } = theme;
  const { state, setPos, setSize } = useSettingsWidget();
  return (
    <Widget
      data={state}
      setPos={setPos}
      setSize={setSize}
      title="Settings"
      onClose={() => {
        console.log('closing settings widget');
        history.push('/');
      }}
    >
      <Settings themeMode={themeMode} setTheme={setTheme} />
    </Widget>
  );
}

export default withRouter(withTheme(SettingsWidget));
