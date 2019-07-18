import React from 'react';
import Menu from '../Menu/Menu';

function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-5xl w-full text-center">
        Simon Eddy
      </h1>
      <Menu />
    </div>
  );
}

export default Home;
