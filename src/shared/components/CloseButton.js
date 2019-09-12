import React from 'react';
import { MdClose as CloseIcon } from 'react-icons/all';

function CloseButton({ onClick }) {
  return (
    <button type="button" onClick={onClick}>
      <CloseIcon />
    </button>
  );
}

export default CloseButton;
