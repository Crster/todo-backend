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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! body-parser */ \"body-parser\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var serve_favicon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! serve-favicon */ \"serve-favicon\");\n/* harmony import */ var serve_favicon__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(serve_favicon__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _crster9600_crster_html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @crster9600/crster-html */ \"@crster9600/crster-html\");\n/* harmony import */ var _crster9600_crster_html__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_crster9600_crster_html__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _modules_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/config */ \"./modules/config.js\");\n/* harmony import */ var _modules_logger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/logger */ \"./modules/logger.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./routes */ \"./routes/index.js\");\n\n\n\n\n\n\n\nvar server = express__WEBPACK_IMPORTED_MODULE_0___default()();\nserver.engine(\"html\", (_crster9600_crster_html__WEBPACK_IMPORTED_MODULE_3___default().expressViewEngine));\nserver.set(\"view engine\", \"html\");\nserver.set(\"views\", _modules_config__WEBPACK_IMPORTED_MODULE_4__[\"default\"].viewPath);\nserver.use(serve_favicon__WEBPACK_IMPORTED_MODULE_2___default()(\"\".concat(_modules_config__WEBPACK_IMPORTED_MODULE_4__[\"default\"].wwwroot, \"/favicon.png\")));\nserver.use(\"/public\", express__WEBPACK_IMPORTED_MODULE_0___default()[\"static\"](\"public\", _modules_config__WEBPACK_IMPORTED_MODULE_4__[\"default\"].staticOption));\nserver.use(\"/public/jquery\", express__WEBPACK_IMPORTED_MODULE_0___default()[\"static\"](\"\".concat(_modules_config__WEBPACK_IMPORTED_MODULE_4__[\"default\"].nodeModule, \"/jquery/dist\"), _modules_config__WEBPACK_IMPORTED_MODULE_4__[\"default\"].staticOption));\nserver.use(\"/public/bootstrap\", express__WEBPACK_IMPORTED_MODULE_0___default()[\"static\"](\"\".concat(_modules_config__WEBPACK_IMPORTED_MODULE_4__[\"default\"].nodeModule, \"/bootstrap/dist\"), _modules_config__WEBPACK_IMPORTED_MODULE_4__[\"default\"].staticOption));\nserver.use(\"/public/fontawesome\", express__WEBPACK_IMPORTED_MODULE_0___default()[\"static\"](\"\".concat(_modules_config__WEBPACK_IMPORTED_MODULE_4__[\"default\"].nodeModule, \"/@fortawesome/fontawesome-free\"), _modules_config__WEBPACK_IMPORTED_MODULE_4__[\"default\"].staticOption));\nserver.use(body_parser__WEBPACK_IMPORTED_MODULE_1___default().json());\nserver.use(body_parser__WEBPACK_IMPORTED_MODULE_1___default().urlencoded({\n  extended: false\n}));\nserver.use(_routes__WEBPACK_IMPORTED_MODULE_6__[\"default\"]);\nserver.use(function (req, res) {\n  res.render(\"404\");\n});\nserver.use(function (error, req, res, next) {\n  res.render(\"500\", {\n    error: error.message\n  });\n});\nserver.listen(_modules_config__WEBPACK_IMPORTED_MODULE_4__[\"default\"].port, function () {\n  _modules_logger__WEBPACK_IMPORTED_MODULE_5__[\"default\"].info(\"Server is running at http://localhost:\".concat(_modules_config__WEBPACK_IMPORTED_MODULE_4__[\"default\"].port, \"/\"));\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBNkI7QUFDTztBQUNEO0FBQ1E7QUFFTjtBQUNBO0FBQ1I7QUFFN0IsSUFBTU8sTUFBTSxHQUFHUCw4Q0FBTyxFQUFFO0FBRXhCTyxNQUFNLENBQUNDLE1BQU0sQ0FBQyxNQUFNLEVBQUVMLGtGQUF1QixDQUFDO0FBQzlDSSxNQUFNLENBQUNHLEdBQUcsQ0FBQyxhQUFhLEVBQUUsTUFBTSxDQUFDO0FBQ2pDSCxNQUFNLENBQUNHLEdBQUcsQ0FBQyxPQUFPLEVBQUVOLGdFQUFlLENBQUM7QUFFcENHLE1BQU0sQ0FBQ0ssR0FBRyxDQUFDVixvREFBTyxXQUFJRSwrREFBYyxrQkFBZSxDQUFDO0FBQ3BERyxNQUFNLENBQUNLLEdBQUcsQ0FBQyxTQUFTLEVBQUVaLHdEQUFjLENBQUMsUUFBUSxFQUFFSSxvRUFBbUIsQ0FBQyxDQUFDO0FBQ3BFRyxNQUFNLENBQUNLLEdBQUcsQ0FDUixnQkFBZ0IsRUFDaEJaLHdEQUFjLFdBQUlJLGtFQUFpQixtQkFBZ0JBLG9FQUFtQixDQUFDLENBQ3hFO0FBQ0RHLE1BQU0sQ0FBQ0ssR0FBRyxDQUNSLG1CQUFtQixFQUNuQlosd0RBQWMsV0FBSUksa0VBQWlCLHNCQUFtQkEsb0VBQW1CLENBQUMsQ0FDM0U7QUFDREcsTUFBTSxDQUFDSyxHQUFHLENBQ1IscUJBQXFCLEVBQ3JCWix3REFBYyxXQUNUSSxrRUFBaUIscUNBQ3BCQSxvRUFBbUIsQ0FDcEIsQ0FDRjtBQUVERyxNQUFNLENBQUNLLEdBQUcsQ0FBQ1gsdURBQWUsRUFBRSxDQUFDO0FBQzdCTSxNQUFNLENBQUNLLEdBQUcsQ0FBQ1gsNkRBQXFCLENBQUM7RUFBRWlCLFFBQVEsRUFBRTtBQUFNLENBQUMsQ0FBQyxDQUFDO0FBQ3REWCxNQUFNLENBQUNLLEdBQUcsQ0FBQ04sK0NBQU0sQ0FBQztBQUVsQkMsTUFBTSxDQUFDSyxHQUFHLENBQUMsVUFBQ08sR0FBRyxFQUFFQyxHQUFHLEVBQUs7RUFDdkJBLEdBQUcsQ0FBQ0MsTUFBTSxDQUFDLEtBQUssQ0FBQztBQUNuQixDQUFDLENBQUM7QUFFRmQsTUFBTSxDQUFDSyxHQUFHLENBQUMsVUFBQ1UsS0FBSyxFQUFFSCxHQUFHLEVBQUVDLEdBQUcsRUFBRUcsSUFBSSxFQUFLO0VBQ3BDSCxHQUFHLENBQUNDLE1BQU0sQ0FBQyxLQUFLLEVBQUU7SUFBRUMsS0FBSyxFQUFFQSxLQUFLLENBQUNFO0VBQVEsQ0FBQyxDQUFDO0FBQzdDLENBQUMsQ0FBQztBQUVGakIsTUFBTSxDQUFDa0IsTUFBTSxDQUFDckIsNERBQVcsRUFBRSxZQUFNO0VBQy9CQyw0REFBVyxpREFBMENELDREQUFXLE9BQUk7QUFDdEUsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1iYWNrZW5kLy4vaW5kZXguanM/NDFmNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZXhwcmVzcyBmcm9tIFwiZXhwcmVzc1wiXHJcbmltcG9ydCBib2R5UGFyc2VyIGZyb20gXCJib2R5LXBhcnNlclwiXHJcbmltcG9ydCBmYXZpY29uIGZyb20gXCJzZXJ2ZS1mYXZpY29uXCJcclxuaW1wb3J0IGNodG1sIGZyb20gXCJAY3JzdGVyOTYwMC9jcnN0ZXItaHRtbFwiXHJcblxyXG5pbXBvcnQgY29uZmlnIGZyb20gXCIuL21vZHVsZXMvY29uZmlnXCJcclxuaW1wb3J0IGxvZ2dlciBmcm9tIFwiLi9tb2R1bGVzL2xvZ2dlclwiXHJcbmltcG9ydCByb3V0ZXMgZnJvbSBcIi4vcm91dGVzXCJcclxuXHJcbmNvbnN0IHNlcnZlciA9IGV4cHJlc3MoKVxyXG5cclxuc2VydmVyLmVuZ2luZShcImh0bWxcIiwgY2h0bWwuZXhwcmVzc1ZpZXdFbmdpbmUpXHJcbnNlcnZlci5zZXQoXCJ2aWV3IGVuZ2luZVwiLCBcImh0bWxcIilcclxuc2VydmVyLnNldChcInZpZXdzXCIsIGNvbmZpZy52aWV3UGF0aClcclxuXHJcbnNlcnZlci51c2UoZmF2aWNvbihgJHtjb25maWcud3d3cm9vdH0vZmF2aWNvbi5wbmdgKSlcclxuc2VydmVyLnVzZShcIi9wdWJsaWNcIiwgZXhwcmVzcy5zdGF0aWMoXCJwdWJsaWNcIiwgY29uZmlnLnN0YXRpY09wdGlvbikpXHJcbnNlcnZlci51c2UoXHJcbiAgXCIvcHVibGljL2pxdWVyeVwiLFxyXG4gIGV4cHJlc3Muc3RhdGljKGAke2NvbmZpZy5ub2RlTW9kdWxlfS9qcXVlcnkvZGlzdGAsIGNvbmZpZy5zdGF0aWNPcHRpb24pLFxyXG4pXHJcbnNlcnZlci51c2UoXHJcbiAgXCIvcHVibGljL2Jvb3RzdHJhcFwiLFxyXG4gIGV4cHJlc3Muc3RhdGljKGAke2NvbmZpZy5ub2RlTW9kdWxlfS9ib290c3RyYXAvZGlzdGAsIGNvbmZpZy5zdGF0aWNPcHRpb24pLFxyXG4pXHJcbnNlcnZlci51c2UoXHJcbiAgXCIvcHVibGljL2ZvbnRhd2Vzb21lXCIsXHJcbiAgZXhwcmVzcy5zdGF0aWMoXHJcbiAgICBgJHtjb25maWcubm9kZU1vZHVsZX0vQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLWZyZWVgLFxyXG4gICAgY29uZmlnLnN0YXRpY09wdGlvbixcclxuICApLFxyXG4pXHJcblxyXG5zZXJ2ZXIudXNlKGJvZHlQYXJzZXIuanNvbigpKVxyXG5zZXJ2ZXIudXNlKGJvZHlQYXJzZXIudXJsZW5jb2RlZCh7IGV4dGVuZGVkOiBmYWxzZSB9KSlcclxuc2VydmVyLnVzZShyb3V0ZXMpXHJcblxyXG5zZXJ2ZXIudXNlKChyZXEsIHJlcykgPT4ge1xyXG4gIHJlcy5yZW5kZXIoXCI0MDRcIilcclxufSlcclxuXHJcbnNlcnZlci51c2UoKGVycm9yLCByZXEsIHJlcywgbmV4dCkgPT4ge1xyXG4gIHJlcy5yZW5kZXIoXCI1MDBcIiwgeyBlcnJvcjogZXJyb3IubWVzc2FnZSB9KVxyXG59KVxyXG5cclxuc2VydmVyLmxpc3Rlbihjb25maWcucG9ydCwgKCkgPT4ge1xyXG4gIGxvZ2dlci5pbmZvKGBTZXJ2ZXIgaXMgcnVubmluZyBhdCBodHRwOi8vbG9jYWxob3N0OiR7Y29uZmlnLnBvcnR9L2ApXHJcbn0pXHJcbiJdLCJuYW1lcyI6WyJleHByZXNzIiwiYm9keVBhcnNlciIsImZhdmljb24iLCJjaHRtbCIsImNvbmZpZyIsImxvZ2dlciIsInJvdXRlcyIsInNlcnZlciIsImVuZ2luZSIsImV4cHJlc3NWaWV3RW5naW5lIiwic2V0Iiwidmlld1BhdGgiLCJ1c2UiLCJ3d3dyb290Iiwic3RhdGljT3B0aW9uIiwibm9kZU1vZHVsZSIsImpzb24iLCJ1cmxlbmNvZGVkIiwiZXh0ZW5kZWQiLCJyZXEiLCJyZXMiLCJyZW5kZXIiLCJlcnJvciIsIm5leHQiLCJtZXNzYWdlIiwibGlzdGVuIiwicG9ydCIsImluZm8iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./index.js\n");

