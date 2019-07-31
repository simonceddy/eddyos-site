// import { useState } from 'react';
import useAppWindow from './useAppWindow';

const useApp = (os) => {
  console.log(os);
  return {
    useAppWindow
  };
};

export default useApp;
