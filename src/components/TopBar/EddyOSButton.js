import React from 'react';

function EddyOSButton({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="p-1 m-1 font-mono text-xl"
    >
      eddyOS
    </button>
  );
}

export default EddyOSButton;