/***/ }),

/***/ "./modules/config.js":
/*!***************************!*\
  !*** ./modules/config.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var dotenv_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dotenv/config */ \"dotenv/config\");\n/* harmony import */ var dotenv_config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dotenv_config__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\nvar _process$env$PORT, _process$env$DB_NAME;\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  port: (_process$env$PORT = process.env.PORT) !== null && _process$env$PORT !== void 0 ? _process$env$PORT : 8080,\n  viewPath: path__WEBPACK_IMPORTED_MODULE_1___default().resolve(\"./views\"),\n  nodeModule: path__WEBPACK_IMPORTED_MODULE_1___default().resolve(\"./node_modules\"),\n  wwwroot: path__WEBPACK_IMPORTED_MODULE_1___default().resolve(\"./public\"),\n  dbUri: process.env.MONGO_URI,\n  dbName: (_process$env$DB_NAME = process.env.DB_NAME) !== null && _process$env$DB_NAME !== void 0 ? _process$env$DB_NAME : \"sampledb\",\n  jwtToken: {\n    secret: process.env.JWT_SECRET,\n    expiresIn: 60 * 60\n  },\n  staticOption: {\n    maxAge: \"1d\"\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9tb2R1bGVzL2NvbmZpZy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBc0I7QUFDQztBQUV2QixpRUFBZTtFQUNiQyxJQUFJLHVCQUFFQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsSUFBSSxpRUFBSSxJQUFJO0VBQzlCQyxRQUFRLEVBQUVMLG1EQUFZLENBQUMsU0FBUyxDQUFDO0VBQ2pDTyxVQUFVLEVBQUVQLG1EQUFZLENBQUMsZ0JBQWdCLENBQUM7RUFDMUNRLE9BQU8sRUFBRVIsbURBQVksQ0FBQyxVQUFVLENBQUM7RUFDakNTLEtBQUssRUFBRVAsT0FBTyxDQUFDQyxHQUFHLENBQUNPLFNBQVM7RUFDNUJDLE1BQU0sMEJBQUVULE9BQU8sQ0FBQ0MsR0FBRyxDQUFDUyxPQUFPLHVFQUFJLFVBQVU7RUFDekNDLFFBQVEsRUFBRTtJQUNSQyxNQUFNLEVBQUVaLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDWSxVQUFVO0lBQzlCQyxTQUFTLEVBQUUsRUFBRSxHQUFHO0VBQ2xCLENBQUM7RUFDREMsWUFBWSxFQUFFO0lBQUVDLE1BQU0sRUFBRTtFQUFLO0FBQy9CLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWJhY2tlbmQvLi9tb2R1bGVzL2NvbmZpZy5qcz80MTYwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcImRvdGVudi9jb25maWdcIlxyXG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgcG9ydDogcHJvY2Vzcy5lbnYuUE9SVCA/PyA4MDgwLFxyXG4gIHZpZXdQYXRoOiBwYXRoLnJlc29sdmUoXCIuL3ZpZXdzXCIpLFxyXG4gIG5vZGVNb2R1bGU6IHBhdGgucmVzb2x2ZShcIi4vbm9kZV9tb2R1bGVzXCIpLFxyXG4gIHd3d3Jvb3Q6IHBhdGgucmVzb2x2ZShcIi4vcHVibGljXCIpLFxyXG4gIGRiVXJpOiBwcm9jZXNzLmVudi5NT05HT19VUkksXHJcbiAgZGJOYW1lOiBwcm9jZXNzLmVudi5EQl9OQU1FID8/IFwic2FtcGxlZGJcIixcclxuICBqd3RUb2tlbjoge1xyXG4gICAgc2VjcmV0OiBwcm9jZXNzLmVudi5KV1RfU0VDUkVULFxyXG4gICAgZXhwaXJlc0luOiA2MCAqIDYwLFxyXG4gIH0sXHJcbiAgc3RhdGljT3B0aW9uOiB7IG1heEFnZTogXCIxZFwiIH0sXHJcbn1cclxuIl0sIm5hbWVzIjpbInBhdGgiLCJwb3J0IiwicHJvY2VzcyIsImVudiIsIlBPUlQiLCJ2aWV3UGF0aCIsInJlc29sdmUiLCJub2RlTW9kdWxlIiwid3d3cm9vdCIsImRiVXJpIiwiTU9OR09fVVJJIiwiZGJOYW1lIiwiREJfTkFNRSIsImp3dFRva2VuIiwic2VjcmV0IiwiSldUX1NFQ1JFVCIsImV4cGlyZXNJbiIsInN0YXRpY09wdGlvbiIsIm1heEFnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./modules/config.js\n");

