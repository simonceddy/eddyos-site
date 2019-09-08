import commands from './commands';

function CommandBus() {
  this.getCommands = () => commands;

  this.getCommand = name => commands[name] || false;

  this.execute = (command = {}) => {
    if (command.name === undefined) {
      return false;
    }

    const resolvedCommand = this.getCommand(command.name);

    /* if (!resolvedCommand) {
      // return invalid command
      return false;
    } */
    console.log(resolvedCommand);

    return this;
  };
}

export default CommandBus;
