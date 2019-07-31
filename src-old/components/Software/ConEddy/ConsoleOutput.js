import React from 'react';
import ScrollBar from 'react-perfect-scrollbar';

function ConsoleWindow({ outputs = [] }) {
  let currentId = 0;

  return (
    <div className="flex flex-col flex-1 w-full h-full overflow-hidden text-2xl p-2">
      <ScrollBar className="border border-green-dark bg-black text-green">
        <div className="flex flex-col-reverse justify-end">
          { outputs.map((val) => {
            currentId++;
            return (<p key={currentId}>{val}</p>);
          }) }
        </div>
      </ScrollBar>
    </div>
  );
}

export default ConsoleWindow;
