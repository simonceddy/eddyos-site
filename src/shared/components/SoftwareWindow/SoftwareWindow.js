import React from 'react';
import SoftwareWindowTitle from './SoftwareWindowTitle';
import SoftwareWindowContent from './SoftwareWindowContent';

function SoftwareWindow(props) {
  return (
    <div className="software-window bg-green-dark text-black border border-green-dark border-2 w-full h-full flex flex-col p-1">
      <SoftwareWindowTitle>{props.title}</SoftwareWindowTitle>
      <SoftwareWindowContent>{props.children}</SoftwareWindowContent>
    </div>
  );
}

export default SoftwareWindow;
