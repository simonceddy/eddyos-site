import React from 'react';
import MutableSoftwareWindowTitle from './MutableSoftwareWindowTitle';
import MutableSoftwareWindowContent from './MutableSoftwareWindowContent';

function MutableSoftwareWindow(props) {
  return (
    <div className="software-window bg-green-dark text-black border border-green-dark border-2">
      <MutableSoftwareWindowTitle>{props.title}</MutableSoftwareWindowTitle>
      <MutableSoftwareWindowContent>{props.children}</MutableSoftwareWindowContent>
    </div>
  );
}

export default MutableSoftwareWindow;
