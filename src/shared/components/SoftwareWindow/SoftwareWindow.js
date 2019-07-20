import React from 'react';

function SoftwareWindow(props) {
  return (
    <div className="software-window bg-green-dark text-black border border-green-dark border-2 w-full h-full flex flex-col">
      {props.children}
    </div>
  );
}

export default SoftwareWindow;
