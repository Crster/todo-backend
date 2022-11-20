/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var eta__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! eta */ \"eta\");\n/* harmony import */ var eta__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(eta__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _modules_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/config */ \"./modules/config.js\");\n/* harmony import */ var _modules_logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/logger */ \"./modules/logger.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./routes */ \"./routes/index.js\");\n\n\n\n\n\nvar server = express__WEBPACK_IMPORTED_MODULE_0___default()();\neta__WEBPACK_IMPORTED_MODULE_1__.configure(_modules_config__WEBPACK_IMPORTED_MODULE_2__[\"default\"].eta);\nserver.engine(\"html\", eta__WEBPACK_IMPORTED_MODULE_1__.renderFile);\nserver.set(\"view engine\", \"html\");\nserver.set(\"views\", _modules_config__WEBPACK_IMPORTED_MODULE_2__[\"default\"].viewPath);\nserver.use(_routes__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\nserver.listen(_modules_config__WEBPACK_IMPORTED_MODULE_2__[\"default\"].port, function () {\n  _modules_logger__WEBPACK_IMPORTED_MODULE_3__[\"default\"].info(\"Server is running at http://localhost:\".concat(_modules_config__WEBPACK_IMPORTED_MODULE_2__[\"default\"].port, \"/\"));\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUE2QjtBQUNIO0FBRVc7QUFDQTtBQUNSO0FBRTdCLElBQU1LLE1BQU0sR0FBR0wsOENBQU8sRUFBRTtBQUN4QkMsMENBQWEsQ0FBQ0MsMkRBQVUsQ0FBQztBQUV6QkcsTUFBTSxDQUFDRSxNQUFNLENBQUMsTUFBTSxFQUFFTiwyQ0FBYyxDQUFDO0FBQ3JDSSxNQUFNLENBQUNJLEdBQUcsQ0FBQyxhQUFhLEVBQUUsTUFBTSxDQUFDO0FBQ2pDSixNQUFNLENBQUNJLEdBQUcsQ0FBQyxPQUFPLEVBQUVQLGdFQUFlLENBQUM7QUFDcENHLE1BQU0sQ0FBQ00sR0FBRyxDQUFDUCwrQ0FBTSxDQUFDO0FBRWxCQyxNQUFNLENBQUNPLE1BQU0sQ0FBQ1YsNERBQVcsRUFBRSxZQUFNO0VBQy9CQyw0REFBVyxpREFBMENELDREQUFXLE9BQUk7QUFDdEUsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1iYWNrZW5kLy4vaW5kZXguanM/NDFmNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZXhwcmVzcyBmcm9tIFwiZXhwcmVzc1wiXHJcbmltcG9ydCAqIGFzIGV0YSBmcm9tIFwiZXRhXCJcclxuXHJcbmltcG9ydCBjb25maWcgZnJvbSBcIi4vbW9kdWxlcy9jb25maWdcIlxyXG5pbXBvcnQgbG9nZ2VyIGZyb20gXCIuL21vZHVsZXMvbG9nZ2VyXCJcclxuaW1wb3J0IHJvdXRlcyBmcm9tIFwiLi9yb3V0ZXNcIlxyXG5cclxuY29uc3Qgc2VydmVyID0gZXhwcmVzcygpXHJcbmV0YS5jb25maWd1cmUoY29uZmlnLmV0YSlcclxuXHJcbnNlcnZlci5lbmdpbmUoXCJodG1sXCIsIGV0YS5yZW5kZXJGaWxlKVxyXG5zZXJ2ZXIuc2V0KFwidmlldyBlbmdpbmVcIiwgXCJodG1sXCIpXHJcbnNlcnZlci5zZXQoXCJ2aWV3c1wiLCBjb25maWcudmlld1BhdGgpXHJcbnNlcnZlci51c2Uocm91dGVzKVxyXG5cclxuc2VydmVyLmxpc3Rlbihjb25maWcucG9ydCwgKCkgPT4ge1xyXG4gIGxvZ2dlci5pbmZvKGBTZXJ2ZXIgaXMgcnVubmluZyBhdCBodHRwOi8vbG9jYWxob3N0OiR7Y29uZmlnLnBvcnR9L2ApXHJcbn0pXHJcbiJdLCJuYW1lcyI6WyJleHByZXNzIiwiZXRhIiwiY29uZmlnIiwibG9nZ2VyIiwicm91dGVzIiwic2VydmVyIiwiY29uZmlndXJlIiwiZW5naW5lIiwicmVuZGVyRmlsZSIsInNldCIsInZpZXdQYXRoIiwidXNlIiwibGlzdGVuIiwicG9ydCIsImluZm8iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./index.js\n");

