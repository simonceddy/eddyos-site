import React from 'react';
import SecondaryButton from '../../shared/components/Styled/SecondaryButton';

function EddyOSButton({ onClick }) {
  return (
    <SecondaryButton
      type="button"
      onClick={onClick}
      className="p-1 font-mono text-2xl font-bold relative"
    >
      eddyOS
    </SecondaryButton>
  );
}

export default EddyOSButton;
