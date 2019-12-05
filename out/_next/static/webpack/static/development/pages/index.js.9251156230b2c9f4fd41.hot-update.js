webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _scss_base_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../scss/base.scss */ "./scss/base.scss");
/* harmony import */ var _scss_base_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_scss_base_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Header */ "./components/Header/index.jsx");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer/index.jsx");
/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Card */ "./components/Card/index.jsx");
/* harmony import */ var _data_offers_json__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../data/offers.json */ "./data/offers.json");
var _data_offers_json__WEBPACK_IMPORTED_MODULE_13___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data/offers.json */ "./data/offers.json", 1);














var offersByPage = 2; //-- Кол-во оферов на странице

var IndexPage =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(IndexPage, _React$Component);

  function IndexPage() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, IndexPage);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(IndexPage)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      page: 0,
      offers: lodash__WEBPACK_IMPORTED_MODULE_8___default.a.sortBy(_data_offers_json__WEBPACK_IMPORTED_MODULE_13__, ['priority']),
      currentOffer: 1
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "showModeOffers", function (n) {
      var newPage = _this.state.page + n;
      newPage = newPage < 0 ? 0 : newPage;

      _this.setState({
        page: newPage
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "showOffer", function (offer) {
      _this.setState({
        currentOffer: offer
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "clearOffer", function () {
      _this.setState({
        currentOffer: null
      });
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(IndexPage, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var offerList = this.state.offers.slice(this.state.page * offersByPage, this.state.page * offersByPage + offersByPage);
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_10__["default"], null), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "main bg image index-page"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "men"
      }), this.state.currentOffer ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "content offer-show"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "icon-v"
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "button",
        onClick: function onClick() {
          return _this2.clearOffer();
        }
      }, "\u041D\u0430 \u0433\u043B\u0430\u0432\u043D\u0443\u044E \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443"))) : react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "content offer-list"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "f-xbig bold green mb60"
      }, "\u0423\u0432\u0430\u0436\u0430\u0435\u043C\u044B\u0439 \u0418\u0432\u0430\u043D \u0418\u0432\u0430\u043D\u043E\u0432\u0438\u0447"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "column"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null, "\u0421\u043F\u0435\u0446\u0438\u0430\u043B\u044C\u043D\u043E \u0434\u043B\u044F \u0412\u0430\u0441 \u043C\u044B \u043F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u0438\u043B\u0438 \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0439 \u043F\u043E \u043A\u0440\u0435\u0434\u0438\u0442\u043E\u0432\u0430\u043D\u0438\u044E. \u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u0443\u044E\u0449\u0438\u0439 \u0412\u0430\u0441 \u0432\u0430\u0440\u0438\u0430\u043D\u0442 \u0438 \u043D\u0430\u0436\u043C\u0438\u0442\u0435 \u043A\u043D\u043E\u043F\u043A\u0443 \xAB\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0434\u0435\u043D\u044C\u0433\u0438\xBB \u0434\u043B\u044F \u0435\u0433\u043E \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044F. \u0415\u0441\u043B\u0438 \u043D\u0438 \u043E\u0434\u0438\u043D \u0438\u0437 \u0432\u0430\u0440\u0438\u0430\u043D\u0442\u043E\u0432 \u0412\u0430\u043C \u043D\u0435 \u043F\u043E\u0434\u0445\u043E\u0434\u0438\u0442, \u043D\u0430\u0436\u043C\u0438\u0442\u0435 \u043A\u043D\u043E\u043F\u043A\u0443 \xAB\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0434\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u044F\xBB"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "f-small gray"
      }, "\u041E\u0431\u0440\u0430\u0449\u0430\u0435\u043C \u0412\u0430\u0448\u0435 \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u0435, \u0447\u0442\u043E \u0432 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u044F\u0445 \u0443\u043A\u0430\u0437\u0430\u043D\u0430 \u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u0430\u044F \u0441\u0443\u043C\u043C\u0430 \u043A\u0440\u0435\u0434\u0438\u0442\u0430. \u0412 \u043E\u0442\u0434\u0435\u043B\u0435\u043D\u0438\u0438 \u0411\u0430\u043D\u043A\u0430 \u0412\u044B \u0432\u0441\u0435\u0433\u0434\u0430 \u0441\u043C\u043E\u0436\u0435\u0442\u0435 \u0441\u043D\u0438\u0437\u0438\u0442\u044C \u0441\u0443\u043C\u043C\u0443 \u043A\u0440\u0435\u0434\u0438\u0442\u0430 \u0434\u043E \u0442\u0440\u0435\u0431\u0443\u0435\u043C\u043E\u0433\u043E \u0440\u0430\u0437\u043C\u0435\u0440\u0430."), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "card-container"
      }, lodash__WEBPACK_IMPORTED_MODULE_8___default.a.map(offerList, function (d) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Card__WEBPACK_IMPORTED_MODULE_12__["default"], {
          key: d.offer_id,
          data: d,
          setOffer: _this2.showOffer
        });
      })), lodash__WEBPACK_IMPORTED_MODULE_8___default.a.isArray(_data_offers_json__WEBPACK_IMPORTED_MODULE_13__) && _data_offers_json__WEBPACK_IMPORTED_MODULE_13__.length > offersByPage ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "flex-block space-between mt60"
      }, this.state.page > 0 ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "button border",
        onClick: function onClick() {
          return _this2.showModeOffers(-1);
        }
      }, "\u041D\u0430\u0437\u0430\u0434") : null, lodash__WEBPACK_IMPORTED_MODULE_8___default.a.isArray(this.state.offers) && this.state.page * offersByPage + offersByPage < this.state.offers.length ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "button border",
        onClick: function onClick() {
          return _this2.showModeOffers(1);
        }
      }, "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0434\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u044F") : null) : null))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Footer__WEBPACK_IMPORTED_MODULE_11__["default"], null));
    }
  }]);

  return IndexPage;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (IndexPage);

/***/ })

})
//# sourceMappingURL=index.js.9251156230b2c9f4fd41.hot-update.js.map