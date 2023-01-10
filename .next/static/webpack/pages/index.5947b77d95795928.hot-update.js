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

/***/ "./pages/PortTabs.js":
/*!***************************!*\
  !*** ./pages/PortTabs.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ PortTabs; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_tailwind_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-tailwind/react */ \"./node_modules/@material-tailwind/react/index.js\");\n/* harmony import */ var _material_tailwind_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_tailwind_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _public_cssa_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/cssa.png */ \"./public/cssa.png\");\n/* harmony import */ var _public_lyrical_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../public/lyrical.png */ \"./public/lyrical.png\");\n/* harmony import */ var _public_mcgpainting_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../public/mcgpainting.png */ \"./public/mcgpainting.png\");\n/* harmony import */ var _public_expresso_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../public/expresso.png */ \"./public/expresso.png\");\n/* harmony import */ var _public_airx_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../public/airx.png */ \"./public/airx.png\");\n/* harmony import */ var _public_moviewatching_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../public/moviewatching.png */ \"./public/moviewatching.png\");\n\n\n\n\n\n\n\n\n\nfunction PortTabs() {\n    const data = [\n        {\n            label: \"CSSA\",\n            value: \"cssa\",\n            desc: \"website for the CogSci Student Association\",\n            title: \"CSSA Website\",\n            image: _public_cssa_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n            link: \"https://cssa.berkeley.edu/\",\n            linktitle: \"link to website\",\n            tools: \"HTML, CSS, Javascript, Github\",\n            goal: \"create new website for CSSA that encapsulates modern design and easily accessible information. I also changed publishing from filezilla to github to make future changes easier for incoming tech positions.\"\n        },\n        {\n            label: \"Discover-Spotify\",\n            value: \"discoverspotify\",\n            desc: \"design and implmenetation of NextJS web app using Spotify API\",\n            title: \"Discover Spotify App\",\n            image: _public_cssa_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n            link: \"https://discoverspotify.vercel.app/login\",\n            linktitle: \"link to website\",\n            tools: \"NextJS, NextAuth, tailwindcss, Recoil\",\n            goal: \"create web app that uses Spotify API and authentication to generate novel playlists based on a user's listening history\"\n        },\n        {\n            label: \"Lyrical\",\n            value: \"lyrical\",\n            desc: \"ideation, design, and development of lyric analysis app using AI based APIs\",\n            title: \"Lyrical App\",\n            image: _public_lyrical_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n            link: \"https://github.com/hannahmcg/lyricalapp\",\n            linktitle: \"link to project\",\n            tools: \"Javascript, React.js, APIs\",\n            goal: \"create an application at the intersection of music and AI using react and API calls. The design was made simple, clean, and functional.\"\n        },\n        {\n            label: \"McGowan Painting\",\n            value: \"mcgowan painting\",\n            desc: \"website for McGowan Painting & Repairs\",\n            title: \"McGowan Painting Website\",\n            image: _public_mcgpainting_png__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n            link: \"https://kevinmcgowanpainting.com/\",\n            linktitle: \"link to website\",\n            tools: \"HTML, CSS, Javascript, Google hosting\",\n            goal: \"create website for a painting contractor that was simple and whose main function was to have contact info, basic information, and 'a page that shows up on google.'\"\n        },\n        {\n            label: \"Expresso\",\n            value: \"expresso\",\n            desc: \"ideation and design of desktop organization app\",\n            title: \"Expresso Desktop App\",\n            image: _public_expresso_png__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n            link: \"https://www.figma.com/file/dPO0cZAzsn9VM7MQXgEqor/BL-HiFi-Prototype?node-id=753%3A805&t=kCtzQLeYsxfvlaUd-0\",\n            linktitle: \"link to project\",\n            tools: \"Figma, Google Forms\",\n            goal: \"primary focus as the tech and creative role on the team was to gather user data and experience to develop and design prototypes of the product: a digital platform that aids young professionals in organization and and planning.\"\n        },\n        {\n            label: \"Airx\",\n            value: \"airx\",\n            desc: \"UI/UX design mockup of Airbnb inspired app\",\n            title: \"Adobe Workshops\",\n            image: _public_airx_png__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n            link: \"https://xd.adobe.com/view/5d34e04b-f3bd-49c0-601b-2add2e156109-2b05/\",\n            linktitle: \"link to prototype\",\n            tools: \"Adobe XD\",\n            goal: \"design travelling app with team that allows users to explore places to stay and have profiles. We added features such as curated music playlists and an interactive map. We created a functional prototype for this product which you can check out below.\"\n        },\n        {\n            label: \"Moviewatching\",\n            value: \"moviewatching\",\n            desc: \"UI/UX design mockup of Netflix inspired app\",\n            title: \"Adobe Workshops\",\n            image: _public_moviewatching_png__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n            link: \"https://xd.adobe.com/view/cf4d7d2e-873c-4ad9-8da6-caf02027157f-9a1e/?fullscreen\",\n            linktitle: \"link to prototype\",\n            tools: \"Adobe XD\",\n            goal: \"design entertainment app with team that allows users to explore shows and movies. We added social aspects with profiles and friending features as well as scheduled group screenings. We created a functional prototype for this product which you can check out below.\"\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_tailwind_react__WEBPACK_IMPORTED_MODULE_1__.Tabs, {\n        value: \"html\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_tailwind_react__WEBPACK_IMPORTED_MODULE_1__.TabsHeader, {\n                className: \"dark:bg-slate-800 flex flex-col md:flex-row\",\n                children: data.map((param)=>/*#__PURE__*/ {\n                    let { label , value  } = param;\n                    return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_tailwind_react__WEBPACK_IMPORTED_MODULE_1__.Tab, {\n                        value: value,\n                        className: \"dark:text-slate-400 hover:blue-400 text-sm text-clip md:text-base lg:text-base\",\n                        children: label\n                    }, value, false, {\n                        fileName: \"/Users/hannahmcgowan/Desktop/myweb/pages/PortTabs.js\",\n                        lineNumber: 111,\n                        columnNumber: 13\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/hannahmcgowan/Desktop/myweb/pages/PortTabs.js\",\n                lineNumber: 109,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_tailwind_react__WEBPACK_IMPORTED_MODULE_1__.TabsBody, {\n                animate: {\n                    mount: {\n                        y: 0\n                    },\n                    unmount: {\n                        y: 250\n                    }\n                },\n                children: [\n                    data.map((param)=>/*#__PURE__*/ {\n                        let { value , desc  } = param;\n                        return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_tailwind_react__WEBPACK_IMPORTED_MODULE_1__.TabPanel, {\n                            value: value,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"text-slate-800 dark:text-slate-400 text-center text-lg md:text-2xl lg:text-2xl pt-10\",\n                                children: desc\n                            }, void 0, false, {\n                                fileName: \"/Users/hannahmcgowan/Desktop/myweb/pages/PortTabs.js\",\n                                lineNumber: 122,\n                                columnNumber: 15\n                            }, this)\n                        }, value, false, {\n                            fileName: \"/Users/hannahmcgowan/Desktop/myweb/pages/PortTabs.js\",\n                            lineNumber: 121,\n                            columnNumber: 13\n                        }, this);\n                    }),\n                    data.map((param)=>/*#__PURE__*/ {\n                        let { value , image , link , linktitle , tools , goal , note , title  } = param;\n                        return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_tailwind_react__WEBPACK_IMPORTED_MODULE_1__.TabPanel, {\n                            value: value,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"text-center font-bold shadow-lg dark:shadow-blue-500 p-10 rounded-xl md:flex lg:flex\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"md:w-1/2 lg:w-1/2 mx-auto lg:pr-8 py-10 text-slate-800 dark:text-slate-400\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                className: \"pb-5 dark:text-slate-300\",\n                                                children: title\n                                            }, void 0, false, {\n                                                fileName: \"/Users/hannahmcgowan/Desktop/myweb/pages/PortTabs.js\",\n                                                lineNumber: 130,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"font-normal pb-3\",\n                                                children: [\n                                                    \"tools: \",\n                                                    tools\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/hannahmcgowan/Desktop/myweb/pages/PortTabs.js\",\n                                                lineNumber: 131,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"font-light sm:px-1 lg:px-8 pb-5\",\n                                                children: [\n                                                    \"goal: \",\n                                                    goal\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/hannahmcgowan/Desktop/myweb/pages/PortTabs.js\",\n                                                lineNumber: 132,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                href: link,\n                                                className: \"underline font-medium\",\n                                                target: \"_blank\",\n                                                children: linktitle\n                                            }, void 0, false, {\n                                                fileName: \"/Users/hannahmcgowan/Desktop/myweb/pages/PortTabs.js\",\n                                                lineNumber: 133,\n                                                columnNumber: 19\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/hannahmcgowan/Desktop/myweb/pages/PortTabs.js\",\n                                        lineNumber: 129,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"md:w-1/2 lg:w-1/2\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                            src: image,\n                                            width: \"50%\",\n                                            height: \"50%\",\n                                            className: \"mx-auto rounded-xl\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/hannahmcgowan/Desktop/myweb/pages/PortTabs.js\",\n                                            lineNumber: 136,\n                                            columnNumber: 19\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/hannahmcgowan/Desktop/myweb/pages/PortTabs.js\",\n                                        lineNumber: 135,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/hannahmcgowan/Desktop/myweb/pages/PortTabs.js\",\n                                lineNumber: 128,\n                                columnNumber: 15\n                            }, this)\n                        }, value, false, {\n                            fileName: \"/Users/hannahmcgowan/Desktop/myweb/pages/PortTabs.js\",\n                            lineNumber: 127,\n                            columnNumber: 13\n                        }, this);\n                    })\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/hannahmcgowan/Desktop/myweb/pages/PortTabs.js\",\n                lineNumber: 116,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/hannahmcgowan/Desktop/myweb/pages/PortTabs.js\",\n        lineNumber: 108,\n        columnNumber: 7\n    }, this);\n}\n_c = PortTabs;\nvar _c;\n$RefreshReg$(_c, \"PortTabs\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q3RELDhEQUFDWTtnREFBRUMsTUFBTWhCO2dEQUFNSSxXQUFVO2dEQUF3QmEsUUFBTzswREFBVWhCOzs7Ozs7Ozs7Ozs7a0RBRXBFLDhEQUFDVzt3Q0FBSVIsV0FBVTtrREFDYiw0RUFBQ2xCLG1EQUFLQTs0Q0FBQ2dDLEtBQUtuQjs0Q0FBT29CLE9BQU87NENBQU9DLFFBQVE7NENBQU9oQixXQUFVOzs7Ozs7Ozs7Ozs7Ozs7OzsyQkFUakRSOzs7OztvQkFZTDs7Ozs7Ozs7Ozs7OztBQU1wQixDQUFDO0tBaEl1QkgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvUG9ydFRhYnMuanM/NzAwYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIFRhYnMsXG4gICAgVGFic0hlYWRlcixcbiAgICBUYWJzQm9keSxcbiAgICBUYWIsXG4gICAgVGFiUGFuZWwsXG4gIH0gZnJvbSBcIkBtYXRlcmlhbC10YWlsd2luZC9yZWFjdFwiO1xuICBpbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG4gIGltcG9ydCBjc3NhaW1nIGZyb20gJy4uL3B1YmxpYy9jc3NhLnBuZyc7XG4gIGltcG9ydCBseXJpY2FsaW1nIGZyb20gJy4uL3B1YmxpYy9seXJpY2FsLnBuZyc7XG4gIGltcG9ydCBtY2dwYWludGluZ2ltZyBmcm9tICcuLi9wdWJsaWMvbWNncGFpbnRpbmcucG5nJztcbiAgaW1wb3J0IGV4cHJlc3NvaW1nIGZyb20gJy4uL3B1YmxpYy9leHByZXNzby5wbmcnO1xuICBpbXBvcnQgYWlyeGltZyBmcm9tICcuLi9wdWJsaWMvYWlyeC5wbmcnO1xuICBpbXBvcnQgbW92aWV3YXRjaGluZ2ltZyBmcm9tICcuLi9wdWJsaWMvbW92aWV3YXRjaGluZy5wbmcnO1xuXG4gICBcbiAgZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9ydFRhYnMoKSB7XG4gICAgY29uc3QgZGF0YSA9IFtcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6IFwiQ1NTQVwiLFxuICAgICAgICB2YWx1ZTogXCJjc3NhXCIsXG4gICAgICAgIGRlc2M6IFwid2Vic2l0ZSBmb3IgdGhlIENvZ1NjaSBTdHVkZW50IEFzc29jaWF0aW9uXCIsXG4gICAgICAgIHRpdGxlOiBcIkNTU0EgV2Vic2l0ZVwiLFxuICAgICAgICBpbWFnZTogY3NzYWltZyxcbiAgICAgICAgbGluazogXCJodHRwczovL2Nzc2EuYmVya2VsZXkuZWR1L1wiLFxuICAgICAgICBsaW5rdGl0bGU6IFwibGluayB0byB3ZWJzaXRlXCIsXG4gICAgICAgIHRvb2xzOiBcIkhUTUwsIENTUywgSmF2YXNjcmlwdCwgR2l0aHViXCIsXG4gICAgICAgIGdvYWw6IFwiY3JlYXRlIG5ldyB3ZWJzaXRlIGZvciBDU1NBIHRoYXQgZW5jYXBzdWxhdGVzIG1vZGVybiBkZXNpZ24gYW5kIGVhc2lseSBhY2Nlc3NpYmxlIGluZm9ybWF0aW9uLiBJIGFsc28gY2hhbmdlZCBwdWJsaXNoaW5nIGZyb20gZmlsZXppbGxhIHRvIGdpdGh1YiB0byBtYWtlIGZ1dHVyZSBjaGFuZ2VzIGVhc2llciBmb3IgaW5jb21pbmcgdGVjaCBwb3NpdGlvbnMuXCIsXG4gICAgICB9LFxuXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiBcIkRpc2NvdmVyLVNwb3RpZnlcIixcbiAgICAgICAgdmFsdWU6IFwiZGlzY292ZXJzcG90aWZ5XCIsXG4gICAgICAgIGRlc2M6IFwiZGVzaWduIGFuZCBpbXBsbWVuZXRhdGlvbiBvZiBOZXh0SlMgd2ViIGFwcCB1c2luZyBTcG90aWZ5IEFQSVwiLFxuICAgICAgICB0aXRsZTogXCJEaXNjb3ZlciBTcG90aWZ5IEFwcFwiLFxuICAgICAgICBpbWFnZTogY3NzYWltZyxcbiAgICAgICAgbGluazogXCJodHRwczovL2Rpc2NvdmVyc3BvdGlmeS52ZXJjZWwuYXBwL2xvZ2luXCIsXG4gICAgICAgIGxpbmt0aXRsZTogXCJsaW5rIHRvIHdlYnNpdGVcIixcbiAgICAgICAgdG9vbHM6IFwiTmV4dEpTLCBOZXh0QXV0aCwgdGFpbHdpbmRjc3MsIFJlY29pbFwiLFxuICAgICAgICBnb2FsOiBcImNyZWF0ZSB3ZWIgYXBwIHRoYXQgdXNlcyBTcG90aWZ5IEFQSSBhbmQgYXV0aGVudGljYXRpb24gdG8gZ2VuZXJhdGUgbm92ZWwgcGxheWxpc3RzIGJhc2VkIG9uIGEgdXNlcidzIGxpc3RlbmluZyBoaXN0b3J5XCIsXG4gICAgICB9LFxuXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiBcIkx5cmljYWxcIixcbiAgICAgICAgdmFsdWU6IFwibHlyaWNhbFwiLFxuICAgICAgICBkZXNjOiBcImlkZWF0aW9uLCBkZXNpZ24sIGFuZCBkZXZlbG9wbWVudCBvZiBseXJpYyBhbmFseXNpcyBhcHAgdXNpbmcgQUkgYmFzZWQgQVBJc1wiLFxuICAgICAgICB0aXRsZTogXCJMeXJpY2FsIEFwcFwiLFxuICAgICAgICBpbWFnZTogbHlyaWNhbGltZyxcbiAgICAgICAgbGluazogXCJodHRwczovL2dpdGh1Yi5jb20vaGFubmFobWNnL2x5cmljYWxhcHBcIixcbiAgICAgICAgbGlua3RpdGxlOiBcImxpbmsgdG8gcHJvamVjdFwiLFxuICAgICAgICB0b29sczogXCJKYXZhc2NyaXB0LCBSZWFjdC5qcywgQVBJc1wiLFxuICAgICAgICBnb2FsOiBcImNyZWF0ZSBhbiBhcHBsaWNhdGlvbiBhdCB0aGUgaW50ZXJzZWN0aW9uIG9mIG11c2ljIGFuZCBBSSB1c2luZyByZWFjdCBhbmQgQVBJIGNhbGxzLiBUaGUgZGVzaWduIHdhcyBtYWRlIHNpbXBsZSwgY2xlYW4sIGFuZCBmdW5jdGlvbmFsLlwiLFxuICAgICAgfSxcbiAgICAgIFxuICAgICAge1xuICAgICAgICBsYWJlbDogXCJNY0dvd2FuIFBhaW50aW5nXCIsXG4gICAgICAgIHZhbHVlOiBcIm1jZ293YW4gcGFpbnRpbmdcIixcbiAgICAgICAgZGVzYzogXCJ3ZWJzaXRlIGZvciBNY0dvd2FuIFBhaW50aW5nICYgUmVwYWlyc1wiLFxuICAgICAgICB0aXRsZTogXCJNY0dvd2FuIFBhaW50aW5nIFdlYnNpdGVcIixcbiAgICAgICAgaW1hZ2U6IG1jZ3BhaW50aW5naW1nLFxuICAgICAgICBsaW5rOiBcImh0dHBzOi8va2V2aW5tY2dvd2FucGFpbnRpbmcuY29tL1wiLFxuICAgICAgICBsaW5rdGl0bGU6IFwibGluayB0byB3ZWJzaXRlXCIsXG4gICAgICAgIHRvb2xzOiBcIkhUTUwsIENTUywgSmF2YXNjcmlwdCwgR29vZ2xlIGhvc3RpbmdcIixcbiAgICAgICAgZ29hbDogXCJjcmVhdGUgd2Vic2l0ZSBmb3IgYSBwYWludGluZyBjb250cmFjdG9yIHRoYXQgd2FzIHNpbXBsZSBhbmQgd2hvc2UgbWFpbiBmdW5jdGlvbiB3YXMgdG8gaGF2ZSBjb250YWN0IGluZm8sIGJhc2ljIGluZm9ybWF0aW9uLCBhbmQgJ2EgcGFnZSB0aGF0IHNob3dzIHVwIG9uIGdvb2dsZS4nXCIsXG4gICAgICB9LFxuICAgXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiBcIkV4cHJlc3NvXCIsXG4gICAgICAgIHZhbHVlOiBcImV4cHJlc3NvXCIsXG4gICAgICAgIGRlc2M6IFwiaWRlYXRpb24gYW5kIGRlc2lnbiBvZiBkZXNrdG9wIG9yZ2FuaXphdGlvbiBhcHBcIixcbiAgICAgICAgdGl0bGU6IFwiRXhwcmVzc28gRGVza3RvcCBBcHBcIixcbiAgICAgICAgaW1hZ2U6IGV4cHJlc3NvaW1nLFxuICAgICAgICBsaW5rOiBcImh0dHBzOi8vd3d3LmZpZ21hLmNvbS9maWxlL2RQTzBjWkF6c245Vk03TVFYZ0Vxb3IvQkwtSGlGaS1Qcm90b3R5cGU/bm9kZS1pZD03NTMlM0E4MDUmdD1rQ3R6UUxlWXN4ZnZsYVVkLTBcIixcbiAgICAgICAgbGlua3RpdGxlOiBcImxpbmsgdG8gcHJvamVjdFwiLFxuICAgICAgICB0b29sczogXCJGaWdtYSwgR29vZ2xlIEZvcm1zXCIsXG4gICAgICAgIGdvYWw6IFwicHJpbWFyeSBmb2N1cyBhcyB0aGUgdGVjaCBhbmQgY3JlYXRpdmUgcm9sZSBvbiB0aGUgdGVhbSB3YXMgdG8gZ2F0aGVyIHVzZXIgZGF0YSBhbmQgZXhwZXJpZW5jZSB0byBkZXZlbG9wIGFuZCBkZXNpZ24gcHJvdG90eXBlcyBvZiB0aGUgcHJvZHVjdDogYSBkaWdpdGFsIHBsYXRmb3JtIHRoYXQgYWlkcyB5b3VuZyBwcm9mZXNzaW9uYWxzIGluIG9yZ2FuaXphdGlvbiBhbmQgYW5kIHBsYW5uaW5nLlwiLFxuICAgICAgfSxcblxuICAgICAge1xuICAgICAgICBsYWJlbDogXCJBaXJ4XCIsXG4gICAgICAgIHZhbHVlOiBcImFpcnhcIixcbiAgICAgICAgZGVzYzogXCJVSS9VWCBkZXNpZ24gbW9ja3VwIG9mIEFpcmJuYiBpbnNwaXJlZCBhcHBcIixcbiAgICAgICAgdGl0bGU6IFwiQWRvYmUgV29ya3Nob3BzXCIsXG4gICAgICAgIGltYWdlOiBhaXJ4aW1nLFxuICAgICAgICBsaW5rOiBcImh0dHBzOi8veGQuYWRvYmUuY29tL3ZpZXcvNWQzNGUwNGItZjNiZC00OWMwLTYwMWItMmFkZDJlMTU2MTA5LTJiMDUvXCIsXG4gICAgICAgIGxpbmt0aXRsZTogXCJsaW5rIHRvIHByb3RvdHlwZVwiLFxuICAgICAgICB0b29sczogXCJBZG9iZSBYRFwiLFxuICAgICAgICBnb2FsOiBcImRlc2lnbiB0cmF2ZWxsaW5nIGFwcCB3aXRoIHRlYW0gdGhhdCBhbGxvd3MgdXNlcnMgdG8gZXhwbG9yZSBwbGFjZXMgdG8gc3RheSBhbmQgaGF2ZSBwcm9maWxlcy4gV2UgYWRkZWQgZmVhdHVyZXMgc3VjaCBhcyBjdXJhdGVkIG11c2ljIHBsYXlsaXN0cyBhbmQgYW4gaW50ZXJhY3RpdmUgbWFwLiBXZSBjcmVhdGVkIGEgZnVuY3Rpb25hbCBwcm90b3R5cGUgZm9yIHRoaXMgcHJvZHVjdCB3aGljaCB5b3UgY2FuIGNoZWNrIG91dCBiZWxvdy5cIixcbiAgICAgIH0sXG5cbiAgICAgIHtcbiAgICAgICAgbGFiZWw6IFwiTW92aWV3YXRjaGluZ1wiLFxuICAgICAgICB2YWx1ZTogXCJtb3ZpZXdhdGNoaW5nXCIsXG4gICAgICAgIGRlc2M6IFwiVUkvVVggZGVzaWduIG1vY2t1cCBvZiBOZXRmbGl4IGluc3BpcmVkIGFwcFwiLFxuICAgICAgICB0aXRsZTogXCJBZG9iZSBXb3Jrc2hvcHNcIixcbiAgICAgICAgaW1hZ2U6IG1vdmlld2F0Y2hpbmdpbWcsXG4gICAgICAgIGxpbms6IFwiaHR0cHM6Ly94ZC5hZG9iZS5jb20vdmlldy9jZjRkN2QyZS04NzNjLTRhZDktOGRhNi1jYWYwMjAyNzE1N2YtOWExZS8/ZnVsbHNjcmVlblwiLFxuICAgICAgICBsaW5rdGl0bGU6IFwibGluayB0byBwcm90b3R5cGVcIixcbiAgICAgICAgdG9vbHM6IFwiQWRvYmUgWERcIixcbiAgICAgICAgZ29hbDogXCJkZXNpZ24gZW50ZXJ0YWlubWVudCBhcHAgd2l0aCB0ZWFtIHRoYXQgYWxsb3dzIHVzZXJzIHRvIGV4cGxvcmUgc2hvd3MgYW5kIG1vdmllcy4gV2UgYWRkZWQgc29jaWFsIGFzcGVjdHMgd2l0aCBwcm9maWxlcyBhbmQgZnJpZW5kaW5nIGZlYXR1cmVzIGFzIHdlbGwgYXMgc2NoZWR1bGVkIGdyb3VwIHNjcmVlbmluZ3MuIFdlIGNyZWF0ZWQgYSBmdW5jdGlvbmFsIHByb3RvdHlwZSBmb3IgdGhpcyBwcm9kdWN0IHdoaWNoIHlvdSBjYW4gY2hlY2sgb3V0IGJlbG93LlwiLFxuICAgICAgfSxcblxuXG5cbiAgICBdO1xuICAgXG4gICAgcmV0dXJuIChcbiAgICAgIDxUYWJzIHZhbHVlPVwiaHRtbFwiPlxuICAgICAgICA8VGFic0hlYWRlciBjbGFzc05hbWU9XCJkYXJrOmJnLXNsYXRlLTgwMCBmbGV4IGZsZXgtY29sIG1kOmZsZXgtcm93XCI+XG4gICAgICAgICAge2RhdGEubWFwKCh7IGxhYmVsLCB2YWx1ZSB9KSA9PiAoXG4gICAgICAgICAgICA8VGFiIGtleT17dmFsdWV9IHZhbHVlPXt2YWx1ZX0gY2xhc3NOYW1lPVwiZGFyazp0ZXh0LXNsYXRlLTQwMCBob3ZlcjpibHVlLTQwMCB0ZXh0LXNtIHRleHQtY2xpcCBtZDp0ZXh0LWJhc2UgbGc6dGV4dC1iYXNlXCI+ICAgICAgICAgXG4gICAgICAgICAgICAgIHtsYWJlbH0gICAgICAgICAgICAgXG4gICAgICAgICAgICA8L1RhYj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9UYWJzSGVhZGVyPlxuICAgICAgICA8VGFic0JvZHkgYW5pbWF0ZT17e1xuICAgICAgICAgIG1vdW50OiB7IHk6IDAgfSxcbiAgICAgICAgICB1bm1vdW50OiB7IHk6IDI1MCB9LFxuICAgICAgICB9fT5cbiAgICAgICAgICB7ZGF0YS5tYXAoKHsgdmFsdWUsIGRlc2MgfSkgPT4gKFxuICAgICAgICAgICAgPFRhYlBhbmVsIGtleT17dmFsdWV9IHZhbHVlPXt2YWx1ZX0+XG4gICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LXNsYXRlLTgwMCBkYXJrOnRleHQtc2xhdGUtNDAwIHRleHQtY2VudGVyIHRleHQtbGcgbWQ6dGV4dC0yeGwgbGc6dGV4dC0yeGwgcHQtMTBcIj57ZGVzY308L2gxPlxuICAgICAgICAgICAgPC9UYWJQYW5lbD5cbiAgICAgICAgICApKX1cbiAgICAgICAgICB7ZGF0YS5tYXAoKHsgdmFsdWUsIGltYWdlLCBsaW5rLCBsaW5rdGl0bGUsIHRvb2xzLCBnb2FsLCBub3RlLCB0aXRsZSB9KSA9PiAoXG4gICAgICAgICBcbiAgICAgICAgICAgIDxUYWJQYW5lbCBrZXk9e3ZhbHVlfSB2YWx1ZT17dmFsdWV9PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIGZvbnQtYm9sZCBzaGFkb3ctbGcgIGRhcms6c2hhZG93LWJsdWUtNTAwIHAtMTAgcm91bmRlZC14bCBtZDpmbGV4IGxnOmZsZXhcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1kOnctMS8yIGxnOnctMS8yIG14LWF1dG8gbGc6cHItOCBweS0xMCB0ZXh0LXNsYXRlLTgwMCBkYXJrOnRleHQtc2xhdGUtNDAwXCI+XG4gICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwicGItNSBkYXJrOnRleHQtc2xhdGUtMzAwXCI+e3RpdGxlfTwvaDI+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LW5vcm1hbCBwYi0zXCI+dG9vbHM6IHt0b29sc308L3A+IFxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1saWdodCBzbTpweC0xIGxnOnB4LTggcGItNVwiPmdvYWw6IHtnb2FsfTwvcD5cbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2xpbmt9IGNsYXNzTmFtZT1cInVuZGVybGluZSBmb250LW1lZGl1bVwiIHRhcmdldD1cIl9ibGFua1wiPntsaW5rdGl0bGV9PC9hPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWQ6dy0xLzIgbGc6dy0xLzJcIj5cbiAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9e2ltYWdlfSB3aWR0aD17JzUwJSd9IGhlaWdodD17JzUwJSd9IGNsYXNzTmFtZT1cIm14LWF1dG8gcm91bmRlZC14bFwiLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L1RhYlBhbmVsPlxuICAgICAgICAgICkpfVxuICAgICAgICBcbiAgICAgICAgPC9UYWJzQm9keT5cbiAgICAgIDwvVGFicz5cbiAgICApO1xuICB9XG4gICJdLCJuYW1lcyI6WyJUYWJzIiwiVGFic0hlYWRlciIsIlRhYnNCb2R5IiwiVGFiIiwiVGFiUGFuZWwiLCJJbWFnZSIsImNzc2FpbWciLCJseXJpY2FsaW1nIiwibWNncGFpbnRpbmdpbWciLCJleHByZXNzb2ltZyIsImFpcnhpbWciLCJtb3ZpZXdhdGNoaW5naW1nIiwiUG9ydFRhYnMiLCJkYXRhIiwibGFiZWwiLCJ2YWx1ZSIsImRlc2MiLCJ0aXRsZSIsImltYWdlIiwibGluayIsImxpbmt0aXRsZSIsInRvb2xzIiwiZ29hbCIsImNsYXNzTmFtZSIsIm1hcCIsImFuaW1hdGUiLCJtb3VudCIsInkiLCJ1bm1vdW50IiwiaDEiLCJub3RlIiwiZGl2IiwiaDIiLCJwIiwiYSIsImhyZWYiLCJ0YXJnZXQiLCJzcmMiLCJ3aWR0aCIsImhlaWdodCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/PortTabs.js\n"));

/***/ })

});