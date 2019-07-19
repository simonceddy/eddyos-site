import React from 'react';
import { Link } from 'react-router-dom';

function ErrorBox({ code, message }) {
  return (
    <div className="w-full h-full flex flex-col drag-handle bg-green-dark text-black items-center">
      <div className="w-full">
        <h1 className="text-5xl">Error {code || '3RR0R'}</h1>
      </div>
      <div className="flex-1 w-full border border-2 border-green-dark flex justify-center items-center bg-black text-green">
        <p>{message || 'Could not deal with this request!'}</p>
      </div>
      <Link to="/" className="menu-item w-5/6 text-center p-1 bg-green text-black">Dismiss</Link>
    </div>
  );
}

export default ErrorBox;
