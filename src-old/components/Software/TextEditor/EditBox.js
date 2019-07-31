import React from 'react';
import Scrollbar from 'react-perfect-scrollbar';

function EditBox({ toggleEditMode, val }) {
  return (
    <Scrollbar className="p-2 flex-1">
      <textarea
        onDoubleClick={toggleEditMode}
        className="bg-black text-green text-xl whitespace-pre-line w-full h-full cursor-text self-stretch"
        value={val}
        onChange={() => {}}
      />
    </Scrollbar>
  );
}

export default EditBox;
