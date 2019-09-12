import React from 'react';
import { withRouter } from 'react-router-dom';
import Widget from '../../shared/containers/Widget';
import ThemeSelector from './Settings/ThemeSelector';
import TitleBar from '../../shared/components/TitleBar';
import CloseButton from '../../shared/components/CloseButton';
import ContentWrapper from '../../shared/components/ContentWrapper';

function Settings({ history, setTheme, themeMode }) {
  return (
    <Widget>
      <TitleBar>
        Settings
        <CloseButton onClick={() => history.push('/')} />
      </TitleBar>
      <ContentWrapper>
        <ThemeSelector currentTheme={themeMode} setTheme={setTheme} />
      </ContentWrapper>
    </Widget>
  );
}

export default withRouter(Settings);
