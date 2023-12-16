interface IComposite{
  IsComposite?:Composite
  name:string
  method():void
}

class Composite implements IComposite{
  IsComposite?: Composite
  components:IComposite[]
  name:string
  
  constructor(name:string){
    this.name = name;
    this.components = [];
  }
  
  method():void{
    const parent = this.IsComposite? this.IsComposite.name: 'none'
    console.log(`<Composite>\tname:${this.name}\tParent:\t${parent} \tComponents:${this.components.length}`);
    this.components.forEach((c)=>{
      c.method();
    })
  }

  Add(component: IComposite){
    this.components.push(component);
  }
  
}

class Leaf implements IComposite{
  //set the last leaf
  IsComposite?: Composite = undefined;
  name:string
  constructor(name:string){
    this.name = name;
  }
  method():void{
    const parent = this.IsComposite? this.IsComposite.name : 'none'
    console.log(`<Leaf>\tName:${this.name}\tParent:${parent}`)
  }
}

const LEAF_1 = new Leaf('leaf-1');
const LEAF_2 = new Leaf('leaf-2');

const COMP_1 = new Composite('comp-1');
const COMP_2 = new Composite('comp-2');

COMP_2.Add(LEAF_1);
COMP_2.Add(LEAF_2);

COMP_1.Add(LEAF_1);
COMP_1.Add(COMP_2);

COMP_1.method()