/***/ }),

/***/ "./modules/database.js":
/*!*****************************!*\
  !*** ./modules/database.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"client\": () => (/* binding */ client),\n/* harmony export */   \"default\": () => (/* binding */ collection)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ \"./modules/config.js\");\n\n\nvar client = new mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient(_config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].dbUri);\nfunction collection(name) {\n  return client.db(_config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].dbName).collection(name);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9tb2R1bGVzL2RhdGFiYXNlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQXFDO0FBQ1I7QUFFdEIsSUFBTUUsTUFBTSxHQUFHLElBQUlGLGdEQUFXLENBQUNDLHFEQUFZLENBQUM7QUFFcEMsU0FBU0csVUFBVSxDQUFDQyxJQUFJLEVBQUU7RUFDdkMsT0FBT0gsTUFBTSxDQUFDSSxFQUFFLENBQUNMLHNEQUFhLENBQUMsQ0FBQ0csVUFBVSxDQUFDQyxJQUFJLENBQUM7QUFDbEQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWJhY2tlbmQvLi9tb2R1bGVzL2RhdGFiYXNlLmpzP2U5ZGMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9uZ29DbGllbnQgfSBmcm9tIFwibW9uZ29kYlwiXHJcbmltcG9ydCBjb25maWcgZnJvbSBcIi4vY29uZmlnXCJcclxuXHJcbmV4cG9ydCBjb25zdCBjbGllbnQgPSBuZXcgTW9uZ29DbGllbnQoY29uZmlnLmRiVXJpKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29sbGVjdGlvbihuYW1lKSB7XHJcbiAgcmV0dXJuIGNsaWVudC5kYihjb25maWcuZGJOYW1lKS5jb2xsZWN0aW9uKG5hbWUpXHJcbn1cclxuIl0sIm5hbWVzIjpbIk1vbmdvQ2xpZW50IiwiY29uZmlnIiwiY2xpZW50IiwiZGJVcmkiLCJjb2xsZWN0aW9uIiwibmFtZSIsImRiIiwiZGJOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./modules/database.js\n");