/***/ }),

/***/ "./modules/config.js":
/*!***************************!*\
  !*** ./modules/config.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\nvar _process$env$PORT;\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  port: (_process$env$PORT = process.env.PORT) !== null && _process$env$PORT !== void 0 ? _process$env$PORT : 8080,\n  viewPath: path__WEBPACK_IMPORTED_MODULE_0___default().resolve(\"./views\"),\n  eta: {\n    useWith: true,\n    views: path__WEBPACK_IMPORTED_MODULE_0___default().resolve(\"./views\"),\n    cache: \"development\" === \"production\"\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9tb2R1bGVzL2NvbmZpZy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQXVCO0FBRXZCLGlFQUFlO0VBQ2JDLElBQUksdUJBQUVDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxJQUFJLGlFQUFJLElBQUk7RUFDOUJDLFFBQVEsRUFBRUwsbURBQVksQ0FBQyxTQUFTLENBQUM7RUFDakNPLEdBQUcsRUFBRTtJQUNIQyxPQUFPLEVBQUUsSUFBSTtJQUNiQyxLQUFLLEVBQUVULG1EQUFZLENBQUMsU0FBUyxDQUFDO0lBQzlCVSxLQUFLLEVBQUVSLGFBQW9CLEtBQUs7RUFDbEM7QUFDRixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1iYWNrZW5kLy4vbW9kdWxlcy9jb25maWcuanM/NDE2MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgcG9ydDogcHJvY2Vzcy5lbnYuUE9SVCA/PyA4MDgwLFxyXG4gIHZpZXdQYXRoOiBwYXRoLnJlc29sdmUoXCIuL3ZpZXdzXCIpLFxyXG4gIGV0YToge1xyXG4gICAgdXNlV2l0aDogdHJ1ZSxcclxuICAgIHZpZXdzOiBwYXRoLnJlc29sdmUoXCIuL3ZpZXdzXCIpLFxyXG4gICAgY2FjaGU6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIlxyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsicGF0aCIsInBvcnQiLCJwcm9jZXNzIiwiZW52IiwiUE9SVCIsInZpZXdQYXRoIiwicmVzb2x2ZSIsImV0YSIsInVzZVdpdGgiLCJ2aWV3cyIsImNhY2hlIiwiTk9ERV9FTlYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./modules/config.js\n");

/***/ }),

