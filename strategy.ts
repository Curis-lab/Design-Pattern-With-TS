//fly decoration
interface IFly {
  method(): string;
}

class NoneFly implements IFly {
  method(): string {
    return `None Fly`;
  }
}
class JetFly implements IFly {
  method(): string {
    return `Fly like jet`;
  }
}

interface IFlyStyle {
  new (): IFly;
}

interface IDisplay {
  showOn(): string;
}

class Tablet implements IDisplay {
  showOn(): string {
    return `display on tablet style`;
  }
}
class Phone implements IDisplay {
  showOn(): string {
    return `display on phone style`;
  }
}

interface IDisplayStyle {
  new (): IDisplay;
}
interface IDuck{
  fly(fly: IFlyStyle): void
}
class Duck implements IDuck{
  fly(flyStyle: IFlyStyle) {
    return new flyStyle();
  }
  display(displayStyle: IDisplayStyle) {
    return new displayStyle();
  }
}

const OBJECT_RETURN = new Duck();

const rubberDuck = {
    fly: OBJECT_RETURN.fly(NoneFly).method(),
    show: OBJECT_RETURN.display(Phone).showOn()
}

const mountainDuck = {
    fly: OBJECT_RETURN.fly(JetFly).method(),
    show: OBJECT_RETURN.display(Tablet).showOn()
}

console.log('rubberDuck', rubberDuck);
console.log('mountainDuck', mountainDuck);