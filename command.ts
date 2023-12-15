interface ICommand {
  execute(): void;
}
class Involker {
  on: ICommand;
  constructor(on: ICommand) {
    this.on = on;
  }
  execute() {
    this.on.execute();
  }
}
class TurnOfLight implements ICommand {
  #receiver: Light;
  constructor(receiver: Light) {
    this.#receiver = receiver;
  }
  execute(): void {
    this.#receiver.runCommand1(); //execute command
  }
  unexecute(): void {
    this.#receiver.runCommand2();
  }
}
class DimLight implements ICommand {
  #receiver: Light;
  constructor(receiver: Light) {
    this.#receiver = receiver;
  }
  execute(): void {
    this.#receiver.runCommand1(); //execute command
  }
  unexecute(): void {
    this.#receiver.runCommand2();
  }
}
class Light {
  runCommand1(): void {
    console.log("Execute command 1");
  }
  runCommand2(): void {
    console.log("Execute command 2");
  }
}

const turn_of_light = new Involker(new TurnOfLight(new Light()));
const dim_light = new Involker(new DimLight(new Light()));
turn_of_light.execute();
dim_light.execute();