/***/ "./modules/logger.js":
/*!***************************!*\
  !*** ./modules/logger.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var winston__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! winston */ \"winston\");\n/* harmony import */ var winston__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(winston__WEBPACK_IMPORTED_MODULE_0__);\n\nvar beautifyFormat = winston__WEBPACK_IMPORTED_MODULE_0__.format.combine(winston__WEBPACK_IMPORTED_MODULE_0__.format.colorize({\n  all: true\n}), winston__WEBPACK_IMPORTED_MODULE_0__.format.timestamp(), winston__WEBPACK_IMPORTED_MODULE_0__.format.printf(function (info) {\n  return \"\".concat(info.timestamp, \" \").concat(info.level, \": \").concat(info.message);\n}));\nvar logger = (0,winston__WEBPACK_IMPORTED_MODULE_0__.createLogger)({\n  format: beautifyFormat,\n  transports: [new winston__WEBPACK_IMPORTED_MODULE_0__.transports.Console()]\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (logger);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9tb2R1bGVzL2xvZ2dlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBMEQ7QUFFMUQsSUFBTUcsY0FBYyxHQUFHRCxtREFBYyxDQUNuQ0Esb0RBQWUsQ0FBQztFQUNaSSxHQUFHLEVBQUM7QUFDUixDQUFDLENBQUMsRUFDRkoscURBQWdCLEVBQUUsRUFDbEJBLGtEQUFhLENBQ1QsVUFBQU8sSUFBSTtFQUFBLGlCQUFPQSxJQUFJLENBQUNGLFNBQVMsY0FBSUUsSUFBSSxDQUFDQyxLQUFLLGVBQUtELElBQUksQ0FBQ0UsT0FBTztBQUFBLENBQUUsQ0FDN0QsQ0FDRjtBQUVELElBQU1DLE1BQU0sR0FBR1oscURBQVksQ0FBQztFQUMxQkUsTUFBTSxFQUFFQyxjQUFjO0VBQ3RCRixVQUFVLEVBQUUsQ0FBQyxJQUFJQSx1REFBa0IsRUFBRTtBQUN2QyxDQUFDLENBQUM7QUFFRixpRUFBZVcsTUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tYmFja2VuZC8uL21vZHVsZXMvbG9nZ2VyLmpzP2EwNjAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlTG9nZ2VyLCB0cmFuc3BvcnRzLCBmb3JtYXQgfSBmcm9tIFwid2luc3RvblwiXHJcblxyXG5jb25zdCBiZWF1dGlmeUZvcm1hdCA9IGZvcm1hdC5jb21iaW5lKFxyXG4gIGZvcm1hdC5jb2xvcml6ZSh7XHJcbiAgICAgIGFsbDp0cnVlXHJcbiAgfSksXHJcbiAgZm9ybWF0LnRpbWVzdGFtcCgpLFxyXG4gIGZvcm1hdC5wcmludGYoXHJcbiAgICAgIGluZm8gPT4gYCR7aW5mby50aW1lc3RhbXB9ICR7aW5mby5sZXZlbH06ICR7aW5mby5tZXNzYWdlfWBcclxuICApXHJcbik7XHJcblxyXG5jb25zdCBsb2dnZXIgPSBjcmVhdGVMb2dnZXIoe1xyXG4gIGZvcm1hdDogYmVhdXRpZnlGb3JtYXQsXHJcbiAgdHJhbnNwb3J0czogW25ldyB0cmFuc3BvcnRzLkNvbnNvbGUoKV0sXHJcbn0pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBsb2dnZXI7XHJcbiJdLCJuYW1lcyI6WyJjcmVhdGVMb2dnZXIiLCJ0cmFuc3BvcnRzIiwiZm9ybWF0IiwiYmVhdXRpZnlGb3JtYXQiLCJjb21iaW5lIiwiY29sb3JpemUiLCJhbGwiLCJ0aW1lc3RhbXAiLCJwcmludGYiLCJpbmZvIiwibGV2ZWwiLCJtZXNzYWdlIiwibG9nZ2VyIiwiQ29uc29sZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./modules/logger.js\n");

/***/ }),

