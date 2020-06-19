import React from 'react';
import { bool, func } from 'prop-types';

function BringToFront({ children, isFocused, handleFocus }) {
  const style = {
    zIndex: (isFocused ? 20 : 10)
  };

  return (
    <div role="presentation" onClick={handleFocus} style={style}>
      {children}
    </div>
  );
}

BringToFront.propTypes = {
  isFocused: bool.isRequired,
  handleFocus: func.isRequired
};

export default BringToFront;
