import { useState } from 'react';

export default function useTextWindow() {
  const [textWindowToggled, setTextWindowToggled] = useState(false);
  const [textWindowPos, setTextWindowPos] = useState({ x: 20, y: 20 });
  const [textWindowDimensions, setTextWindowDimensions] = useState({ width: 250, height: 220 });

  return {
    textWindowToggled,
    setTextWindowToggled,
    textWindowPos,
    setTextWindowPos,
    textWindowDimensions,
    setTextWindowDimensions
  };
}