/***/ }),

/***/ "./modules/logger.js":
/*!***************************!*\
  !*** ./modules/logger.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var winston__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! winston */ \"winston\");\n/* harmony import */ var winston__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(winston__WEBPACK_IMPORTED_MODULE_0__);\n\nvar beautifyFormat = winston__WEBPACK_IMPORTED_MODULE_0__.format.combine(winston__WEBPACK_IMPORTED_MODULE_0__.format.colorize({\n  all: true\n}), winston__WEBPACK_IMPORTED_MODULE_0__.format.timestamp(), winston__WEBPACK_IMPORTED_MODULE_0__.format.printf(function (info) {\n  var _info$label;\n  return \"\".concat(info.timestamp, \" \").concat((_info$label = info.label) !== null && _info$label !== void 0 ? _info$label : info.level, \": \").concat(info.message);\n}));\nvar logger = (0,winston__WEBPACK_IMPORTED_MODULE_0__.createLogger)({\n  format: beautifyFormat,\n  transports: [new winston__WEBPACK_IMPORTED_MODULE_0__.transports.Console()]\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (logger);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9tb2R1bGVzL2xvZ2dlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBMEQ7QUFFMUQsSUFBTUcsY0FBYyxHQUFHRCxtREFBYyxDQUNuQ0Esb0RBQWUsQ0FBQztFQUNkSSxHQUFHLEVBQUU7QUFDUCxDQUFDLENBQUMsRUFDRkoscURBQWdCLEVBQUUsRUFDbEJBLGtEQUFhLENBQ1gsVUFBQ08sSUFBSTtFQUFBO0VBQUEsaUJBQVFBLElBQUksQ0FBQ0YsU0FBUyw2QkFBSUUsSUFBSSxDQUFDQyxLQUFLLHFEQUFJRCxJQUFJLENBQUNFLEtBQUssZUFBS0YsSUFBSSxDQUFDRyxPQUFPO0FBQUEsQ0FBRSxDQUMzRSxDQUNGO0FBRUQsSUFBTUMsTUFBTSxHQUFHYixxREFBWSxDQUFDO0VBQzFCRSxNQUFNLEVBQUVDLGNBQWM7RUFDdEJGLFVBQVUsRUFBRSxDQUFDLElBQUlBLHVEQUFrQixFQUFFO0FBQ3ZDLENBQUMsQ0FBQztBQUVGLGlFQUFlWSxNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1iYWNrZW5kLy4vbW9kdWxlcy9sb2dnZXIuanM/YTA2MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVMb2dnZXIsIHRyYW5zcG9ydHMsIGZvcm1hdCB9IGZyb20gXCJ3aW5zdG9uXCJcclxuXHJcbmNvbnN0IGJlYXV0aWZ5Rm9ybWF0ID0gZm9ybWF0LmNvbWJpbmUoXHJcbiAgZm9ybWF0LmNvbG9yaXplKHtcclxuICAgIGFsbDogdHJ1ZSxcclxuICB9KSxcclxuICBmb3JtYXQudGltZXN0YW1wKCksXHJcbiAgZm9ybWF0LnByaW50ZihcclxuICAgIChpbmZvKSA9PiBgJHtpbmZvLnRpbWVzdGFtcH0gJHtpbmZvLmxhYmVsID8/IGluZm8ubGV2ZWx9OiAke2luZm8ubWVzc2FnZX1gLFxyXG4gICksXHJcbilcclxuXHJcbmNvbnN0IGxvZ2dlciA9IGNyZWF0ZUxvZ2dlcih7XHJcbiAgZm9ybWF0OiBiZWF1dGlmeUZvcm1hdCxcclxuICB0cmFuc3BvcnRzOiBbbmV3IHRyYW5zcG9ydHMuQ29uc29sZSgpXSxcclxufSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGxvZ2dlclxyXG4iXSwibmFtZXMiOlsiY3JlYXRlTG9nZ2VyIiwidHJhbnNwb3J0cyIsImZvcm1hdCIsImJlYXV0aWZ5Rm9ybWF0IiwiY29tYmluZSIsImNvbG9yaXplIiwiYWxsIiwidGltZXN0YW1wIiwicHJpbnRmIiwiaW5mbyIsImxhYmVsIiwibGV2ZWwiLCJtZXNzYWdlIiwibG9nZ2VyIiwiQ29uc29sZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./modules/logger.js\n");

/***/ }),

