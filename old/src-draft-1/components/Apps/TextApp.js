import React from 'react';
import SoftwareWindow from '../../shared/components/SoftwareWindow/SoftwareWindow';

function TextApp({ title, children, onClose }) {
  return (
    <SoftwareWindow
      title={title || 'Text'}
      onClose={onClose}
    >
      { children }
    </SoftwareWindow>
  );
}

export default TextApp;
