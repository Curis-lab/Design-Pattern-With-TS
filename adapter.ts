interface IA{
    methodA():void
}
class ClassA implements IA{
    methodA(): void {
        console.log('method A');
    }
}

interface IB{
    methodB():void
}

class ClassB implements IB{
    methodB(): void {
        console.log('method B');
    }
}

class ClassAdapter implements IA{
    #classB: ClassB
    constructor(){
        this.#classB = new ClassB();
    }
    methodA(): void {
        this.#classB.methodB();
    }
}

const ADAPTED = [new ClassA(), new ClassAdapter()]
ADAPTED.forEach((item)=>{
    item.methodA();
})