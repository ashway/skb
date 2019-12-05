webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Card/index.jsx":
/*!***********************************!*\
  !*** ./components/Card/index.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var ent_decode__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ent/decode */ "./node_modules/ent/decode.js");
/* harmony import */ var ent_decode__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ent_decode__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./style.scss */ "./components/Card/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_8__);








 //- Нагло стащил из интернетов!

var format = function format(num, n, x) {
  var re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\.' : '$') + ')';
  return (num || 0).toFixed(Math.max(0, ~~n)).replace(new RegExp(re, 'g'), '$& ');
};

var Footer =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Footer, _React$Component);

  function Footer() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Footer);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Footer).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Footer, [{
    key: "render",
    value: function render() {
      var data = this.props.data;
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "card ".concat(data.priority == 1 ? 'active' : '')
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "f-xxsmall"
      }, "".concat(data.priority == 1 ? 'Лучшее предложение для Вас' : 'Возможно Вас заинтересует')), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "f-sbig"
      }, ent_decode__WEBPACK_IMPORTED_MODULE_7___default()(data.product_title), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", null)), "(\u0441\u043E \u0441\u043F\u0440\u0430\u0432\u043A\u043E\u0439 \u043E \u0434\u043E\u0445\u043E\u0434\u0430\u0445)"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "card-table"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", null, "\u0421\u0443\u043C\u043C\u0430"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", null, "\u0415\u0436\u0435\u043C\u0435\u0441\u044F\u0447\u043D\u044B\u0439 \u043F\u043B\u0430\u0442\u0435\u0436"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", null, "\u0421\u0440\u043E\u043A"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", null, "\u0421\u0442\u0430\u0432\u043A\u0430")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", null, format(data.limit) || '-', " \u20BD"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", null, data.payment ? "".concat(format(data.payment), " \u20BD") : '-'), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", null, data.term || '-', " \u043C\u0435\u0441\u044F\u0446\u0435\u0432"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", null, data.rate || '-', "%"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "inline-block"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "button"
      }, "\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0434\u0435\u043D\u044C\u0433\u0438")));
    }
  }]);

  return Footer;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ })

})
//# sourceMappingURL=index.js.45bd35d7bb5c2fc378c6.hot-update.js.map