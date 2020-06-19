import React from 'react';
import ExitButton from '../ExitButton/ExitButton';

function SoftwareWindowTitle(props) {
  return (
    <div className="text-2xl flex flex-row justify-between items-center m-1 bg-green-dark">
      <div className="flex-1">{props.children}</div>
      <ExitButton />
    </div>
  );
}

export default SoftwareWindowTitle;
