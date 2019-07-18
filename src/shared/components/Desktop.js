import React from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout';

const ResponsiveGridLayout = WidthProvider(Responsive);

function Desktop(props) {
  const layouts = {
    lg: [{
      i: 'a', x: 2, y: 1, w: 3, h: 2
    }],
    md: [{
      i: 'a', x: 2, y: 1, w: 3, h: 2
    }],
    sm: [{
      i: 'a', x: 2, y: 1, w: 3, h: 2
    }],
    xs: [{
      i: 'a', x: 2, y: 1, w: 3, h: 2
    }],
    xxs: [{
      i: 'a', x: 2, y: 1, w: 3, h: 2
    }],
  };

  return (
    <div className="flex-1 h-full w-full overflow-hidden">
      <ResponsiveGridLayout
        className="layout flex-1"
        layouts={layouts}
        breakpoints={{
          lg: 1200,
          md: 996,
          sm: 768,
          xs: 480,
          xxs: 0
        }}
        cols={{
          lg: 24,
          md: 20,
          sm: 12,
          xs: 8,
          xxs: 4
        }}
        maxRows={12}
        preventCollision
        isDraggable
        isResizable
        isRearrangeable
      >
        <div key="a">{props.children}</div>
      </ResponsiveGridLayout>
      {/* <div id="wrapped-content" className="flex-1">
        {props.children}
      </div> */}
    </div>
  );
}

export default Desktop;
