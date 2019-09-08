import React from 'react';
import styled from 'styled-components';
import { MdClose as Close } from 'react-icons/md';

const StyledButton = styled.button`
`;

function ExitButton({ onClick }) {
  return (
    <StyledButton type="button" onClick={onClick} className="cursor-pointer">
      <Close />
    </StyledButton>
  );
}

export default ExitButton;
