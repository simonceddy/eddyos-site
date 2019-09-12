import React from 'react';
import WidgetLayout from '../components/WidgetLayout';

function Widget({
  children
}) {
  return (
    <WidgetLayout>
      {children}
    </WidgetLayout>
  );
}

export default Widget;
