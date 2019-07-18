import React from 'react';
import SoftwareWindow from '../../../shared/components/SoftwareWindow/SoftwareWindow';

function TextEditor(props) {
  return (
    <SoftwareWindow title={props.title}>
      {props.children}
    </SoftwareWindow>
  );
}

export default TextEditor;
