import { useState } from 'react';

export default function useTextWindow() {
  const [toggled, setToggled] = useState(false);
  const [pos, setPos] = useState({ x: 20, y: 20 });
  const [size, setSize] = useState({ width: 250, height: 220 });

  return {
    toggled,
    setToggled,
    pos,
    setPos,
    size,
    setSize
  };
}
