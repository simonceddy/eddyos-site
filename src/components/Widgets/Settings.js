import React from 'react';
import { withRouter } from 'react-router-dom';
import ThemeSelector from './Settings/ThemeSelector';
import ContentWrapper from '../../shared/components/ContentWrapper';
import WidgetTitleBar from '../../shared/components/WidgetTitleBar';

function Settings({ history, setTheme, themeMode }) {
  return (
    <>
      <WidgetTitleBar onClose={() => history.push('/')}>
        Settings
      </WidgetTitleBar>
      <ContentWrapper>
        <ThemeSelector currentTheme={themeMode} setTheme={setTheme} />
      </ContentWrapper>
    </>
  );
}

export default withRouter(Settings);