/***/ "./modules/passport.js":
/*!*****************************!*\
  !*** ./modules/passport.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! passport */ \"passport\");\n/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(passport__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var passport_local__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! passport-local */ \"passport-local\");\n/* harmony import */ var passport_local__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(passport_local__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _services_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user */ \"./services/user.js\");\n\n\n\npassport__WEBPACK_IMPORTED_MODULE_0__.use(\"local\", new (passport_local__WEBPACK_IMPORTED_MODULE_1___default())(function (username, password, done) {\n  (0,_services_user__WEBPACK_IMPORTED_MODULE_2__.getUserByUsernameAndPassword)(username, password).then(function (user) {\n    done(null, user);\n  })[\"catch\"](function (err) {\n    done(err);\n  });\n}));\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (passport__WEBPACK_IMPORTED_MODULE_0__);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9tb2R1bGVzL3Bhc3Nwb3J0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFvQztBQUNNO0FBQ3FCO0FBRS9EQSx5Q0FBWSxDQUNWLE9BQU8sRUFDUCxJQUFJQyx1REFBYSxDQUFDLFVBQVVHLFFBQVEsRUFBRUMsUUFBUSxFQUFFQyxJQUFJLEVBQUU7RUFDcERKLDRFQUE0QixDQUFDRSxRQUFRLEVBQUVDLFFBQVEsQ0FBQyxDQUM3Q0UsSUFBSSxDQUFDLFVBQUNDLElBQUksRUFBSztJQUNkRixJQUFJLENBQUMsSUFBSSxFQUFFRSxJQUFJLENBQUM7RUFDbEIsQ0FBQyxDQUFDLFNBQ0ksQ0FBQyxVQUFDQyxHQUFHLEVBQUs7SUFDZEgsSUFBSSxDQUFDRyxHQUFHLENBQUM7RUFDWCxDQUFDLENBQUM7QUFDTixDQUFDLENBQUMsQ0FDSDtBQUVELGlFQUFlVCxxQ0FBUSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tYmFja2VuZC8uL21vZHVsZXMvcGFzc3BvcnQuanM/MjAzMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBwYXNzcG9ydCBmcm9tIFwicGFzc3BvcnRcIlxyXG5pbXBvcnQgTG9jYWxTdHJhdGVneSBmcm9tIFwicGFzc3BvcnQtbG9jYWxcIlxyXG5pbXBvcnQgeyBnZXRVc2VyQnlVc2VybmFtZUFuZFBhc3N3b3JkIH0gZnJvbSBcIi4uL3NlcnZpY2VzL3VzZXJcIlxyXG5cclxucGFzc3BvcnQudXNlKFxyXG4gIFwibG9jYWxcIixcclxuICBuZXcgTG9jYWxTdHJhdGVneShmdW5jdGlvbiAodXNlcm5hbWUsIHBhc3N3b3JkLCBkb25lKSB7XHJcbiAgICBnZXRVc2VyQnlVc2VybmFtZUFuZFBhc3N3b3JkKHVzZXJuYW1lLCBwYXNzd29yZClcclxuICAgICAgLnRoZW4oKHVzZXIpID0+IHtcclxuICAgICAgICBkb25lKG51bGwsIHVzZXIpXHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgZG9uZShlcnIpXHJcbiAgICAgIH0pXHJcbiAgfSksXHJcbilcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHBhc3Nwb3J0XHJcbiJdLCJuYW1lcyI6WyJwYXNzcG9ydCIsIkxvY2FsU3RyYXRlZ3kiLCJnZXRVc2VyQnlVc2VybmFtZUFuZFBhc3N3b3JkIiwidXNlIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsImRvbmUiLCJ0aGVuIiwidXNlciIsImVyciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./modules/passport.js\n");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n\nvar router = express__WEBPACK_IMPORTED_MODULE_0___default().Router();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yb3V0ZXMvYXBpL3VzZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTZCO0FBRTdCLElBQU1DLE1BQU0sR0FBR0QscURBQWMsRUFBRTtBQUUvQixpRUFBZUMsTUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tYmFja2VuZC8uL3JvdXRlcy9hcGkvdXNlci5qcz8yYmM3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBleHByZXNzIGZyb20gXCJleHByZXNzXCJcclxuXHJcbmNvbnN0IHJvdXRlciA9IGV4cHJlc3MuUm91dGVyKClcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJvdXRlclxyXG4iXSwibmFtZXMiOlsiZXhwcmVzcyIsInJvdXRlciIsIlJvdXRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./routes/api/user.js\n");

/***/ }),

/***/ "./routes/auth.js":
/*!************************!*\
  !*** ./routes/auth.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _modules_passport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/passport */ \"./modules/passport.js\");\n\n\nvar router = express__WEBPACK_IMPORTED_MODULE_0___default().Router();\nrouter.post(\"/login\", _modules_passport__WEBPACK_IMPORTED_MODULE_1__[\"default\"].authenticate(\"local\", {\n  successRedirect: \"/dashboard\",\n  failureRedirect: \"/login\"\n}));\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yb3V0ZXMvYXV0aC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQTZCO0FBQ2E7QUFFMUMsSUFBTUUsTUFBTSxHQUFHRixxREFBYyxFQUFFO0FBQy9CRSxNQUFNLENBQUNFLElBQUksQ0FBQyxRQUFRLEVBQUVILHNFQUFxQixDQUFDLE9BQU8sRUFBRTtFQUNuREssZUFBZSxFQUFFLFlBQVk7RUFDN0JDLGVBQWUsRUFBRTtBQUNuQixDQUFDLENBQUMsQ0FBQztBQUVILGlFQUFlTCxNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1iYWNrZW5kLy4vcm91dGVzL2F1dGguanM/NjIwMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZXhwcmVzcyBmcm9tIFwiZXhwcmVzc1wiXHJcbmltcG9ydCBwYXNzcG9ydCBmcm9tIFwiLi4vbW9kdWxlcy9wYXNzcG9ydFwiXHJcblxyXG5jb25zdCByb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpXHJcbnJvdXRlci5wb3N0KFwiL2xvZ2luXCIsIHBhc3Nwb3J0LmF1dGhlbnRpY2F0ZShcImxvY2FsXCIsIHtcclxuICBzdWNjZXNzUmVkaXJlY3Q6IFwiL2Rhc2hib2FyZFwiLFxyXG4gIGZhaWx1cmVSZWRpcmVjdDogXCIvbG9naW5cIlxyXG59KSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJvdXRlclxyXG4iXSwibmFtZXMiOlsiZXhwcmVzcyIsInBhc3Nwb3J0Iiwicm91dGVyIiwiUm91dGVyIiwicG9zdCIsImF1dGhlbnRpY2F0ZSIsInN1Y2Nlc3NSZWRpcmVjdCIsImZhaWx1cmVSZWRpcmVjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./routes/auth.js\n");

