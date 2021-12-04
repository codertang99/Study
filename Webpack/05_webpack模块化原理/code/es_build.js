
 	var __webpack_modules__ = ({

    "./src/js/exports.js":
        ((module) => {

          const name = "tang"
          const age = 29

          module.exports = {
            name,
            age
          }

        })

 	});
  
 	var __webpack_module_cache__ = {};
 	
 	function __webpack_require__(moduleId) {

 		var cachedModule = __webpack_module_cache__[moduleId];
     
 		if (cachedModule !== undefined) {
 			return cachedModule.exports;
 		}
 		var module = __webpack_module_cache__[moduleId] = {
 			exports: {}
 		};
 	
 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
 	
 		return module.exports;
 	}
 	
 	(() => {
 		__webpack_require__.n = (module) => {
 			var getter = module && module.__esModule ?
 				() => (module['default']) :
 				() => (module);
 			__webpack_require__.d(getter, { a: getter });
 			return getter;
 		};
 	})();
 	
 	(() => {
 		__webpack_require__.d = (exports, definition) => {
 			for(var key in definition) {
 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
 				}
 			}
 		};
 	})();
 	
 	(() => {
 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
 	})();
 	
 	(() => {
 		__webpack_require__.r = (exports) => {
 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
 			}
 			Object.defineProperty(exports, '__esModule', { value: true });
 		};
 	})();
 	
var __webpack_exports__ = {};

(() => {
__webpack_require__.r(__webpack_exports__);
 var _js_exports__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( "./src/js/exports.js");
 var _js_exports__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(_js_exports__WEBPACK_IMPORTED_MODULE_0__);

console.log(_js_exports__WEBPACK_IMPORTED_MODULE_0__.name, _js_exports__WEBPACK_IMPORTED_MODULE_0__.age);
})();
