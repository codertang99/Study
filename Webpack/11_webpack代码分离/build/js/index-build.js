"use strict";
(self["webpackChunk_11_webpack_code_seperate"] = self["webpackChunk_11_webpack_code_seperate"] || []).push([["index"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);


console.log(lodash__WEBPACK_IMPORTED_MODULE_0___default().join(["!23", "234"], "11"));
console.log("hello");

const btn = document.createElement("button")
btn.innerText = "按钮"
document.body.appendChild(btn)

/**
 * 模拟spa 单击事件再导入加载, 异步导入
 * 但是这种方式再加载过程中, 都需要从浏览器下载js, 然后解析导入再执行代码
 */
btn.addEventListener("click", () => {
  /**
   * 魔法注释: magic comments
   * prefetch: 预获取 -> 闲置时间下载
   * preload: 预加载 -> 跟随父脚本同步加载
   */
  __webpack_require__.e(/*! import() | elementName */ "elementName").then(__webpack_require__.bind(__webpack_require__, /*! ./element */ "./src/element.js")).then(({ default: element }) => {
    console.log(element);
    document.body.appendChild(element)
  })
})


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ /* webpack/runtime/startup prefetch */
/******/ (() => {
/******/ 	__webpack_require__.O(0, ["index"], () => {
/******/ 		__webpack_require__.E("elementName");
/******/ 	}, 5);
/******/ })();
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_lodash_lodash_js"], () => (__webpack_exec__("./src/index.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=index-build.js.map