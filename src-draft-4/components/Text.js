import React from 'react';
import { withRouter } from 'react-router-dom';
import ContentWrapper from '../shared/components/ContentWrapper';
import WidgetTitleBar from '../shared/components/WidgetTitleBar';

function Text({ children, title = 'Text', history }) {
  return (
    <>
      <WidgetTitleBar onClose={() => history.push('/')}>
        {title}
      </WidgetTitleBar>
      <ContentWrapper>
        {children}
      </ContentWrapper>
    </>
  );
}

export default withRouter(Text);
