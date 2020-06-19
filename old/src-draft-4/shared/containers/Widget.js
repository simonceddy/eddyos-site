import React from 'react';
import WidgetLayout from '../components/WidgetLayout';
import RndWrapper from '../components/RndWrapper';

function Widget({
  children,
  setPos,
  setSize,
  state
}) {
  return (
    <RndWrapper setPos={setPos} setSize={setSize} data={state}>
      <WidgetLayout>
        {children}
      </WidgetLayout>
    </RndWrapper>
  );
}

export default Widget;