/***/ "./routes/api/index.js":
/*!*****************************!*\
  !*** ./routes/api/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user */ \"./routes/api/user.js\");\n\n\nvar router = express__WEBPACK_IMPORTED_MODULE_0___default().Router();\nrouter.use(\"/user\", _user__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yb3V0ZXMvYXBpL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBNkI7QUFDSjtBQUV6QixJQUFNRSxNQUFNLEdBQUdGLHFEQUFjLEVBQUU7QUFDL0JFLE1BQU0sQ0FBQ0UsR0FBRyxDQUFDLE9BQU8sRUFBRUgsNkNBQUksQ0FBQztBQUV6QixpRUFBZUMsTUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tYmFja2VuZC8uL3JvdXRlcy9hcGkvaW5kZXguanM/MDJjMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZXhwcmVzcyBmcm9tIFwiZXhwcmVzc1wiXHJcbmltcG9ydCB1c2VyIGZyb20gXCIuL3VzZXJcIlxyXG5cclxuY29uc3Qgcm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKVxyXG5yb3V0ZXIudXNlKFwiL3VzZXJcIiwgdXNlcilcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJvdXRlclxyXG4iXSwibmFtZXMiOlsiZXhwcmVzcyIsInVzZXIiLCJyb3V0ZXIiLCJSb3V0ZXIiLCJ1c2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./routes/api/index.js\n");

/***/ }),

