import { useState } from 'react';

const useAppWindow = () => {
  const [textWindowPos, setTextWindowPos] = useState({ x: 20, y: 20 });
  const [textWindowDimensions, setTextWindowDimensions] = useState({ width: 250, height: 220 });

  return {
    textWindowPos,
    setTextWindowPos,
    textWindowDimensions,
    setTextWindowDimensions
  };
};

export default useAppWindow;
