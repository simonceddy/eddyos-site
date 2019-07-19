import React from 'react';
import Draggable from 'react-draggable';

function Desktop2({ children }) {
  return (
    <div className="flex-1 h-full w-full overflow-hidden">
      <Draggable
        axis="x"
        handle=".handle"
        defaultPosition={{ x: 2, y: 1 }}
        position={null}
        grid={[5, 5]}
        scale={1}
        // onStart={this.handleStart}
        // onDrag={this.handleDrag}
        // onStop={this.handleStop}
      >
        <div>
          <div className="handle">
            <div>
              {children}
            </div>
          </div>
        </div>
      </Draggable>
    </div>
  );
}

export default Desktop2;
