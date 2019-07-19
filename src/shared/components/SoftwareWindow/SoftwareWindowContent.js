import React from 'react';

function SoftwareWindowContent(props) {
  return (
    <div className="bg-black text-green text-xl p-1 whitespace-pre-line flex-1 cursor-text overflow-scroll">
      {props.children}
    </div>
  );
}

export default SoftwareWindowContent;
