interface ISwitchCommand{
    execute(commandName:string):void
}

interface ICommand{
    execute():void
}

export default class Light {
    turnOn():void{
        console.log('Light turned ON');
    }
    turnOff():void{
        console.log('Light turned OFF');
    }
}

class SwitchOnCommand implements ISwitchCommand{    
    #receiver: Light;
    constructor(receiver: Light){
        this.#receiver = receiver
    }
    execute(): void {
        this.#receiver.turnOn();
    }
}

class Switch{
    #commands: {[id:string]: ICommand}
    #history: [number, string][]
    constructor(){
        this.#commands = {}
        this.#history = []
    }

    showHistory():void{
        this.#history.forEach((row)=>{
            console.log(`${row[0]} : ${row[1]}`);
        })
    }
    register(commandName:string, command:ICommand):void{
        this.#commands[commandName] = command
    }
}

const light = new Light();

const SWITCH = new Switch();
