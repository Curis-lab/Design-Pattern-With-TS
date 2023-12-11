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
class Duck {
  fly(flyStyle: IFlyStyle) {
    return new flyStyle();
  }
  display(displayStyle: IDisplayStyle) {
    return new displayStyle();
  }
}

const OBJECT_RETURN = new Duck();

console.log(OBJECT_RETURN.fly(NoneFly).method());
console.log(OBJECT_RETURN.display(Phone).showOn());
