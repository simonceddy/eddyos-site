import React from 'react';
import SoftwareWindow from '../../../shared/components/SoftwareWindow/SoftwareWindow';
import RndWrapper from '../../../shared/RndWrapper';

function TextEditor({ article }) {
  return (
    <RndWrapper>
      <SoftwareWindow title={article.title}>
        {article.body}
      </SoftwareWindow>
    </RndWrapper>
  );
}

export default TextEditor;
