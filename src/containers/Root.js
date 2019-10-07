/* eslint-disable no-unused-vars */
import React, { useCallback } from 'react';
import { Route, withRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import App from '../components/App';
import useTheme from '../hooks/useTheme';
import TextWidget from './TextWidget';
import SettingsWidget from './SettingsWidget';
import CliWidget from './CliWidget';
import { CLI_WIDGET, TEXT_WIDGET, SETTINGS_WIDGET } from '../shared/types/widgetTypes';
import Widgets from './Widgets';
import useWidgets from '../hooks/useWidgets';
import WidgetLoader from '../shared/containers/WidgetLoader';

function Root({ history }) {
  const { theme: mode, setThemeMode } = useTheme();
  const { activeWidgets, addWidget, closeWidget } = useWidgets();
  console.log(history);
  const widgets = {
    [CLI_WIDGET]: {
      component: CliWidget,
      props: {
        onClose: () => {
          console.log('closing cli widget');
          closeWidget(CLI_WIDGET, history.push('/'));
        }
      }
    },
    [TEXT_WIDGET]: {
      component: TextWidget,
      props: {
        onClose: () => {
          console.log('closing text widget');
          closeWidget(TEXT_WIDGET, history.push('/'));
        }
      }
    },
    [SETTINGS_WIDGET]: {
      props: {
        setTheme: setThemeMode,
        onClose: () => {
          console.log('closing settings widget');
          closeWidget(SETTINGS_WIDGET, history.push('/'));
        }
      },
      component: SettingsWidget
    },
  };

  const renderWidgets = useCallback(() => (
    <Widgets widgets={activeWidgets} />
  ), [activeWidgets]);

  console.log('rendering root');
  return (
    <ThemeProvider theme={{ mode }}>
      <App>
        {renderWidgets()}
        <Route
          path="/text"
          render={() => (
            <WidgetLoader
              loadWidget={() => addWidget(TEXT_WIDGET, widgets[TEXT_WIDGET])}
            />
          )}
        />
        <Route
          path="/settings"
          render={() => (
            <WidgetLoader
              loadWidget={() => addWidget(SETTINGS_WIDGET, widgets[SETTINGS_WIDGET])}
            />
          )}
        />
        <Route
          path="/cli"
          render={() => (
            <WidgetLoader
              loadWidget={() => addWidget(CLI_WIDGET, widgets[CLI_WIDGET])}
            />
          )}
        />
      </App>
    </ThemeProvider>
  );
}

export default withRouter(Root);
