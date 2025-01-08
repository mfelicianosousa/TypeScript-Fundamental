/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/model.ts":
/*!**********************!*\
  !*** ./src/model.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   accessOptions: () => (/* binding */ accessOptions)
/* harmony export */ });
var accessOptions;
(function (accessOptions) {
    accessOptions["administrator"] = "administrator";
    accessOptions["manager"] = "gerente";
    accessOptions["employee"] = "funcionario";
    accessOptions["undefined"] = "N\u00E3o definido";
})(accessOptions || (accessOptions = {}));


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model */ "./src/model.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

var content = document.getElementById('content');
var button = document.querySelector('button[id="add"]');
var accessRadio = document.getElementById('accessRadio');
button.addEventListener('click', addEmployee);
var accessOptionsValues = Object.values(_model__WEBPACK_IMPORTED_MODULE_0__.accessOptions);
var getUser = function () { return __awaiter(void 0, void 0, void 0, function () {
    var response, users;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, fetch('http://localhost:5011/users')];
            case 1:
                response = _a.sent();
                return [4 /*yield*/, response.json()];
            case 2:
                users = _a.sent();
                return [2 /*return*/, users];
        }
    });
}); };
var updateUserLayout = function () { return __awaiter(void 0, void 0, void 0, function () {
    var users;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, getUser()];
            case 1:
                users = _a.sent();
                users.map(function (user) {
                    content.innerHTML += createLine(user);
                });
                return [2 /*return*/];
        }
    });
}); };
updateUserLayout();
function addEmployee() {
    var formFields = [
        document.querySelector('#fullName'),
        document.querySelector('#register'),
        document.querySelector('input[name="access"]:checked'),
        document.querySelector('#active'),
        document.querySelector('#addressHome'),
        document.querySelector('#addressWork'),
    ];
    var fullName = formFields[0], register = formFields[1], admin = formFields[2], active = formFields[3], addressHome = formFields[4], addressWork = formFields[5];
    var user = {
        fullName: fullName.value,
        register: register.value != '' ? register.value : undefined,
        active: active.checked,
        access: admin.value,
    };
    content.innerHTML += createLine(user, addressHome.value, addressWork.value);
}
accessOptionsValues.forEach(function (value, i) {
    accessRadio.innerHTML += "\n  <div class=\"form-check\">\n    <input class=\"form-check-input\" type=\"radio\" name=\"access\" id=\"accessRadio".concat(i, "\" value=\"").concat(value, "\">\n    <label class=\"form-check-label capitalLetter\" for=\"no\">\n      ").concat(value, "\n    </label>\n  </div>\n  ");
});
document.getElementById('accessRadio0').checked = true;
function createLine(_a) {
    var fullName = _a.fullName, _b = _a.register, register = _b === void 0 ? Math.random().toString(36).substring(7).toUpperCase() : _b, _c = _a.active, active = _c === void 0 ? false : _c, _d = _a.access, access = _d === void 0 ? _model__WEBPACK_IMPORTED_MODULE_0__.accessOptions.undefined : _d;
    var address = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        address[_i - 1] = arguments[_i];
    }
    return "\n    <div class=\"card mb-1\">\n      <div class=\"card-header\">\n        ".concat(register, "\n      </div>\n      <div class=\"card-body\">\n        <h5 class=\"card-title\">").concat(fullName, "</h5>\n        <a href=\"#\" class=\"btn btn-primary\">").concat(active ? 'Ativo' : 'Inativo', "</a>\n      </div>\n      ").concat(address.length > 0
        ? "<div class=\"card-body\">\n          <h6 class=\"card-title\">".concat(address.join('<br/>'), "</h6>\n        </div>")
        : '', "\n      <div class=\"card-footer bg-transparent border-success\">\n        Acesso: ").concat(access, "\n      </div>\n    </div>");
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQyxTQUFTLElBQVksVUFBVSxDQUFDLElBQUksRUFBRSxXQUFXLENBQUMsS0FBSyxFQUFFLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUN0RixDQUFDO0FBRUQsbUJBQW1CLENBQUMsT0FBTyxDQUFDLFVBQUMsS0FBYSxFQUFFLENBQVM7SUFDbkQsV0FBVyxDQUFDLFNBQVMsSUFBSSwrSEFFcUQsQ0FBQyx3QkFBWSxLQUFLLHlGQUUxRixLQUFLLGlDQUdWO0FBQ0gsQ0FBQyxDQUFDLENBQUM7QUFDZ0IsUUFBUSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUUsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0FBRTNFLFNBQVMsVUFBVSxDQUNqQixFQUtXO1FBSlQsUUFBUSxnQkFDUixnQkFBZ0UsRUFBaEUsUUFBUSxtQkFBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsT0FDaEUsY0FBYyxFQUFkLE1BQU0sbUJBQUcsS0FBSyxPQUNkLGNBQWdDLEVBQWhDLE1BQU0sbUJBQUcsaURBQWEsQ0FBQyxTQUFTO0lBRWxDLGlCQUFvQjtTQUFwQixVQUFvQixFQUFwQixxQkFBb0IsRUFBcEIsSUFBb0I7UUFBcEIsZ0NBQW9COztJQUVwQixPQUFPLHNGQUdDLFFBQVEsK0ZBR2UsUUFBUSxvRUFDSyxNQUFNLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsU0FBUyx1Q0FHbEUsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDO1FBQ2hCLENBQUMsQ0FBQyx3RUFDdUIsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsMEJBQ3pDO1FBQ0wsQ0FBQyxDQUFDLEVBQUUsZ0dBR0ksTUFBTSwrQkFFYixDQUFDO0FBQ1osQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9tb2RlbC50cyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGVudW0gYWNjZXNzT3B0aW9ucyB7XHJcbiAgICBhZG1pbmlzdHJhdG9yID0gJ2FkbWluaXN0cmF0b3InLFxyXG4gICAgbWFuYWdlciA9ICdnZXJlbnRlJyxcclxuICAgIGVtcGxveWVlID0gJ2Z1bmNpb25hcmlvJyxcclxuICAgIHVuZGVmaW5lZCA9ICdOw6NvIGRlZmluaWRvJ1xyXG59XHJcblxyXG5leHBvcnQgdHlwZSB1c2VyVHlwZSA9IHtcclxuICBmdWxsTmFtZTogc3RyaW5nLFxyXG4gIHJlZ2lzdGVyPzogc3RyaW5nIHwgbnVtYmVyLFxyXG4gIGFjY2Vzcz86IGFjY2Vzc09wdGlvbnNcclxuICBhY3RpdmU/OiBib29sZWFuLFxyXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBhY2Nlc3NPcHRpb25zLCB1c2VyVHlwZSB9IGZyb20gXCIuL21vZGVsXCI7XHJcblxyXG5sZXQgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50JykgYXMgSFRNTElucHV0RWxlbWVudDtcclxuY29uc3QgYnV0dG9uID0gPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYnV0dG9uW2lkPVwiYWRkXCJdJyk7XHJcbmNvbnN0IGFjY2Vzc1JhZGlvID0gPEhUTUxFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhY2Nlc3NSYWRpbycpO1xyXG5idXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhZGRFbXBsb3llZSk7XHJcblxyXG5jb25zdCBhY2Nlc3NPcHRpb25zVmFsdWVzID0gT2JqZWN0LnZhbHVlcyhhY2Nlc3NPcHRpb25zKVxyXG5cclxuY29uc3QgZ2V0VXNlciA9IGFzeW5jICgpOiBQcm9taXNlPHVzZXJUeXBlW10+ID0+IHtcclxuICBjb25zdCByZXNwb25zZTogUmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDo1MDExL3VzZXJzJyk7XHJcbiAgY29uc3QgdXNlcnM6IHVzZXJUeXBlW10gPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgcmV0dXJuIHVzZXJzO1xyXG59O1xyXG5cclxuY29uc3QgdXBkYXRlVXNlckxheW91dCA9IGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcclxuICBjb25zdCB1c2VyczogdXNlclR5cGVbXSA9IGF3YWl0IGdldFVzZXIoKTtcclxuXHJcbiAgdXNlcnMubWFwKCh1c2VyOiB1c2VyVHlwZSkgPT4ge1xyXG4gICAgY29udGVudC5pbm5lckhUTUwgKz0gPHN0cmluZz5jcmVhdGVMaW5lKHVzZXIpO1xyXG4gIH0pO1xyXG59O1xyXG5cclxudXBkYXRlVXNlckxheW91dCgpXHJcblxyXG5mdW5jdGlvbiBhZGRFbXBsb3llZSAoKTogdm9pZCB7XHJcbiAgbGV0IGZvcm1GaWVsZHMgPSBbXHJcbiAgICA8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZnVsbE5hbWUnKSxcclxuICAgIDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZWdpc3RlcicpLFxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cImFjY2Vzc1wiXTpjaGVja2VkJykgYXMgSFRNTElucHV0RWxlbWVudCxcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhY3RpdmUnKSBhcyBIVE1MSW5wdXRFbGVtZW50LFxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZHJlc3NIb21lJykgYXMgSFRNTElucHV0RWxlbWVudCxcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGRyZXNzV29yaycpIGFzIEhUTUxJbnB1dEVsZW1lbnQsXHJcbiAgXTtcclxuXHJcbiAgY29uc3QgW2Z1bGxOYW1lLCByZWdpc3RlciwgYWRtaW4sIGFjdGl2ZSwgYWRkcmVzc0hvbWUsIGFkZHJlc3NXb3JrXSA9IGZvcm1GaWVsZHM7XHJcblxyXG4gIGxldCB1c2VyOiB1c2VyVHlwZSA9IHtcclxuICAgIGZ1bGxOYW1lOiBmdWxsTmFtZSEudmFsdWUsXHJcbiAgICByZWdpc3RlcjogcmVnaXN0ZXIudmFsdWUgIT0gJycgPyByZWdpc3Rlci52YWx1ZSA6IHVuZGVmaW5lZCxcclxuICAgIGFjdGl2ZTogYWN0aXZlLmNoZWNrZWQsXHJcbiAgICBhY2Nlc3M6IDxhY2Nlc3NPcHRpb25zPmFkbWluLnZhbHVlLFxyXG4gIH07XHJcblxyXG4gIGNvbnRlbnQuaW5uZXJIVE1MICs9IDxzdHJpbmc+Y3JlYXRlTGluZSh1c2VyLCBhZGRyZXNzSG9tZS52YWx1ZSwgYWRkcmVzc1dvcmsudmFsdWUpO1xyXG59XHJcblxyXG5hY2Nlc3NPcHRpb25zVmFsdWVzLmZvckVhY2goKHZhbHVlOiBzdHJpbmcsIGk6IG51bWJlcikgPT4ge1xyXG4gIGFjY2Vzc1JhZGlvLmlubmVySFRNTCArPSBgXHJcbiAgPGRpdiBjbGFzcz1cImZvcm0tY2hlY2tcIj5cclxuICAgIDxpbnB1dCBjbGFzcz1cImZvcm0tY2hlY2staW5wdXRcIiB0eXBlPVwicmFkaW9cIiBuYW1lPVwiYWNjZXNzXCIgaWQ9XCJhY2Nlc3NSYWRpbyR7aX1cIiB2YWx1ZT1cIiR7dmFsdWV9XCI+XHJcbiAgICA8bGFiZWwgY2xhc3M9XCJmb3JtLWNoZWNrLWxhYmVsIGNhcGl0YWxMZXR0ZXJcIiBmb3I9XCJub1wiPlxyXG4gICAgICAke3ZhbHVlfVxyXG4gICAgPC9sYWJlbD5cclxuICA8L2Rpdj5cclxuICBgXHJcbn0pO1xyXG4oPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FjY2Vzc1JhZGlvMCcpKS5jaGVja2VkID0gdHJ1ZTtcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUxpbmUoXHJcbiAge1xyXG4gICAgZnVsbE5hbWUsXHJcbiAgICByZWdpc3RlciA9IE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cmluZyg3KS50b1VwcGVyQ2FzZSgpLFxyXG4gICAgYWN0aXZlID0gZmFsc2UsXHJcbiAgICBhY2Nlc3MgPSBhY2Nlc3NPcHRpb25zLnVuZGVmaW5lZCxcclxuICB9OiB1c2VyVHlwZSxcclxuICAuLi5hZGRyZXNzOiBzdHJpbmdbXVxyXG4pOiBzdHJpbmcge1xyXG4gIHJldHVybiBgXHJcbiAgICA8ZGl2IGNsYXNzPVwiY2FyZCBtYi0xXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWhlYWRlclwiPlxyXG4gICAgICAgICR7cmVnaXN0ZXJ9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgPGg1IGNsYXNzPVwiY2FyZC10aXRsZVwiPiR7ZnVsbE5hbWV9PC9oNT5cclxuICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCI+JHthY3RpdmUgPyAnQXRpdm8nIDogJ0luYXRpdm8nfTwvYT5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgICR7XHJcbiAgICAgICAgYWRkcmVzcy5sZW5ndGggPiAwXHJcbiAgICAgICAgICA/IGA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICA8aDYgY2xhc3M9XCJjYXJkLXRpdGxlXCI+JHthZGRyZXNzLmpvaW4oJzxici8+Jyl9PC9oNj5cclxuICAgICAgICA8L2Rpdj5gXHJcbiAgICAgICAgICA6ICcnXHJcbiAgICAgIH1cclxuICAgICAgPGRpdiBjbGFzcz1cImNhcmQtZm9vdGVyIGJnLXRyYW5zcGFyZW50IGJvcmRlci1zdWNjZXNzXCI+XHJcbiAgICAgICAgQWNlc3NvOiAke2FjY2Vzc31cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5gO1xyXG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9