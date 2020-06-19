import React from 'react';
import TitleBar from './TitleBar';
import CloseButton from './CloseButton';

function WidgetTitleBar({ children, onClose }) {
  return (
    <div
      className="drag-handle flex flex-row justify-between items-center py-1 px-2"
    >
      <TitleBar>{children}</TitleBar>
      <CloseButton onClick={onClose} />
    </div>
  );
}

export default WidgetTitleBar;
