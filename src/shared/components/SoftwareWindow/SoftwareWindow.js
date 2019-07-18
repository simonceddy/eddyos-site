import React from 'react';
import SoftwareWindowTitle from './SoftwareWindowTitle';
import SoftwareWindowContent from './SoftwareWindowContent';

function SoftwareWindow(props) {
  return (
    <div className="software-window bg-green-dark text-black border border-green-dark border-2">
      <SoftwareWindowTitle>{props.title}</SoftwareWindowTitle>
      <SoftwareWindowContent>{props.children}</SoftwareWindowContent>
    </div>
  );
}

export default SoftwareWindow;
