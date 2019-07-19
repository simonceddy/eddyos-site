import React from 'react';
import SoftwareWindow from '../../../shared/components/SoftwareWindow/SoftwareWindow';
import RndWrapper from '../../../shared/components/RndWrapper';

function TextEditor({
  article,
  pos,
  size,
  setPos,
  setSize
}) {
  return (
    <RndWrapper pos={pos} size={size} setPos={setPos} setSize={setSize}>
      <SoftwareWindow title={article.title}>
        {article.body}
      </SoftwareWindow>
    </RndWrapper>
  );
}

export default TextEditor;
