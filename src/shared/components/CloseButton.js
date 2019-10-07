import React from 'react';
import { MdClose as CloseIcon } from 'react-icons/all';
import StyledButton from './StyledButton';

function CloseButton({ onClick }) {
  return (
    <StyledButton type="button" onClick={onClick} className="text-2xl">
      <CloseIcon />
    </StyledButton>
  );
}

export default CloseButton;
