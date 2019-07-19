import Kernel from '../os/Kernel';

const useOs = () => {
  const os = new Kernel({});

  return {
    os
  };
};

export default useOs;
