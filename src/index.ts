
const button = <HTMLInputElement>document.querySelector('button[id="add"]') ;
const accessRadio = <HTMLElement>document.getElementById('accessRadio') ;
button.addEventListener('click',addEmployee)
/*
enum accessOptions {
  administrator = 1,
  manager,
  employee
}
*/
enum accessOptions {
  administrator = 'administrator',
  manager = 'gerente',
  employee = 'funcionario'
}

// const accessOptionsValues: ArrayLike<accessOptions> = Object.values(accessOptions);
const accessOptionsValues = Object.values(accessOptions);

accessOptionsValues.forEach((value: string, i: number) => {
   accessRadio.innerHTML += `
        <div class="form-check">
             <input class="form-check-input" type="radio" name="access" id="accessRadio_${i}" value="${value}" checked>
             <label class="form-check-label capitaç" for="accessRadio_${i}">
                  ${value}
             </label>
       </div>
   `
})

function addEmployee(): void {
  let content = document.getElementById('content') as HTMLInputElement; 

  let fullName: HTMLInputElement | null = document.querySelector('#fullName');
  let register = <HTMLInputElement>document.querySelector('#register');
  let access = document.querySelector('input[name="access"]:checked') as HTMLInputElement ;
  let active=  document.querySelector('#active') as HTMLInputElement ;

  content.innerHTML += <string>createLine(

    fullName!.value,
    register.value,
    access.value,
    active.checked,
  );
}
function createLine(
  fullName: string,
  NrRegistro: string | number,
  access: string,
  active: boolean

): string {
    return `
    <div class="card mb-1">
      <div class="card-header">
        ${NrRegistro}
      </div>
      <div class="card-body">
        <h5 class="card-title">${fullName}</h5>
        <a href="#" class="btn btn-primary">${active ? 'Ativo':'Inativo'}</a> 
      </div>
      <div class="card-footer bg-transparent border-success">
         Acesso: ${access}
      </div>
    </div>
   `
}


/*
function createLine(
   fullName: string,
   NrRegistro: string | number,
   access: string,
   active: boolean

): string {
return `<br>
${fullName}<br>
${NrRegistro}<br>
${access}<br>
${active}<br>
`;
}


function traslateAcessOption(option: accessOptions): string {
   switch(option){
      case accessOptions.administrator:
        return 'Administrador';
      case accessOptions.manager:
        return 'Gerente';
      default:
        return 'Funcionário';
   }
}
*/