/***/ }),

/***/ "./routes/index.js":
/*!*************************!*\
  !*** ./routes/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api */ \"./routes/api/index.js\");\n/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth */ \"./routes/auth.js\");\n/* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages */ \"./routes/pages/index.js\");\n\n\n\n\nvar router = express__WEBPACK_IMPORTED_MODULE_0___default().Router();\nrouter.use(\"/api\", _api__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\nrouter.use(\"/\", _auth__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\nrouter.use(\"/\", _pages__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yb3V0ZXMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQTZCO0FBRUQ7QUFDRTtBQUNDO0FBRS9CLElBQU1JLE1BQU0sR0FBR0oscURBQWMsRUFBRTtBQUUvQkksTUFBTSxDQUFDRSxHQUFHLENBQUMsTUFBTSxFQUFFTCw0Q0FBUSxDQUFDO0FBQzVCRyxNQUFNLENBQUNFLEdBQUcsQ0FBQyxHQUFHLEVBQUVKLDZDQUFTLENBQUM7QUFDMUJFLE1BQU0sQ0FBQ0UsR0FBRyxDQUFDLEdBQUcsRUFBRUgsOENBQVMsQ0FBQztBQUUxQixpRUFBZUMsTUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tYmFja2VuZC8uL3JvdXRlcy9pbmRleC5qcz85NGEzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBleHByZXNzIGZyb20gXCJleHByZXNzXCJcclxuXHJcbmltcG9ydCBhcGlSb3V0ZSBmcm9tIFwiLi9hcGlcIlxyXG5pbXBvcnQgYXV0aFJvdXRlIGZyb20gXCIuL2F1dGhcIlxyXG5pbXBvcnQgcGFnZVJvdXRlIGZyb20gXCIuL3BhZ2VzXCJcclxuXHJcbmNvbnN0IHJvdXRlciA9IGV4cHJlc3MuUm91dGVyKClcclxuXHJcbnJvdXRlci51c2UoXCIvYXBpXCIsIGFwaVJvdXRlKVxyXG5yb3V0ZXIudXNlKFwiL1wiLCBhdXRoUm91dGUpXHJcbnJvdXRlci51c2UoXCIvXCIsIHBhZ2VSb3V0ZSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJvdXRlclxyXG4iXSwibmFtZXMiOlsiZXhwcmVzcyIsImFwaVJvdXRlIiwiYXV0aFJvdXRlIiwicGFnZVJvdXRlIiwicm91dGVyIiwiUm91dGVyIiwidXNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./routes/index.js\n");

/***/ }),

/***/ "./routes/pages/index.js":
/*!*******************************!*\
  !*** ./routes/pages/index.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _welcome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./welcome */ \"./routes/pages/welcome.js\");\n/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login */ \"./routes/pages/login.js\");\n\n\n\nvar router = express__WEBPACK_IMPORTED_MODULE_0___default().Router();\nrouter.use(_welcome__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\nrouter.use(_login__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yb3V0ZXMvcGFnZXMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBNkI7QUFDRTtBQUNKO0FBRTNCLElBQU1HLE1BQU0sR0FBR0gscURBQWMsRUFBRTtBQUMvQkcsTUFBTSxDQUFDRSxHQUFHLENBQUNKLGdEQUFPLENBQUM7QUFDbkJFLE1BQU0sQ0FBQ0UsR0FBRyxDQUFDSCw4Q0FBSyxDQUFDO0FBRWpCLGlFQUFlQyxNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1iYWNrZW5kLy4vcm91dGVzL3BhZ2VzL2luZGV4LmpzPzBhN2UiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGV4cHJlc3MgZnJvbSBcImV4cHJlc3NcIlxyXG5pbXBvcnQgd2VsY29tZSBmcm9tIFwiLi93ZWxjb21lXCJcclxuaW1wb3J0IGxvZ2luIGZyb20gXCIuL2xvZ2luXCJcclxuXHJcbmNvbnN0IHJvdXRlciA9IGV4cHJlc3MuUm91dGVyKClcclxucm91dGVyLnVzZSh3ZWxjb21lKVxyXG5yb3V0ZXIudXNlKGxvZ2luKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcm91dGVyXHJcbiJdLCJuYW1lcyI6WyJleHByZXNzIiwid2VsY29tZSIsImxvZ2luIiwicm91dGVyIiwiUm91dGVyIiwidXNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./routes/pages/index.js\n");

/***/ }),

/***/ "./routes/pages/login.js":
/*!*******************************!*\
  !*** ./routes/pages/login.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n\nvar router = express__WEBPACK_IMPORTED_MODULE_0___default().Router();\nrouter.get(\"/login\", function (req, res) {\n  res.render(\"login\", {\n    title: \"Login\"\n  });\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yb3V0ZXMvcGFnZXMvbG9naW4uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTZCO0FBQzdCLElBQU1DLE1BQU0sR0FBR0QscURBQWMsRUFBRTtBQUUvQkMsTUFBTSxDQUFDRSxHQUFHLENBQUMsUUFBUSxFQUFFLFVBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFLO0VBQ2pDQSxHQUFHLENBQUNDLE1BQU0sQ0FBQyxPQUFPLEVBQUU7SUFBRUMsS0FBSyxFQUFFO0VBQVEsQ0FBQyxDQUFDO0FBQ3pDLENBQUMsQ0FBQztBQUVGLGlFQUFlTixNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1iYWNrZW5kLy4vcm91dGVzL3BhZ2VzL2xvZ2luLmpzP2VhZjQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGV4cHJlc3MgZnJvbSBcImV4cHJlc3NcIlxyXG5jb25zdCByb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpXHJcblxyXG5yb3V0ZXIuZ2V0KFwiL2xvZ2luXCIsIChyZXEsIHJlcykgPT4ge1xyXG4gIHJlcy5yZW5kZXIoXCJsb2dpblwiLCB7IHRpdGxlOiBcIkxvZ2luXCIgfSlcclxufSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJvdXRlciJdLCJuYW1lcyI6WyJleHByZXNzIiwicm91dGVyIiwiUm91dGVyIiwiZ2V0IiwicmVxIiwicmVzIiwicmVuZGVyIiwidGl0bGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./routes/pages/login.js\n");

/***/ }),

