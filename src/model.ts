export enum accessOptions {
    administrator = 'administrator',
    manager = 'gerente',
    employee = 'funcionario',
    undefined = 'Não definido'
}

class Person  {
  // propriedades

  
  constructor(
    public fullName: string,
    public address?: string[]
  ){

  }
  // funcionalidades
}

export class User extends Person{
  // propriedades
 
  
  access?: accessOptions;
  active?: boolean;

  //constructor
  constructor(
    public fullName : string,
    public register?: string | number,

  ){
    super(fullName);
  }
}
