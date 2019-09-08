import React from 'react';
import { IoMdClose as Close } from 'react-icons/io';

function ExitButton({ handler }) {
  return (
    <button type="button" className="cursor-pointer" onClick={handler}>
      <Close />
    </button>
  );
}

export default ExitButton;
