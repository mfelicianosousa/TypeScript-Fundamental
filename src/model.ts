export enum accessOptions {
    administrator = 'administrator',
    manager = 'gerente',
    employee = 'funcionario',
    undefined = 'Não definido'
}

export type userType = {
  fullName: string,
  register?: string | number,
  access?: accessOptions
  active?: boolean,
}