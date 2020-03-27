import React from 'react';
import PrimaryButton from '../../shared/components/Styled/PrimaryButton';

function MenuItem({ children, Icon, onClick }) {
  return (
    <PrimaryButton
      type="button"
      onClick={onClick}
      className="w-full p-1 flex flex-row justify-start items-center"
    >
      {Icon ? (
        <Icon size="2rem" className="mr-2" />
      ) : null}
      <span className="font-mono">
        {children}
      </span>
    </PrimaryButton>
  );
}

export default MenuItem;