/***/ "./routes/pages/welcome.js":
/*!*********************************!*\
  !*** ./routes/pages/welcome.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n\nvar router = express__WEBPACK_IMPORTED_MODULE_0___default().Router();\nrouter.get(\"/\", function (req, res) {\n  res.render(\"welcome\", {\n    title: \"Landing Page\"\n  });\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yb3V0ZXMvcGFnZXMvd2VsY29tZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBNkI7QUFDN0IsSUFBTUMsTUFBTSxHQUFHRCxxREFBYyxFQUFFO0FBRS9CQyxNQUFNLENBQUNFLEdBQUcsQ0FBQyxHQUFHLEVBQUUsVUFBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUs7RUFDNUJBLEdBQUcsQ0FBQ0MsTUFBTSxDQUFDLFNBQVMsRUFBRTtJQUFFQyxLQUFLLEVBQUU7RUFBZSxDQUFDLENBQUM7QUFDbEQsQ0FBQyxDQUFDO0FBRUYsaUVBQWVOLE1BQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWJhY2tlbmQvLi9yb3V0ZXMvcGFnZXMvd2VsY29tZS5qcz80MmQ4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBleHByZXNzIGZyb20gXCJleHByZXNzXCJcclxuY29uc3Qgcm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKVxyXG5cclxucm91dGVyLmdldChcIi9cIiwgKHJlcSwgcmVzKSA9PiB7XHJcbiAgcmVzLnJlbmRlcihcIndlbGNvbWVcIiwgeyB0aXRsZTogXCJMYW5kaW5nIFBhZ2VcIiB9KVxyXG59KVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcm91dGVyXHJcbiJdLCJuYW1lcyI6WyJleHByZXNzIiwicm91dGVyIiwiUm91dGVyIiwiZ2V0IiwicmVxIiwicmVzIiwicmVuZGVyIiwidGl0bGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./routes/pages/welcome.js\n");

/***/ }),

