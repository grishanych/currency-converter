"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkcurrency_converter"] = self["webpackChunkcurrency_converter"] || []).push([["src_Components_converter_converter_js"],{

/***/ "./src/Components/converter/converter.js":
/*!***********************************************!*\
  !*** ./src/Components/converter/converter.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/index.js\");\n/* harmony import */ var _converter_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./converter.scss */ \"./src/Components/converter/converter.scss\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, \"prototype\", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } else if (call !== void 0) { throw new TypeError(\"Derived constructors may only return object or undefined\"); } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\nvar Converter = /*#__PURE__*/function (_Component) {\n  _inherits(Converter, _Component);\n\n  var _super = _createSuper(Converter);\n\n  function Converter() {\n    var _this;\n\n    _classCallCheck(this, Converter);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    _defineProperty(_assertThisInitialized(_this), \"state\", {\n      currencies: [\"EUR\", \"USD\", \"UAH\"],\n      base: \"EUR\",\n      amount: \"\",\n      convertTo: \"UAH\",\n      result: \"\",\n      date: \"\"\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"handleSelect\", function (event) {\n      _this.setState(_defineProperty({}, event.target.name, event.target.value), _this.calculate);\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"handleInput\", function (event) {\n      _this.setState({\n        amount: event.target.value\n      }, _this.calculate);\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"calculate\", function () {\n      var amount = _this.state.amount;\n\n      if (amount === isNaN) {\n        return;\n      } else {\n        axios__WEBPACK_IMPORTED_MODULE_0___default().get(\"http://api.exchangeratesapi.io/v1/latest?access_key=4905b0e100e11aab901b2145ef2068ef&format=1?base=${this.state.base}\").then(function (response) {\n          var date = response.data.date;\n          var result = (response.data.rates[_this.state.convertTo] * amount).toFixed(4);\n          var currencyAr = [\"EUR\"];\n\n          for (var key in response.data.rates) {\n            currencyAr.push(key);\n          }\n\n          _this.setState({\n            currencies: currencyAr,\n            result: result,\n            date: date\n          });\n        }).catch(function (err) {\n          console.log(\"Opps\", err.message);\n        });\n      }\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"handleSwap\", function (event) {\n      var base = _this.state.base;\n      var convertTo = _this.state.convertTo;\n      event.preventDefault();\n\n      _this.setState({\n        convertTo: base,\n        base: convertTo,\n        result: null\n      }, _this.calculate);\n    });\n\n    return _this;\n  }\n\n  _createClass(Converter, [{\n    key: \"render\",\n    value: function render() {\n      var _this$state = this.state,\n          currencies = _this$state.currencies,\n          base = _this$state.base,\n          amount = _this$state.amount,\n          convertTo = _this$state.convertTo,\n          result = _this$state.result,\n          date = _this$state.date;\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"div\", {\n        className: \"main-form-converter\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"h1\", null, amount, \" \", base, \" \\u0435\\u043A\\u0432\\u0456\\u0432\\u0430\\u043B\\u0435\\u043D\\u0442\\u043D\\u043E\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"h1\", null, result, \" \", convertTo), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"h2\", null, \"\\u0441\\u0442\\u0430\\u043D\\u043E\\u043C \\u043D\\u0430 \", date), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"div\", {\n        className: \"form-row\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"div\", {\n        className: \"row-input\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"p\", null, \"\\u041C\\u0456\\u043D\\u044F\\u044E\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"form\", {\n        className: \"form-inline\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"input\", {\n        className: \"form-inline-input\",\n        type: \"number\",\n        value: amount,\n        onChange: this.handleInput\n      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"select\", {\n        className: \"form-inline-select\",\n        name: \"base\",\n        value: base,\n        onChange: this.handleSelect\n      }, currencies.map(function (currency) {\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"option\", {\n          key: currency\n        }, currency);\n      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"p\", {\n        className: \"swap\",\n        onClick: this.handleSwap\n      }, \"\\u21D3\\u21D1\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"p\", null, \"\\u041E\\u0442\\u0440\\u0438\\u043C\\u0443\\u044E\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"form\", {\n        className: \"form-inline\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"input\", {\n        className: \"form-inline-input\",\n        disabled: true,\n        value: result\n      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"select\", {\n        className: \"form-inline-select\",\n        name: \"convertTo\",\n        value: convertTo,\n        onChange: this.handleSelect\n      }, currencies.map(function (currency) {\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"option\", {\n          key: currency\n        }, currency);\n      }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {\n        to: \"/exchange\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"button\", {\n        className: \"showExchange\"\n      }, \"\\u041F\\u0435\\u0440\\u0435\\u0433\\u043B\\u044F\\u043D\\u0443\\u0442\\u0438 \\u043A\\u0443\\u0440\\u0441\\u0438 \\u0432\\u0430\\u043B\\u044E\\u0442\")));\n    }\n  }]);\n\n  return Converter;\n}(react__WEBPACK_IMPORTED_MODULE_1__.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Converter);\n\n//# sourceURL=webpack://currency-converter/./src/Components/converter/converter.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/Components/converter/converter.scss":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/Components/converter/converter.scss ***!
  \******************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".main-form-converter {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n  margin: 0 auto;\\n  width: 1300px;\\n  border: 2px solid #f1abab;\\n  background-image: url(https://previews.123rf.com/images/bluebay/bluebay1506/bluebay150600014/40899611-stock-exchange-background.jpg);\\n}\\n.main-form-converter .form-row {\\n  border: 3px solid rebeccapurple;\\n  background-color: #9bff7c;\\n  text-align: center;\\n  font-size: 25px;\\n  width: 400px;\\n}\\n.main-form-converter .form-row .swap {\\n  cursor: pointer;\\n}\\n.main-form-converter .form-inline-input {\\n  width: 300px;\\n  height: 35px;\\n}\\n.main-form-converter .form-inline-select {\\n  font-size: 15px;\\n  height: 40px;\\n}\\n.main-form-converter .showExchange {\\n  margin-top: 20px;\\n  background-color: red;\\n  color: #fff;\\n  font-size: 20px;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://currency-converter/./src/Components/converter/converter.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./src/Components/converter/converter.scss":
/*!*************************************************!*\
  !*** ./src/Components/converter/converter.scss ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_converter_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./converter.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/Components/converter/converter.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_converter_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_converter_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_converter_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_converter_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://currency-converter/./src/Components/converter/converter.scss?");

/***/ })

}]);