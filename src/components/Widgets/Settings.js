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
        <div className="flex flex-row justify-between">
          <span className="ml-1">Select theme:</span>
          <span className="mr-1">
            <ThemeSelector currentTheme={themeMode} setTheme={setTheme} />
          </span>
        </div>
      </ContentWrapper>
    </>
  );
}

export default withRouter(Settings);
