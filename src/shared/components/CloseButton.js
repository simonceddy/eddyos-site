import React from 'react';
import { MdClose as CloseIcon } from 'react-icons/md';
import SecondaryButton from './Styled/SecondaryButton';

function CloseButton({ onClick }) {
  return (
    <SecondaryButton type="button" onClick={onClick} className="text-2xl">
      <CloseIcon />
    </SecondaryButton>
  );
}

export default CloseButton;
