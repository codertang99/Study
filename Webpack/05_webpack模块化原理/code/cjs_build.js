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
 	
var __webpack_exports__ = {};
(() => {
const { name, age } = __webpack_require__("./src/js/exports.js")

console.log(name);
console.log(age);
})();