import React, { useState } from 'react';
import ConsoleOutput from './ConsoleOutput';
import ConsoleInput from './ConsoleInput';
import inputString from '../../../os/cli/inputString';

// eslint-disable-next-line no-unused-vars
function ConEddy({ os }) {
  const [input, setInput] = useState('');

  const [outputs, setOutputs] = useState([]);

  return (
    <div id="app" className="flex flex-col my-0 mx-auto w-full justify-center items-center h-full">
      <ConsoleInput
        input={input}
        inputHandler={(e) => {
          setInput(e.target.value);
        }}
        handleEnter={(e) => {
          // const val = e.target.children[0].value;
          // console.log(e.target.children);
          e.preventDefault();

          const command = inputString(input);
          const output = os.commandBus().execute(command);
          console.log(output);
          outputs.push(input);
          setOutputs(outputs);
          setInput('');
        }}
      />
      <ConsoleOutput
        outputs={outputs}
      />
    </div>
  );
}

export default ConEddy;
