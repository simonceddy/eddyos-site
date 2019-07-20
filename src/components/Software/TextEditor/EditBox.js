import React from 'react';

function EditBox({ toggleEditMode, val }) {
  return (
    <textarea
      onDoubleClick={toggleEditMode}
      className="bg-black text-green text-xl p-2 whitespace-pre-line flex-1 cursor-text overflow-scroll"
      value={val}
      onChange={() => {}}
    />
  );
}

export default EditBox;
