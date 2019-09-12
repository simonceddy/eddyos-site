import React from 'react';
import { withRouter } from 'react-router-dom';
import TitleBar from '../shared/components/TitleBar';
import CloseButton from '../shared/components/CloseButton';
import ContentWrapper from '../shared/components/ContentWrapper';

function Text({ children, title = 'Text', onClose }) {
  return (
    <>
      <TitleBar>
        {title}
        <CloseButton onClick={onClose} />
      </TitleBar>
      <ContentWrapper>
        {children}
      </ContentWrapper>
    </>
  );
}

export default withRouter(Text);