/***/ "./routes/api/user.js":
/*!****************************!*\
  !*** ./routes/api/user.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction _regeneratorRuntime() { \"use strict\"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = \"function\" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || \"@@iterator\", asyncIteratorSymbol = $Symbol.asyncIterator || \"@@asyncIterator\", toStringTagSymbol = $Symbol.toStringTag || \"@@toStringTag\"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, \"\"); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, \"_invoke\", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: \"normal\", arg: fn.call(obj, arg) }; } catch (err) { return { type: \"throw\", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { [\"next\", \"throw\", \"return\"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if (\"throw\" !== record.type) { var result = record.arg, value = result.value; return value && \"object\" == _typeof(value) && hasOwn.call(value, \"__await\") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke(\"next\", value, resolve, reject); }, function (err) { invoke(\"throw\", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke(\"throw\", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, \"_invoke\", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = \"suspendedStart\"; return function (method, arg) { if (\"executing\" === state) throw new Error(\"Generator is already running\"); if (\"completed\" === state) { if (\"throw\" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if (\"next\" === context.method) context.sent = context._sent = context.arg;else if (\"throw\" === context.method) { if (\"suspendedStart\" === state) throw state = \"completed\", context.arg; context.dispatchException(context.arg); } else \"return\" === context.method && context.abrupt(\"return\", context.arg); state = \"executing\"; var record = tryCatch(innerFn, self, context); if (\"normal\" === record.type) { if (state = context.done ? \"completed\" : \"suspendedYield\", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } \"throw\" === record.type && (state = \"completed\", context.method = \"throw\", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, \"throw\" === context.method) { if (delegate.iterator[\"return\"] && (context.method = \"return\", context.arg = undefined, maybeInvokeDelegate(delegate, context), \"throw\" === context.method)) return ContinueSentinel; context.method = \"throw\", context.arg = new TypeError(\"The iterator does not provide a 'throw' method\"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if (\"throw\" === record.type) return context.method = \"throw\", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, \"return\" !== context.method && (context.method = \"next\", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = \"throw\", context.arg = new TypeError(\"iterator result is not an object\"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = \"normal\", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: \"root\" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if (\"function\" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, \"constructor\", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, \"constructor\", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, \"GeneratorFunction\"), exports.isGeneratorFunction = function (genFun) { var ctor = \"function\" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || \"GeneratorFunction\" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, \"GeneratorFunction\")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, \"Generator\"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, \"toString\", function () { return \"[object Generator]\"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = \"next\", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { \"t\" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if (\"throw\" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = \"throw\", record.arg = exception, context.next = loc, caught && (context.method = \"next\", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if (\"root\" === entry.tryLoc) return handle(\"end\"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, \"catchLoc\"), hasFinally = hasOwn.call(entry, \"finallyLoc\"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error(\"try statement without catch or finally\"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, \"finallyLoc\") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && (\"break\" === type || \"continue\" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = \"next\", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if (\"throw\" === record.type) throw record.arg; return \"break\" === record.type || \"continue\" === record.type ? this.next = record.arg : \"return\" === record.type ? (this.rval = this.arg = record.arg, this.method = \"return\", this.next = \"end\") : \"normal\" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, \"catch\": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if (\"throw\" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error(\"illegal catch attempt\"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, \"next\" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nvar router = express__WEBPACK_IMPORTED_MODULE_0___default().Router();\nrouter.get(\"/\", /*#__PURE__*/function () {\n  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {\n    return _regeneratorRuntime().wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            res.json({\n              name: \"Sample\",\n              age: 10\n            });\n          case 1:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n  return function (_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}());\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yb3V0ZXMvYXBpL3VzZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OzsrQ0FDQTtBQUFBO0FBQUE7QUFEOEI7QUFDOUIsSUFBTUMsTUFBTSxHQUFHRCxxREFBYyxFQUFFO0FBRS9CQyxNQUFNLENBQUNFLEdBQUcsQ0FBQyxHQUFHO0VBQUEsc0VBQUUsaUJBQU9DLEdBQUcsRUFBRUMsR0FBRztJQUFBO01BQUE7UUFBQTtVQUFBO1lBQzNCQSxHQUFHLENBQUNDLElBQUksQ0FBQztjQUNMQyxJQUFJLEVBQUUsUUFBUTtjQUNkQyxHQUFHLEVBQUU7WUFDVCxDQUFDLENBQUM7VUFBQTtVQUFBO1lBQUE7UUFBQTtNQUFBO0lBQUE7RUFBQSxDQUNMO0VBQUE7SUFBQTtFQUFBO0FBQUEsSUFBQztBQUVGLGlFQUFlUCxNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1iYWNrZW5kLy4vcm91dGVzL2FwaS91c2VyLmpzPzJiYzciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGV4cHJlc3MgZnJvbSBcImV4cHJlc3NcIjtcclxuY29uc3Qgcm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcclxuXHJcbnJvdXRlci5nZXQoXCIvXCIsIGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gICAgcmVzLmpzb24oe1xyXG4gICAgICAgIG5hbWU6IFwiU2FtcGxlXCIsXHJcbiAgICAgICAgYWdlOiAxMFxyXG4gICAgfSlcclxufSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJvdXRlcjsiXSwibmFtZXMiOlsiZXhwcmVzcyIsInJvdXRlciIsIlJvdXRlciIsImdldCIsInJlcSIsInJlcyIsImpzb24iLCJuYW1lIiwiYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./routes/api/user.js\n");

/***/ }),

/***/ "./routes/index.js":
/*!*************************!*\
  !*** ./routes/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api */ \"./routes/api/index.js\");\n/* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages */ \"./routes/pages/index.js\");\n\n\n\nvar router = express__WEBPACK_IMPORTED_MODULE_0___default().Router();\nrouter.use(\"/api\", _api__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\nrouter.use(\"/\", _pages__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yb3V0ZXMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBNkI7QUFDRDtBQUNHO0FBRS9CLElBQU1HLE1BQU0sR0FBR0gscURBQWMsRUFBRTtBQUUvQkcsTUFBTSxDQUFDRSxHQUFHLENBQUMsTUFBTSxFQUFFSiw0Q0FBUSxDQUFDO0FBQzVCRSxNQUFNLENBQUNFLEdBQUcsQ0FBQyxHQUFHLEVBQUVILDhDQUFTLENBQUM7QUFFMUIsaUVBQWVDLE1BQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWJhY2tlbmQvLi9yb3V0ZXMvaW5kZXguanM/OTRhMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZXhwcmVzcyBmcm9tIFwiZXhwcmVzc1wiXHJcbmltcG9ydCBhcGlSb3V0ZSBmcm9tIFwiLi9hcGlcIlxyXG5pbXBvcnQgcGFnZVJvdXRlIGZyb20gXCIuL3BhZ2VzXCJcclxuXHJcbmNvbnN0IHJvdXRlciA9IGV4cHJlc3MuUm91dGVyKClcclxuXHJcbnJvdXRlci51c2UoXCIvYXBpXCIsIGFwaVJvdXRlKVxyXG5yb3V0ZXIudXNlKFwiL1wiLCBwYWdlUm91dGUpXHJcblxyXG5leHBvcnQgZGVmYXVsdCByb3V0ZXJcclxuIl0sIm5hbWVzIjpbImV4cHJlc3MiLCJhcGlSb3V0ZSIsInBhZ2VSb3V0ZSIsInJvdXRlciIsIlJvdXRlciIsInVzZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./routes/index.js\n");

