/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../reducers/user */ \"./reducers/user.js\");\n/* harmony import */ var _reducers_tweets__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../reducers/tweets */ \"./reducers/tweets.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! redux-persist */ \"redux-persist\");\n/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(redux_persist__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! redux-persist/integration/react */ \"redux-persist/integration/react\");\n/* harmony import */ var redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! redux-persist/lib/storage */ \"redux-persist/lib/storage\");\n/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_9__);\n\n\n\n\n\n\n\n\n\n\nconst reducers = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_9__.combineReducers)({\n    User: _reducers_user__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n    Tweets: _reducers_tweets__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n});\nconst persistConfig = {\n    key: \"applicationName\",\n    storage: (redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_8___default())\n};\nconst store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_9__.configureStore)({\n    reducer: (0,redux_persist__WEBPACK_IMPORTED_MODULE_6__.persistReducer)(persistConfig, reducers),\n    middleware: (getDefaultMiddleware)=>getDefaultMiddleware({\n            serializableCheck: false\n        })\n});\nconst persistor = (0,redux_persist__WEBPACK_IMPORTED_MODULE_6__.persistStore)(store);\nfunction App({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_5__.Provider, {\n            store: store,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_7__.PersistGate, {\n                persistor: persistor,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                            children: \"Next.js App\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\keena\\\\Desktop\\\\Projects\\\\hackatweet\\\\frontend\\\\pages\\\\_app.js\",\n                            lineNumber: 31,\n                            columnNumber: 9\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\keena\\\\Desktop\\\\Projects\\\\hackatweet\\\\frontend\\\\pages\\\\_app.js\",\n                        lineNumber: 30,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                        ...pageProps\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\keena\\\\Desktop\\\\Projects\\\\hackatweet\\\\frontend\\\\pages\\\\_app.js\",\n                        lineNumber: 33,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\keena\\\\Desktop\\\\Projects\\\\hackatweet\\\\frontend\\\\pages\\\\_app.js\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\keena\\\\Desktop\\\\Projects\\\\hackatweet\\\\frontend\\\\pages\\\\_app.js\",\n            lineNumber: 28,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUErQjtBQUNGO0FBQ1E7QUFDSTtBQUVGO0FBQ3NCO0FBQ0M7QUFDZDtBQUNtQjtBQUVuRSxNQUFNVSxRQUFRLEdBQUdGLGlFQUFlLENBQUM7SUFBRVAsSUFBSTtJQUFFQyxNQUFNO0NBQUUsQ0FBQztBQUVsRCxNQUFNUyxhQUFhLEdBQUc7SUFBRUMsR0FBRyxFQUFFLGlCQUFpQjtJQUFFTCxPQUFPO0NBQUU7QUFFekQsTUFBTU0sS0FBSyxHQUFHSixnRUFBYyxDQUFDO0lBQzNCSyxPQUFPLEVBQUVULDZEQUFjLENBQUNNLGFBQWEsRUFBRUQsUUFBUSxDQUFDO0lBQ2hESyxVQUFVLEVBQUUsQ0FBQ0Msb0JBQW9CLEdBQUtBLG9CQUFvQixDQUFDO1lBQUVDLGlCQUFpQixFQUFFLEtBQUs7U0FBRSxDQUFDO0NBQ3hGLENBQUM7QUFFSCxNQUFNQyxTQUFTLEdBQUdkLDJEQUFZLENBQUNTLEtBQUssQ0FBQztBQUlyQyxTQUFTTSxHQUFHLENBQUMsRUFBRUMsU0FBUyxHQUFFQyxTQUFTLEdBQUUsRUFBRTtJQUNyQyxxQkFDRTtrQkFDRSw0RUFBQ2xCLGlEQUFRO1lBQUNVLEtBQUssRUFBRUEsS0FBSztzQkFDdEIsNEVBQUNQLHdFQUFXO2dCQUFDWSxTQUFTLEVBQUVBLFNBQVM7O2tDQUNqQyw4REFBQ2xCLGtEQUFJO2tDQUNILDRFQUFDc0IsT0FBSztzQ0FBQyxhQUFXOzs7OztnQ0FBUTs7Ozs7NEJBQ3JCO2tDQUNQLDhEQUFDRixTQUFTO3dCQUFFLEdBQUdDLFNBQVM7Ozs7OzRCQUFJOzs7Ozs7b0JBQ2Q7Ozs7O2dCQUNIO3FCQUNWLENBQ0g7Q0FDSDtBQUVELGlFQUFlRixHQUFHLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtdGVtcGxhdGUvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgVXNlciBmcm9tICcuLy4uL3JlZHVjZXJzL3VzZXInXHJcbmltcG9ydCBUd2VldHMgZnJvbSAnLi8uLi9yZWR1Y2Vycy90d2VldHMnXHJcblxyXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgcGVyc2lzdFN0b3JlLCBwZXJzaXN0UmVkdWNlciB9IGZyb20gJ3JlZHV4LXBlcnNpc3QnO1xyXG5pbXBvcnQgeyBQZXJzaXN0R2F0ZSB9IGZyb20gJ3JlZHV4LXBlcnNpc3QvaW50ZWdyYXRpb24vcmVhY3QnO1xyXG5pbXBvcnQgc3RvcmFnZSBmcm9tICdyZWR1eC1wZXJzaXN0L2xpYi9zdG9yYWdlJztcclxuaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzLCBjb25maWd1cmVTdG9yZSB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnO1xyXG5cclxuY29uc3QgcmVkdWNlcnMgPSBjb21iaW5lUmVkdWNlcnMoeyBVc2VyLCBUd2VldHMgfSk7XHJcblxyXG5jb25zdCBwZXJzaXN0Q29uZmlnID0geyBrZXk6ICdhcHBsaWNhdGlvbk5hbWUnLCBzdG9yYWdlIH07XHJcblxyXG5jb25zdCBzdG9yZSA9IGNvbmZpZ3VyZVN0b3JlKHtcclxuICByZWR1Y2VyOiBwZXJzaXN0UmVkdWNlcihwZXJzaXN0Q29uZmlnLCByZWR1Y2VycyksXHJcbiAgbWlkZGxld2FyZTogKGdldERlZmF1bHRNaWRkbGV3YXJlKSA9PiBnZXREZWZhdWx0TWlkZGxld2FyZSh7IHNlcmlhbGl6YWJsZUNoZWNrOiBmYWxzZSB9KSxcclxuIH0pO1xyXG5cclxuY29uc3QgcGVyc2lzdG9yID0gcGVyc2lzdFN0b3JlKHN0b3JlKTtcclxuXHJcblxyXG5cclxuZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cclxuICAgICAgPFBlcnNpc3RHYXRlIHBlcnNpc3Rvcj17cGVyc2lzdG9yfT5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPk5leHQuanMgQXBwPC90aXRsZT5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgIDwvUGVyc2lzdEdhdGU+XHJcbiAgICAgIDwvUHJvdmlkZXI+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHA7XHJcbiJdLCJuYW1lcyI6WyJIZWFkIiwiVXNlciIsIlR3ZWV0cyIsIlByb3ZpZGVyIiwicGVyc2lzdFN0b3JlIiwicGVyc2lzdFJlZHVjZXIiLCJQZXJzaXN0R2F0ZSIsInN0b3JhZ2UiLCJjb21iaW5lUmVkdWNlcnMiLCJjb25maWd1cmVTdG9yZSIsInJlZHVjZXJzIiwicGVyc2lzdENvbmZpZyIsImtleSIsInN0b3JlIiwicmVkdWNlciIsIm1pZGRsZXdhcmUiLCJnZXREZWZhdWx0TWlkZGxld2FyZSIsInNlcmlhbGl6YWJsZUNoZWNrIiwicGVyc2lzdG9yIiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwidGl0bGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./reducers/tweets.js":
/*!****************************!*\
  !*** ./reducers/tweets.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addTweet\": () => (/* binding */ addTweet),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"deleteTweet\": () => (/* binding */ deleteTweet),\n/* harmony export */   \"initTweets\": () => (/* binding */ initTweets),\n/* harmony export */   \"tweetTricks\": () => (/* binding */ tweetTricks)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n\nconst initialState = {\n    allTweets: []\n};\nconst tweetTricks = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"tweetTricks\",\n    initialState,\n    reducers: {\n        initTweets (state, action) {\n            state.allTweets = action.payload;\n        },\n        deleteTweet (state, action) {\n            state.allTweets.filter((tweet)=>tweet.action.payload\n            );\n        },\n        addTweet (state, action) {\n            state.allTweets.push(action.payload);\n        }\n    }\n});\nconst { deleteTweet , addTweet , initTweets  } = tweetTricks.actions;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tweetTricks.reducer);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWR1Y2Vycy90d2VldHMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUErQztBQUUvQyxNQUFNQyxZQUFZLEdBQUc7SUFDcEJDLFNBQVMsRUFBRSxFQUFFO0NBQ2I7QUFFTSxNQUFNQyxXQUFXLEdBQUdILDZEQUFXLENBQUM7SUFDdENJLElBQUksRUFBRSxhQUFhO0lBQ25CSCxZQUFZO0lBQ1pJLFFBQVEsRUFBRTtRQUNUQyxVQUFVLEVBQUNDLEtBQUssRUFBRUMsTUFBTSxFQUFDO1lBQ2hCRCxLQUFLLENBQUNMLFNBQVMsR0FBR00sTUFBTSxDQUFDQyxPQUFPO1NBQ2xDO1FBQ1BDLFdBQVcsRUFBQ0gsS0FBSyxFQUFFQyxNQUFNLEVBQUM7WUFDakJELEtBQUssQ0FBQ0wsU0FBUyxDQUFDUyxNQUFNLENBQUMsQ0FBQ0MsS0FBSyxHQUFHQSxLQUFLLENBQUNKLE1BQU0sQ0FBQ0MsT0FBTztZQUFBLENBQUM7U0FDdkQ7UUFDUEksUUFBUSxFQUFDTixLQUFLLEVBQUVDLE1BQU0sRUFBQztZQUNkRCxLQUFLLENBQUNMLFNBQVMsQ0FBQ1ksSUFBSSxDQUFDTixNQUFNLENBQUNDLE9BQU8sQ0FBQztTQUN0QztLQUNQO0NBQ0QsQ0FBQyxDQUFDO0FBRUksTUFBTSxFQUFFQyxXQUFXLEdBQUVHLFFBQVEsR0FBRVAsVUFBVSxHQUFFLEdBQUdILFdBQVcsQ0FBQ1ksT0FBTyxDQUFDO0FBQ3pFLGlFQUFlWixXQUFXLENBQUNhLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy10ZW1wbGF0ZS8uL3JlZHVjZXJzL3R3ZWV0cy5qcz9kMTI1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNsaWNlIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCc7XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcblx0YWxsVHdlZXRzOiBbXSxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB0d2VldFRyaWNrcyA9IGNyZWF0ZVNsaWNlKHtcclxuXHRuYW1lOiAndHdlZXRUcmlja3MnLFxyXG5cdGluaXRpYWxTdGF0ZSxcclxuXHRyZWR1Y2Vyczoge1xyXG5cdFx0aW5pdFR3ZWV0cyhzdGF0ZSwgYWN0aW9uKXtcclxuICAgICAgICAgICBzdGF0ZS5hbGxUd2VldHMgPSBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICAgIH0sXHJcblx0XHRkZWxldGVUd2VldChzdGF0ZSwgYWN0aW9uKXtcclxuICAgICAgICAgICBzdGF0ZS5hbGxUd2VldHMuZmlsdGVyKCh0d2VldCk9PnR3ZWV0LmFjdGlvbi5wYXlsb2FkKVxyXG4gICAgICAgIH0sXHJcblx0XHRhZGRUd2VldChzdGF0ZSwgYWN0aW9uKXtcclxuICAgICAgICAgICBzdGF0ZS5hbGxUd2VldHMucHVzaChhY3Rpb24ucGF5bG9hZClcclxuICAgICAgICB9LFxyXG5cdH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHsgZGVsZXRlVHdlZXQsIGFkZFR3ZWV0LCBpbml0VHdlZXRzIH0gPSB0d2VldFRyaWNrcy5hY3Rpb25zO1xyXG5leHBvcnQgZGVmYXVsdCB0d2VldFRyaWNrcy5yZWR1Y2VyO1xyXG4iXSwibmFtZXMiOlsiY3JlYXRlU2xpY2UiLCJpbml0aWFsU3RhdGUiLCJhbGxUd2VldHMiLCJ0d2VldFRyaWNrcyIsIm5hbWUiLCJyZWR1Y2VycyIsImluaXRUd2VldHMiLCJzdGF0ZSIsImFjdGlvbiIsInBheWxvYWQiLCJkZWxldGVUd2VldCIsImZpbHRlciIsInR3ZWV0IiwiYWRkVHdlZXQiLCJwdXNoIiwiYWN0aW9ucyIsInJlZHVjZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./reducers/tweets.js\n");

