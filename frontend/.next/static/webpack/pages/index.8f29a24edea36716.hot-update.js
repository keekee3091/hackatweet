"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/element/HashtagSection.js":
/*!**********************************************!*\
  !*** ./components/element/HashtagSection.js ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_homeElement_HashtagSection_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../styles/homeElement/HashtagSection.module.css */ \"./styles/homeElement/HashtagSection.module.css\");\n/* harmony import */ var _styles_homeElement_HashtagSection_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_homeElement_HashtagSection_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _hashItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hashItem */ \"./components/element/hashItem.js\");\n\n\n\n\nfunction HashtagSection() {\n    var _this = this;\n    var data = [\n        {\n            content: \"test\",\n            numberOfTweets: 3\n        },\n        {\n            content: \"test2\",\n            numberOfTweets: 3\n        },\n        {\n            content: \"test3\",\n            numberOfTweets: 3\n        }\n    ];\n    var hashtags = data.map(function(hash) {\n        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hashItem\", {}, void 0, false, {\n            fileName: \"C:\\\\Users\\\\clemk\\\\OneDrive\\\\Bureau\\\\capsule-hackaton 2\\\\hackatweet-frontend\\\\components\\\\element\\\\HashtagSection.js\",\n            lineNumber: 23,\n            columnNumber: 4\n        }, _this);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_homeElement_HashtagSection_module_css__WEBPACK_IMPORTED_MODULE_3___default().HashtagSection),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n            children: \"hashtag\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\clemk\\\\OneDrive\\\\Bureau\\\\capsule-hackaton 2\\\\hackatweet-frontend\\\\components\\\\element\\\\HashtagSection.js\",\n            lineNumber: 28,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\clemk\\\\OneDrive\\\\Bureau\\\\capsule-hackaton 2\\\\hackatweet-frontend\\\\components\\\\element\\\\HashtagSection.js\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, this);\n}\n_c = HashtagSection;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HashtagSection);\nvar _c;\n$RefreshReg$(_c, \"HashtagSection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2VsZW1lbnQvSGFzaHRhZ1NlY3Rpb24uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUF5QjtBQUMrQztBQUN2QztBQUVoQyxTQUFTRyxjQUFjLEdBQUc7O0lBRXpCLElBQU1DLElBQUksR0FBRztRQUNYO1lBQ0lDLE9BQU8sRUFBRSxNQUFNO1lBQ2ZDLGNBQWMsRUFBRSxDQUFDO1NBQ3BCO1FBQ0Q7WUFDSUQsT0FBTyxFQUFFLE9BQU87WUFDaEJDLGNBQWMsRUFBRSxDQUFDO1NBQ3BCO1FBQ0Q7WUFDSUQsT0FBTyxFQUFFLE9BQU87WUFDaEJDLGNBQWMsRUFBRSxDQUFDO1NBQ3BCO0tBQ0o7SUFFRCxJQUFNQyxRQUFRLEdBQUdILElBQUksQ0FBQ0ksR0FBRyxDQUFDLFNBQUNDLElBQUksRUFBRztzQkFDL0IsOERBQUNQLFVBQVE7Ozs7aUJBQUk7S0FDZixDQUFDO0lBRUEscUJBQ0UsOERBQUNRLEtBQUc7UUFBQ0MsU0FBUyxFQUFFVixxR0FBb0I7a0JBQ2hDLDRFQUFDVyxJQUFFO3NCQUFDLFNBQU87Ozs7O2dCQUFLOzs7OztZQUVkLENBQ1A7Q0FDRjtBQTNCU1QsS0FBQUEsY0FBYztBQTZCeEIsK0RBQWVBLGNBQWMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9lbGVtZW50L0hhc2h0YWdTZWN0aW9uLmpzPzhkYjQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgU3R5bGUgZnJvbSAnLi8uLi8uLi9zdHlsZXMvaG9tZUVsZW1lbnQvSGFzaHRhZ1NlY3Rpb24ubW9kdWxlLmNzcydcclxuaW1wb3J0IGhhc2hJdGVtIGZyb20gJy4vaGFzaEl0ZW0nXHJcblxyXG4gZnVuY3Rpb24gSGFzaHRhZ1NlY3Rpb24oKSB7XHJcbiAgXHJcbiAgY29uc3QgZGF0YSA9IFtcclxuICAgIHtcclxuICAgICAgICBjb250ZW50OiAndGVzdCcsXHJcbiAgICAgICAgbnVtYmVyT2ZUd2VldHM6IDNcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgY29udGVudDogJ3Rlc3QyJyxcclxuICAgICAgICBudW1iZXJPZlR3ZWV0czogM1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBjb250ZW50OiAndGVzdDMnLFxyXG4gICAgICAgIG51bWJlck9mVHdlZXRzOiAzXHJcbiAgICB9XHJcbl1cclxuXHJcbmNvbnN0IGhhc2h0YWdzID0gZGF0YS5tYXAoKGhhc2gpPT57XHJcbiAgIDxoYXNoSXRlbSAgLz5cclxufSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5IYXNodGFnU2VjdGlvbn0+XHJcbiAgICAgICAgPGgyPmhhc2h0YWc8L2gyPlxyXG5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGFzaHRhZ1NlY3Rpb24iXSwibmFtZXMiOlsiUmVhY3QiLCJTdHlsZSIsImhhc2hJdGVtIiwiSGFzaHRhZ1NlY3Rpb24iLCJkYXRhIiwiY29udGVudCIsIm51bWJlck9mVHdlZXRzIiwiaGFzaHRhZ3MiLCJtYXAiLCJoYXNoIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/element/HashtagSection.js\n");

/***/ })

});