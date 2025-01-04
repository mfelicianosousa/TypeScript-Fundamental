/******/ (() => { // webpackBootstrap
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
var button = document.querySelector('button[id="add"]');
var accessRadio = document.getElementById('accessRadio');
button.addEventListener('click', addEmployee);
/*
enum accessOptions {
  administrator = 1,
  manager,
  employee
}
*/
var accessOptions;
(function (accessOptions) {
    accessOptions["administrator"] = "administrator";
    accessOptions["manager"] = "gerente";
    accessOptions["employee"] = "funcionario";
})(accessOptions || (accessOptions = {}));
// const accessOptionsValues: ArrayLike<accessOptions> = Object.values(accessOptions);
var accessOptionsValues = Object.values(accessOptions);
accessOptionsValues.forEach(function (value, i) {
    accessRadio.innerHTML += "\n        <div class=\"form-check\">\n             <input class=\"form-check-input\" type=\"radio\" name=\"access\" id=\"accessRadio_".concat(i, "\" value=\"").concat(value, "\" checked>\n             <label class=\"form-check-label capita\u00E7\" for=\"accessRadio_").concat(i, "\">\n                  ").concat(value, "\n             </label>\n       </div>\n   ");
});
function addEmployee() {
    var content = document.getElementById('content');
    var fullName = document.querySelector('#fullName');
    var register = document.querySelector('#register');
    var access = document.querySelector('input[name="access"]:checked');
    var active = document.querySelector('#active');
    content.innerHTML += createLine(fullName.value, register.value, access.value, active.checked);
}
function createLine(fullName, NrRegistro, access, active) {
    return "\n    <div class=\"card mb-1\">\n      <div class=\"card-header\">\n        ".concat(NrRegistro, "\n      </div>\n      <div class=\"card-body\">\n        <h5 class=\"card-title\">").concat(fullName, "</h5>\n        <a href=\"#\" class=\"btn btn-primary\">").concat(active ? 'Ativo' : 'Inativo', "</a> \n      </div>\n      <div class=\"card-footer bg-transparent border-success\">\n         Acesso: ").concat(access, "\n      </div>\n    </div>\n   ");
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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7OztBQUNBLElBQU0sTUFBTSxHQUFxQixRQUFRLENBQUMsYUFBYSxDQUFDLGtCQUFrQixDQUFDLENBQUU7QUFDN0UsSUFBTSxXQUFXLEdBQWdCLFFBQVEsQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLENBQUU7QUFDekUsTUFBTSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBQyxXQUFXLENBQUM7QUFDNUM7Ozs7OztFQU1FO0FBQ0YsSUFBSyxhQUlKO0FBSkQsV0FBSyxhQUFhO0lBQ2hCLGdEQUErQjtJQUMvQixvQ0FBbUI7SUFDbkIseUNBQXdCO0FBQzFCLENBQUMsRUFKSSxhQUFhLEtBQWIsYUFBYSxRQUlqQjtBQUVELHNGQUFzRjtBQUN0RixJQUFNLG1CQUFtQixHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUM7QUFFekQsbUJBQW1CLENBQUMsT0FBTyxDQUFDLFVBQUMsS0FBYSxFQUFFLENBQVM7SUFDbEQsV0FBVyxDQUFDLFNBQVMsSUFBSSwrSUFFOEQsQ0FBQyx3QkFBWSxLQUFLLHdHQUNwQyxDQUFDLG9DQUNyRCxLQUFLLGdEQUdyQjtBQUNKLENBQUMsQ0FBQztBQUVGLFNBQVMsV0FBVztJQUNsQixJQUFJLE9BQU8sR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBcUIsQ0FBQztJQUVyRSxJQUFJLFFBQVEsR0FBNEIsUUFBUSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUM1RSxJQUFJLFFBQVEsR0FBcUIsUUFBUSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNyRSxJQUFJLE1BQU0sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLDhCQUE4QixDQUFxQixDQUFFO0lBQ3pGLElBQUksTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFxQixDQUFFO0lBRXBFLE9BQU8sQ0FBQyxTQUFTLElBQVksVUFBVSxDQUVyQyxRQUFTLENBQUMsS0FBSyxFQUNmLFFBQVEsQ0FBQyxLQUFLLEVBQ2QsTUFBTSxDQUFDLEtBQUssRUFDWixNQUFNLENBQUMsT0FBTyxDQUNmLENBQUM7QUFDSixDQUFDO0FBQ0QsU0FBUyxVQUFVLENBQ2pCLFFBQWdCLEVBQ2hCLFVBQTJCLEVBQzNCLE1BQWMsRUFDZCxNQUFlO0lBR2IsT0FBTyxzRkFHRCxVQUFVLCtGQUdhLFFBQVEsb0VBQ0ssTUFBTSxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUMsVUFBUyxvSEFHckQsTUFBTSxvQ0FHckI7QUFDSixDQUFDO0FBR0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQTJCRSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuY29uc3QgYnV0dG9uID0gPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYnV0dG9uW2lkPVwiYWRkXCJdJykgO1xyXG5jb25zdCBhY2Nlc3NSYWRpbyA9IDxIVE1MRWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWNjZXNzUmFkaW8nKSA7XHJcbmJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsYWRkRW1wbG95ZWUpXHJcbi8qXHJcbmVudW0gYWNjZXNzT3B0aW9ucyB7XHJcbiAgYWRtaW5pc3RyYXRvciA9IDEsXHJcbiAgbWFuYWdlcixcclxuICBlbXBsb3llZVxyXG59XHJcbiovXHJcbmVudW0gYWNjZXNzT3B0aW9ucyB7XHJcbiAgYWRtaW5pc3RyYXRvciA9ICdhZG1pbmlzdHJhdG9yJyxcclxuICBtYW5hZ2VyID0gJ2dlcmVudGUnLFxyXG4gIGVtcGxveWVlID0gJ2Z1bmNpb25hcmlvJ1xyXG59XHJcblxyXG4vLyBjb25zdCBhY2Nlc3NPcHRpb25zVmFsdWVzOiBBcnJheUxpa2U8YWNjZXNzT3B0aW9ucz4gPSBPYmplY3QudmFsdWVzKGFjY2Vzc09wdGlvbnMpO1xyXG5jb25zdCBhY2Nlc3NPcHRpb25zVmFsdWVzID0gT2JqZWN0LnZhbHVlcyhhY2Nlc3NPcHRpb25zKTtcclxuXHJcbmFjY2Vzc09wdGlvbnNWYWx1ZXMuZm9yRWFjaCgodmFsdWU6IHN0cmluZywgaTogbnVtYmVyKSA9PiB7XHJcbiAgIGFjY2Vzc1JhZGlvLmlubmVySFRNTCArPSBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tY2hlY2tcIj5cclxuICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cImZvcm0tY2hlY2staW5wdXRcIiB0eXBlPVwicmFkaW9cIiBuYW1lPVwiYWNjZXNzXCIgaWQ9XCJhY2Nlc3NSYWRpb18ke2l9XCIgdmFsdWU9XCIke3ZhbHVlfVwiIGNoZWNrZWQ+XHJcbiAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJmb3JtLWNoZWNrLWxhYmVsIGNhcGl0YcOnXCIgZm9yPVwiYWNjZXNzUmFkaW9fJHtpfVwiPlxyXG4gICAgICAgICAgICAgICAgICAke3ZhbHVlfVxyXG4gICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgIDwvZGl2PlxyXG4gICBgXHJcbn0pXHJcblxyXG5mdW5jdGlvbiBhZGRFbXBsb3llZSgpOiB2b2lkIHtcclxuICBsZXQgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50JykgYXMgSFRNTElucHV0RWxlbWVudDsgXHJcblxyXG4gIGxldCBmdWxsTmFtZTogSFRNTElucHV0RWxlbWVudCB8IG51bGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZnVsbE5hbWUnKTtcclxuICBsZXQgcmVnaXN0ZXIgPSA8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmVnaXN0ZXInKTtcclxuICBsZXQgYWNjZXNzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cImFjY2Vzc1wiXTpjaGVja2VkJykgYXMgSFRNTElucHV0RWxlbWVudCA7XHJcbiAgbGV0IGFjdGl2ZT0gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhY3RpdmUnKSBhcyBIVE1MSW5wdXRFbGVtZW50IDtcclxuXHJcbiAgY29udGVudC5pbm5lckhUTUwgKz0gPHN0cmluZz5jcmVhdGVMaW5lKFxyXG5cclxuICAgIGZ1bGxOYW1lIS52YWx1ZSxcclxuICAgIHJlZ2lzdGVyLnZhbHVlLFxyXG4gICAgYWNjZXNzLnZhbHVlLFxyXG4gICAgYWN0aXZlLmNoZWNrZWQsXHJcbiAgKTtcclxufVxyXG5mdW5jdGlvbiBjcmVhdGVMaW5lKFxyXG4gIGZ1bGxOYW1lOiBzdHJpbmcsXHJcbiAgTnJSZWdpc3Rybzogc3RyaW5nIHwgbnVtYmVyLFxyXG4gIGFjY2Vzczogc3RyaW5nLFxyXG4gIGFjdGl2ZTogYm9vbGVhblxyXG5cclxuKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBgXHJcbiAgICA8ZGl2IGNsYXNzPVwiY2FyZCBtYi0xXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWhlYWRlclwiPlxyXG4gICAgICAgICR7TnJSZWdpc3Ryb31cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICA8aDUgY2xhc3M9XCJjYXJkLXRpdGxlXCI+JHtmdWxsTmFtZX08L2g1PlxyXG4gICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIj4ke2FjdGl2ZSA/ICdBdGl2byc6J0luYXRpdm8nfTwvYT4gXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1mb290ZXIgYmctdHJhbnNwYXJlbnQgYm9yZGVyLXN1Y2Nlc3NcIj5cclxuICAgICAgICAgQWNlc3NvOiAke2FjY2Vzc31cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgYFxyXG59XHJcblxyXG5cclxuLypcclxuZnVuY3Rpb24gY3JlYXRlTGluZShcclxuICAgZnVsbE5hbWU6IHN0cmluZyxcclxuICAgTnJSZWdpc3Rybzogc3RyaW5nIHwgbnVtYmVyLFxyXG4gICBhY2Nlc3M6IHN0cmluZyxcclxuICAgYWN0aXZlOiBib29sZWFuXHJcblxyXG4pOiBzdHJpbmcge1xyXG5yZXR1cm4gYDxicj5cclxuJHtmdWxsTmFtZX08YnI+XHJcbiR7TnJSZWdpc3Ryb308YnI+XHJcbiR7YWNjZXNzfTxicj5cclxuJHthY3RpdmV9PGJyPlxyXG5gO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gdHJhc2xhdGVBY2Vzc09wdGlvbihvcHRpb246IGFjY2Vzc09wdGlvbnMpOiBzdHJpbmcge1xyXG4gICBzd2l0Y2gob3B0aW9uKXtcclxuICAgICAgY2FzZSBhY2Nlc3NPcHRpb25zLmFkbWluaXN0cmF0b3I6XHJcbiAgICAgICAgcmV0dXJuICdBZG1pbmlzdHJhZG9yJztcclxuICAgICAgY2FzZSBhY2Nlc3NPcHRpb25zLm1hbmFnZXI6XHJcbiAgICAgICAgcmV0dXJuICdHZXJlbnRlJztcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXR1cm4gJ0Z1bmNpb27DoXJpbyc7XHJcbiAgIH1cclxufVxyXG4qL1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=