export enum accessOptions {
    administrator = 'administrator',
    manager = 'gerente',
    employee = 'funcionario',
    undefined = 'Não definido'
}

interface IPerson  {
  fullName: string,
  address?: string[], 
}

export interface IUser extends IPerson{
  register?: string | number,
  access?: accessOptions
  active?: boolean,
}