/***/ }),

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"User\": () => (/* binding */ User),\n/* harmony export */   \"connectProfile\": () => (/* binding */ connectProfile),\n/* harmony export */   \"connectToken\": () => (/* binding */ connectToken),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"deleteToken\": () => (/* binding */ deleteToken)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n\nconst initialState = {\n    firstname: null,\n    username: null,\n    token: null\n};\nconst User = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"User\",\n    initialState,\n    reducers: {\n        connectToken (state, action) {\n            state.token = action.payload;\n        },\n        deleteToken (state, action) {\n            state.token = null;\n        },\n        connectProfile (state, action) {\n            state.firstname = action.payload.firstname;\n            state.username = action.payload.username;\n        }\n    }\n});\nconst { connectToken , deleteToken , connectProfile  } = User.actions;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (User.reducer);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWR1Y2Vycy91c2VyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBK0M7QUFFL0MsTUFBTUMsWUFBWSxHQUFHO0lBQ3BCQyxTQUFTLEVBQUUsSUFBSTtJQUNmQyxRQUFRLEVBQUUsSUFBSTtJQUNkQyxLQUFLLEVBQUUsSUFBSTtDQUNYO0FBRU0sTUFBTUMsSUFBSSxHQUFHTCw2REFBVyxDQUFDO0lBQy9CTSxJQUFJLEVBQUUsTUFBTTtJQUNaTCxZQUFZO0lBQ1pNLFFBQVEsRUFBRTtRQUNUQyxZQUFZLEVBQUNDLEtBQUssRUFBRUMsTUFBTSxFQUFFO1lBQzNCRCxLQUFLLENBQUNMLEtBQUssR0FBR00sTUFBTSxDQUFDQyxPQUFPO1NBQzVCO1FBQ0RDLFdBQVcsRUFBQ0gsS0FBSyxFQUFFQyxNQUFNLEVBQUU7WUFDMUJELEtBQUssQ0FBQ0wsS0FBSyxHQUFHLElBQUk7U0FDbEI7UUFDRFMsY0FBYyxFQUFDSixLQUFLLEVBQUVDLE1BQU0sRUFBRTtZQUM3QkQsS0FBSyxDQUFDUCxTQUFTLEdBQUdRLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDVCxTQUFTO1lBQzFDTyxLQUFLLENBQUNOLFFBQVEsR0FBR08sTUFBTSxDQUFDQyxPQUFPLENBQUNSLFFBQVE7U0FDeEM7S0FDRDtDQUNELENBQUMsQ0FBQztBQUVJLE1BQU0sRUFBRUssWUFBWSxHQUFFSSxXQUFXLEdBQUVDLGNBQWMsR0FBRSxHQUFHUixJQUFJLENBQUNTLE9BQU8sQ0FBQztBQUMxRSxpRUFBZVQsSUFBSSxDQUFDVSxPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtdGVtcGxhdGUvLi9yZWR1Y2Vycy91c2VyLmpzPzBkZjQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2xpY2UgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0JztcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuXHRmaXJzdG5hbWU6IG51bGwsXHJcblx0dXNlcm5hbWU6IG51bGwsXHJcblx0dG9rZW46IG51bGwsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgVXNlciA9IGNyZWF0ZVNsaWNlKHtcclxuXHRuYW1lOiAnVXNlcicsXHJcblx0aW5pdGlhbFN0YXRlLFxyXG5cdHJlZHVjZXJzOiB7XHJcblx0XHRjb25uZWN0VG9rZW4oc3RhdGUsIGFjdGlvbikge1xyXG5cdFx0XHRzdGF0ZS50b2tlbiA9IGFjdGlvbi5wYXlsb2FkXHJcblx0XHR9LFxyXG5cdFx0ZGVsZXRlVG9rZW4oc3RhdGUsIGFjdGlvbikge1xyXG5cdFx0XHRzdGF0ZS50b2tlbiA9IG51bGxcclxuXHRcdH0sXHJcblx0XHRjb25uZWN0UHJvZmlsZShzdGF0ZSwgYWN0aW9uKSB7XHJcblx0XHRcdHN0YXRlLmZpcnN0bmFtZSA9IGFjdGlvbi5wYXlsb2FkLmZpcnN0bmFtZVxyXG5cdFx0XHRzdGF0ZS51c2VybmFtZSA9IGFjdGlvbi5wYXlsb2FkLnVzZXJuYW1lXHJcblx0XHR9XHJcblx0fSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgeyBjb25uZWN0VG9rZW4sIGRlbGV0ZVRva2VuLCBjb25uZWN0UHJvZmlsZSB9ID0gVXNlci5hY3Rpb25zO1xyXG5leHBvcnQgZGVmYXVsdCBVc2VyLnJlZHVjZXI7XHJcbiJdLCJuYW1lcyI6WyJjcmVhdGVTbGljZSIsImluaXRpYWxTdGF0ZSIsImZpcnN0bmFtZSIsInVzZXJuYW1lIiwidG9rZW4iLCJVc2VyIiwibmFtZSIsInJlZHVjZXJzIiwiY29ubmVjdFRva2VuIiwic3RhdGUiLCJhY3Rpb24iLCJwYXlsb2FkIiwiZGVsZXRlVG9rZW4iLCJjb25uZWN0UHJvZmlsZSIsImFjdGlvbnMiLCJyZWR1Y2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./reducers/user.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "redux-persist":
/*!********************************!*\
  !*** external "redux-persist" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux-persist");

/***/ }),

/***/ "redux-persist/integration/react":
/*!**************************************************!*\
  !*** external "redux-persist/integration/react" ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux-persist/integration/react");

/***/ }),

/***/ "redux-persist/lib/storage":
/*!********************************************!*\
  !*** external "redux-persist/lib/storage" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux-persist/lib/storage");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();