/***/ "./services/user.js":
/*!**************************!*\
  !*** ./services/user.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getUserByUsernameAndPassword\": () => (/* binding */ getUserByUsernameAndPassword)\n/* harmony export */ });\n/* harmony import */ var argon2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! argon2 */ \"argon2\");\n/* harmony import */ var argon2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(argon2__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _modules_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/database */ \"./modules/database.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction _regeneratorRuntime() { \"use strict\"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = \"function\" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || \"@@iterator\", asyncIteratorSymbol = $Symbol.asyncIterator || \"@@asyncIterator\", toStringTagSymbol = $Symbol.toStringTag || \"@@toStringTag\"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, \"\"); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, \"_invoke\", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: \"normal\", arg: fn.call(obj, arg) }; } catch (err) { return { type: \"throw\", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { [\"next\", \"throw\", \"return\"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if (\"throw\" !== record.type) { var result = record.arg, value = result.value; return value && \"object\" == _typeof(value) && hasOwn.call(value, \"__await\") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke(\"next\", value, resolve, reject); }, function (err) { invoke(\"throw\", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke(\"throw\", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, \"_invoke\", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = \"suspendedStart\"; return function (method, arg) { if (\"executing\" === state) throw new Error(\"Generator is already running\"); if (\"completed\" === state) { if (\"throw\" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if (\"next\" === context.method) context.sent = context._sent = context.arg;else if (\"throw\" === context.method) { if (\"suspendedStart\" === state) throw state = \"completed\", context.arg; context.dispatchException(context.arg); } else \"return\" === context.method && context.abrupt(\"return\", context.arg); state = \"executing\"; var record = tryCatch(innerFn, self, context); if (\"normal\" === record.type) { if (state = context.done ? \"completed\" : \"suspendedYield\", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } \"throw\" === record.type && (state = \"completed\", context.method = \"throw\", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, \"throw\" === methodName && delegate.iterator[\"return\"] && (context.method = \"return\", context.arg = undefined, maybeInvokeDelegate(delegate, context), \"throw\" === context.method) || \"return\" !== methodName && (context.method = \"throw\", context.arg = new TypeError(\"The iterator does not provide a '\" + methodName + \"' method\")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if (\"throw\" === record.type) return context.method = \"throw\", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, \"return\" !== context.method && (context.method = \"next\", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = \"throw\", context.arg = new TypeError(\"iterator result is not an object\"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = \"normal\", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: \"root\" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if (\"function\" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, \"constructor\", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, \"constructor\", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, \"GeneratorFunction\"), exports.isGeneratorFunction = function (genFun) { var ctor = \"function\" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || \"GeneratorFunction\" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, \"GeneratorFunction\")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, \"Generator\"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, \"toString\", function () { return \"[object Generator]\"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = \"next\", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { \"t\" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if (\"throw\" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = \"throw\", record.arg = exception, context.next = loc, caught && (context.method = \"next\", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if (\"root\" === entry.tryLoc) return handle(\"end\"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, \"catchLoc\"), hasFinally = hasOwn.call(entry, \"finallyLoc\"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error(\"try statement without catch or finally\"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, \"finallyLoc\") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && (\"break\" === type || \"continue\" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = \"next\", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if (\"throw\" === record.type) throw record.arg; return \"break\" === record.type || \"continue\" === record.type ? this.next = record.arg : \"return\" === record.type ? (this.rval = this.arg = record.arg, this.method = \"return\", this.next = \"end\") : \"normal\" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, \"catch\": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if (\"throw\" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error(\"illegal catch attempt\"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, \"next\" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\nfunction getUserByUsernameAndPassword(_x, _x2) {\n  return _getUserByUsernameAndPassword.apply(this, arguments);\n}\nfunction _getUserByUsernameAndPassword() {\n  _getUserByUsernameAndPassword = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(username, password) {\n    var user;\n    return _regeneratorRuntime().wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return (0,_modules_database__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"users\").findOne({\n              username: username\n            }, {\n              projection: {\n                name: 1,\n                username: 1,\n                email: 1,\n                password: 1\n              }\n            });\n          case 2:\n            user = _context.sent;\n            _context.t0 = !user;\n            if (_context.t0) {\n              _context.next = 8;\n              break;\n            }\n            _context.next = 7;\n            return (0,argon2__WEBPACK_IMPORTED_MODULE_0__.verify)(user.password, password);\n          case 7:\n            _context.t0 = !_context.sent;\n          case 8:\n            if (!_context.t0) {\n              _context.next = 10;\n              break;\n            }\n            throw new Error(\"User not found\");\n          case 10:\n            return _context.abrupt(\"return\", {\n              name: user.name,\n              username: user.username,\n              email: user.email\n            });\n          case 11:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n  return _getUserByUsernameAndPassword.apply(this, arguments);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zZXJ2aWNlcy91c2VyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OytDQUNBO0FBQUE7QUFBQTtBQURnQztBQUNLO0FBRTlCLFNBQWVFLDRCQUE0QjtFQUFBO0FBQUE7QUFpQmpEO0VBQUEsMkZBakJNLGlCQUE0Q0MsUUFBUSxFQUFFQyxRQUFRO0lBQUE7SUFBQTtNQUFBO1FBQUE7VUFBQTtZQUFBO1lBQUEsT0FDOUNILDZEQUFFLENBQUMsT0FBTyxDQUFDLENBQUNJLE9BQU8sQ0FBQztjQUFFRixRQUFRLEVBQVJBO1lBQVMsQ0FBQyxFQUFFO2NBQ2pERyxVQUFVLEVBQUU7Z0JBQ1JDLElBQUksRUFBRSxDQUFDO2dCQUNQSixRQUFRLEVBQUUsQ0FBQztnQkFDWEssS0FBSyxFQUFFLENBQUM7Z0JBQ1JKLFFBQVEsRUFBRTtjQUNkO1lBQ0osQ0FBQyxDQUFDO1VBQUE7WUFQSUssSUFBSTtZQUFBLGNBU04sQ0FBQ0EsSUFBSTtZQUFBO2NBQUE7Y0FBQTtZQUFBO1lBQUE7WUFBQSxPQUFZVCw4Q0FBTSxDQUFDUyxJQUFJLENBQUNMLFFBQVEsRUFBRUEsUUFBUSxDQUFDO1VBQUE7WUFBQTtVQUFBO1lBQUE7Y0FBQTtjQUFBO1lBQUE7WUFBQSxNQUFTLElBQUlNLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQztVQUFBO1lBQUEsaUNBRWpGO2NBQ0hILElBQUksRUFBRUUsSUFBSSxDQUFDRixJQUFJO2NBQ2ZKLFFBQVEsRUFBRU0sSUFBSSxDQUFDTixRQUFRO2NBQ3ZCSyxLQUFLLEVBQUVDLElBQUksQ0FBQ0Q7WUFDaEIsQ0FBQztVQUFBO1VBQUE7WUFBQTtRQUFBO01BQUE7SUFBQTtFQUFBLENBQ0o7RUFBQTtBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1iYWNrZW5kLy4vc2VydmljZXMvdXNlci5qcz8yZjMzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHZlcmlmeSB9IGZyb20gXCJhcmdvbjJcIjtcclxuaW1wb3J0IGRiIGZyb20gXCIuLi9tb2R1bGVzL2RhdGFiYXNlXCI7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0VXNlckJ5VXNlcm5hbWVBbmRQYXNzd29yZCh1c2VybmFtZSwgcGFzc3dvcmQpIHtcclxuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBkYihcInVzZXJzXCIpLmZpbmRPbmUoeyB1c2VybmFtZSB9LCB7XHJcbiAgICAgICAgcHJvamVjdGlvbjoge1xyXG4gICAgICAgICAgICBuYW1lOiAxLFxyXG4gICAgICAgICAgICB1c2VybmFtZTogMSxcclxuICAgICAgICAgICAgZW1haWw6IDEsXHJcbiAgICAgICAgICAgIHBhc3N3b3JkOiAxXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICBpZiAoIXVzZXIgfHwgIShhd2FpdCB2ZXJpZnkodXNlci5wYXNzd29yZCwgcGFzc3dvcmQpKSkgdGhyb3cgbmV3IEVycm9yKFwiVXNlciBub3QgZm91bmRcIilcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG5hbWU6IHVzZXIubmFtZSxcclxuICAgICAgICB1c2VybmFtZTogdXNlci51c2VybmFtZSxcclxuICAgICAgICBlbWFpbDogdXNlci5lbWFpbFxyXG4gICAgfVxyXG59Il0sIm5hbWVzIjpbInZlcmlmeSIsImRiIiwiZ2V0VXNlckJ5VXNlcm5hbWVBbmRQYXNzd29yZCIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJmaW5kT25lIiwicHJvamVjdGlvbiIsIm5hbWUiLCJlbWFpbCIsInVzZXIiLCJFcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./services/user.js\n");

/***/ }),

/***/ "@crster9600/crster-html":
/*!******************************************!*\
  !*** external "@crster9600/crster-html" ***!
  \******************************************/
/***/ ((module) => {

module.exports = require("@crster9600/crster-html");

/***/ }),

/***/ "argon2":
/*!*************************!*\
  !*** external "argon2" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("argon2");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("body-parser");

/***/ }),

/***/ "dotenv/config":
/*!********************************!*\
  !*** external "dotenv/config" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("dotenv/config");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "passport":
/*!***************************!*\
  !*** external "passport" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("passport");

/***/ }),

/***/ "passport-local":
/*!*********************************!*\
  !*** external "passport-local" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("passport-local");

/***/ }),

/***/ "serve-favicon":
/*!********************************!*\
  !*** external "serve-favicon" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("serve-favicon");

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