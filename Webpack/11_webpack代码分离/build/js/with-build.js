"use strict";
(self["webpackChunk_11_webpack_code_seperate"] = self["webpackChunk_11_webpack_code_seperate"] || []).push([["with"],{

/***/ "./src/with.js":
/*!*********************!*\
  !*** ./src/with.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);


/**
 * 利用import函数异步导入的方式
 * webpack默认都会进行代码分离
 * 可以利用魔法注释来给异步打包的文件设置名字
 */
__webpack_require__.e(/*! import() | foo */ "foo").then(__webpack_require__.t.bind(__webpack_require__, /*! ./foo */ "./src/foo.js", 23)).then(res => {
  console.log(res);
})

console.log(lodash__WEBPACK_IMPORTED_MODULE_0___default().join(["!555", "555"], "12323"));

console.log("with")

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_lodash_lodash_js"], () => (__webpack_exec__("./src/with.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=with-build.js.map