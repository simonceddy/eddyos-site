import React from 'react';
import { MdClose as Close } from 'react-icons/md';

function ExitButton(props) {
  return (
    <div className="exit-button" {...props}>
      <Close />
    </div>
  );
}

export default ExitButton;