/***/ }),

/***/ "./routes/pages/index.js":
/*!*******************************!*\
  !*** ./routes/pages/index.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _welcome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./welcome */ \"./routes/pages/welcome.js\");\n\n\nvar router = express__WEBPACK_IMPORTED_MODULE_0___default().Router();\nrouter.use(_welcome__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yb3V0ZXMvcGFnZXMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUE2QjtBQUNFO0FBRS9CLElBQU1FLE1BQU0sR0FBR0YscURBQWMsRUFBRTtBQUMvQkUsTUFBTSxDQUFDRSxHQUFHLENBQUNILGdEQUFPLENBQUM7QUFFbkIsaUVBQWVDLE1BQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWJhY2tlbmQvLi9yb3V0ZXMvcGFnZXMvaW5kZXguanM/MGE3ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZXhwcmVzcyBmcm9tIFwiZXhwcmVzc1wiXHJcbmltcG9ydCB3ZWxjb21lIGZyb20gXCIuL3dlbGNvbWVcIlxyXG5cclxuY29uc3Qgcm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKVxyXG5yb3V0ZXIudXNlKHdlbGNvbWUpXHJcblxyXG5leHBvcnQgZGVmYXVsdCByb3V0ZXJcclxuIl0sIm5hbWVzIjpbImV4cHJlc3MiLCJ3ZWxjb21lIiwicm91dGVyIiwiUm91dGVyIiwidXNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./routes/pages/index.js\n");

/***/ }),

/***/ "./routes/pages/welcome.js":
/*!*********************************!*\
  !*** ./routes/pages/welcome.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n\nvar router = express__WEBPACK_IMPORTED_MODULE_0___default().Router();\nrouter.get(\"/\", function (req, res) {\n  res.render(\"welcome\", {\n    message: \"Hello World\"\n  });\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yb3V0ZXMvcGFnZXMvd2VsY29tZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBNkI7QUFDN0IsSUFBTUMsTUFBTSxHQUFHRCxxREFBYyxFQUFFO0FBRS9CQyxNQUFNLENBQUNFLEdBQUcsQ0FBQyxHQUFHLEVBQUUsVUFBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUs7RUFDNUJBLEdBQUcsQ0FBQ0MsTUFBTSxDQUFDLFNBQVMsRUFBRTtJQUFFQyxPQUFPLEVBQUU7RUFBYyxDQUFDLENBQUM7QUFDbkQsQ0FBQyxDQUFDO0FBRUYsaUVBQWVOLE1BQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWJhY2tlbmQvLi9yb3V0ZXMvcGFnZXMvd2VsY29tZS5qcz80MmQ4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBleHByZXNzIGZyb20gXCJleHByZXNzXCJcclxuY29uc3Qgcm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKVxyXG5cclxucm91dGVyLmdldChcIi9cIiwgKHJlcSwgcmVzKSA9PiB7XHJcbiAgcmVzLnJlbmRlcihcIndlbGNvbWVcIiwgeyBtZXNzYWdlOiBcIkhlbGxvIFdvcmxkXCIgfSlcclxufSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJvdXRlclxyXG4iXSwibmFtZXMiOlsiZXhwcmVzcyIsInJvdXRlciIsIlJvdXRlciIsImdldCIsInJlcSIsInJlcyIsInJlbmRlciIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./routes/pages/welcome.js\n");

/***/ }),

/***/ "eta":
/*!**********************!*\
  !*** external "eta" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("eta");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "winston":
/*!**************************!*\
  !*** external "winston" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("winston");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;