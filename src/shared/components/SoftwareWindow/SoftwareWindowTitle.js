import React from 'react';
import { Link } from 'react-router-dom';
import ExitButton from '../ExitButton/ExitButton';

function SoftwareWindowTitle(props) {
  return (
    <div className="drag-handle text-2xl flex flex-row justify-between items-center m-1 bg-green-dark cursor-move">
      <div className="flex-1">{props.children}</div>
      <div className="items-center flex flex-row m-1">
        <Link to="/"><ExitButton /></Link>
      </div>
    </div>
  );
}

export default SoftwareWindowTitle;
