import React from 'react';
import { string, func } from 'prop-types';

function ConsoleInput({ input, inputHandler, handleEnter }) {
  return (
    <div className="cursor-text w-full">
      <form onSubmit={handleEnter} className="w-full p-2 flex flex-col">
        <label htmlFor="cli-input" className="flex flex-row justify-between text-2xl bg-black  text-green">
          &gt;&gt;
          <input
            name="cli-input"
            id="cli-input"
            className="ml-1 text-input flex-1"
            type="text"
            value={input}
            onChange={inputHandler}
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck={false}
          />
        </label>
      </form>
    </div>
  );
}

ConsoleInput.propTypes = {
  input: string.isRequired,
  inputHandler: func.isRequired,
  handleEnter: func.isRequired
};

export default ConsoleInput;
