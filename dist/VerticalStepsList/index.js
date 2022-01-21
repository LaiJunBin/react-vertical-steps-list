"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireWildcard(require("react"));

var _status = _interopRequireDefault(require("./status"));

var _immer = _interopRequireDefault(require("immer"));

var _excluded = ["items"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

(function () {
  var styles = ".vsl-list {\n  max-width: 100vw;\n  overflow-x: auto;\n  overflow-y: hidden;\n  white-space: nowrap;\n  padding-top: 1em;\n  padding-bottom: 1em;\n}\n.vsl-list .node {\n  height: 1em;\n  display: flex;\n  justify-content: space-between;\n}\n.vsl-list .marker {\n  display: inline-block;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 2em;\n}\n.vsl-list .marker .circle-marker {\n  width: 1em;\n  height: 1em;\n  margin: 0 0.25em;\n  background: #000;\n  border-radius: 50%;\n}\n.vsl-list .marker > * {\n  width: 1em;\n  height: 1em;\n}\n.vsl-list label {\n  display: inline-flex;\n  align-items: flex-start;\n  margin: 0;\n}\n.vsl-list label > span {\n  margin: 0 0.25em;\n  transform: translateY(-12.5%);\n  height: 1em;\n}\n.vsl-list label .disabled > * {\n  color: #eee;\n  opacity: 0.5;\n}\n.vsl-list label .disabled .default-checkbox {\n  background-color: #eee;\n  opacity: 0.5;\n}\n.vsl-list label > div:first-of-type {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 2em;\n}\n.vsl-list label > div:first-of-type * {\n  width: 1em;\n  height: 1em;\n}\n.vsl-list .meta {\n  height: 1em;\n  margin-left: 1em;\n}\n.vsl-list .default-checkbox {\n  border: 1px solid #333;\n  width: 1em;\n  height: 1em;\n  margin: 0 0.25em;\n  box-sizing: border-box;\n}\n.vsl-list .children {\n  display: flex;\n}\n.vsl-list .children > .line {\n  min-width: 2em;\n  height: auto;\n}\n.vsl-list .children div > div {\n  margin: 0.25em 0;\n}\n.vsl-list .done.children {\n  border-color: #000;\n}\n.vsl-list .line {\n  height: 1em;\n  margin-left: calc(1em - 0.5px);\n  border-left: 1px solid #000;\n}\n.vsl-list .coming {\n  color: #bbbb;\n}\n.vsl-list .coming .marker {\n  opacity: 0.3;\n}\n.vsl-list .coming.line {\n  border-color: #bbbb;\n}\n.vsl-list.dark-theme {\n  color: #fff;\n}\n.vsl-list.dark-theme .marker .circle-marker {\n  background: #fff;\n}\n.vsl-list.dark-theme label .disabled > * {\n  color: #444;\n}\n.vsl-list.dark-theme label .disabled .default-checkbox {\n  background-color: #444;\n  opacity: 0.5;\n}\n.vsl-list.dark-theme .default-checkbox {\n  border: 1px solid #fff;\n}\n.vsl-list.dark-theme .done.children {\n  border-color: #fff;\n}\n.vsl-list.dark-theme .line {\n  border-left: 1px solid #fff;\n}\n.vsl-list.dark-theme .coming {\n  color: #888;\n}\n.vsl-list.dark-theme .coming .marker {\n  opacity: 0.5;\n}\n.vsl-list.dark-theme .coming.line {\n  border-color: #888;\n}";
  var fileName = "index_index";
  var element = document.querySelector("style[data-sass-component='index_index']");

  if (!element) {
    var styleBlock = document.createElement("style");
    styleBlock.innerHTML = styles;
    styleBlock.setAttribute("data-sass-component", fileName);
    document.head.appendChild(styleBlock);
  } else {
    element.innerHTML = styles;
  }
})();

function VerticalStepsList(_ref) {
  var initItems = _ref.items,
      props = _objectWithoutProperties(_ref, _excluded);

  var _useState = (0, _react.useState)(initItems),
      _useState2 = _slicedToArray(_useState, 2),
      items = _useState2[0],
      setItems = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      called = _useState4[0],
      setCalled = _useState4[1];

  var checkedHandler = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(i) {
      var callbackResponse, promiseResponse;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(items[i].callback instanceof Function)) {
                _context.next = 26;
                break;
              }

              if (!called) {
                _context.next = 3;
                break;
              }

              return _context.abrupt("return");

            case 3:
              setCalled(true);
              callbackResponse = items[i].callback();

              if (!(callbackResponse instanceof Promise)) {
                _context.next = 23;
                break;
              }

              setItems((0, _immer.default)(items, function (draft) {
                draft[i].disabled = true;
              }));
              _context.prev = 7;
              _context.next = 10;
              return callbackResponse;

            case 10:
              promiseResponse = _context.sent;
              setCalled(false);
              setItems((0, _immer.default)(items, function (draft) {
                draft[i].disabled = false;
              }));

              if (!(promiseResponse === false)) {
                _context.next = 15;
                break;
              }

              return _context.abrupt("return");

            case 15:
              _context.next = 23;
              break;

            case 17:
              _context.prev = 17;
              _context.t0 = _context["catch"](7);
              setCalled(false);
              setItems((0, _immer.default)(items, function (draft) {
                draft[i].disabled = false;
              }));
              console.error(_context.t0);
              return _context.abrupt("return");

            case 23:
              setCalled(false);

              if (!(callbackResponse === false)) {
                _context.next = 26;
                break;
              }

              return _context.abrupt("return");

            case 26:
              setItems((0, _immer.default)(items, function (draft) {
                draft[i].status = _status.default.DONE;

                if (draft[i + 1]) {
                  draft[i + 1].status = _status.default.PENDING;
                }

                if (draft[i].update instanceof Function) {
                  draft[i] = draft[i].update();
                }
              }));

            case 27:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[7, 17]]);
    }));

    return function checkedHandler(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  var availableProps = {};
  var ignoreProps = ['itemClass', 'itemStyle', 'childrenClass', 'childrenStyle', 'darkTheme', 'lineColor', 'hideLastLine', 'defaultMarkerColor', 'defaultCheckboxColor', 'metaStyle', 'textStyle', 'childStyle', 'lineGap', 'lineLength', 'childrenParentStyle'];

  for (var key in props) {
    if ((props[key] instanceof Function || /*#__PURE__*/(0, _react.isValidElement)(props[key])) === false && !ignoreProps.includes(key)) {
      availableProps[key] = props[key];
    }
  }

  var preventCheckboxHandler = function preventCheckboxHandler(e) {
    e.target.checked = false;
  };

  return /*#__PURE__*/_react.default.createElement("div", _extends({}, availableProps, {
    className: (0, _classnames.default)('vsl-list', props.className, {
      'dark-theme': !!props.darkTheme
    })
  }), items.map(function (item, i) {
    item = props.itemFilter instanceof Function && props.itemFilter(item) || item;
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: (0, _classnames.default)('node', {
        coming: item.status === _status.default.COMING
      }, props.itemClass),
      style: _objectSpread({}, props.itemStyle)
    }, /*#__PURE__*/_react.default.createElement("label", null, item.status === _status.default.PENDING ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("input", {
      type: "checkbox",
      onClick: function onClick() {
        return checkedHandler(i);
      },
      onChange: function onChange(e) {
        return preventCheckboxHandler(e);
      },
      style: {
        display: 'none'
      }
    }), /*#__PURE__*/_react.default.createElement("div", {
      className: (0, _classnames.default)({
        disabled: item.disabled
      })
    }, /*#__PURE__*/(0, _react.isValidElement)(item.checkbox) ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, item.checkbox) : /*#__PURE__*/_react.default.createElement("div", {
      className: "default-checkbox",
      style: {
        borderColor: props.defaultCheckboxColor
      }
    }))) : /*#__PURE__*/_react.default.createElement("div", {
      className: "marker"
    }, /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/(0, _react.isValidElement)(item.marker) ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, item.marker) : /*#__PURE__*/_react.default.createElement("div", {
      className: "circle-marker",
      style: {
        backgroundColor: props.defaultMarkerColor
      }
    }))), /*#__PURE__*/_react.default.createElement("div", {
      style: props.textStyle
    }, props.textFilter instanceof Function && props.textFilter(item.text) || item.text)), item.meta instanceof Function ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
      className: "meta",
      style: props.metaStyle
    }, item.meta())) : ''), items.length - 1 > i && !item.children && /*#__PURE__*/_react.default.createElement("div", {
      className: (0, _classnames.default)('line', {
        coming: items[i + 1].status === _status.default.COMING
      }),
      style: {
        borderColor: props.lineColor,
        marginTop: "".concat((props.lineGap === undefined ? 1 : props.lineGap) * 0.25, "em"),
        marginBottom: "".concat((props.lineGap === undefined ? 1 : props.lineGap) * 0.25, "em"),
        padding: "".concat(((props.lineLength || 0) + 1) * 0.25, "em 0")
      }
    }), item.children && /*#__PURE__*/_react.default.createElement("div", {
      className: (0, _classnames.default)('children', {
        coming: items[i].status === _status.default.COMING,
        done: items[i].status === _status.default.DONE
      }, props.childrenClass),
      style: _objectSpread(_objectSpread({}, props.childrenStyle), {}, {
        marginTop: "".concat((props.lineGap === undefined ? 1 : props.lineGap) * 0.25, "em"),
        marginBottom: "".concat((props.lineGap === undefined ? 1 : props.lineGap) * 0.25, "em")
      })
    }, !props.hideLastLine || i < items.length - 1 ? /*#__PURE__*/_react.default.createElement("div", {
      className: "line",
      style: {
        borderColor: props.lineColor,
        padding: "".concat(((props.lineLength || 0) + 1) * 0.25, "em 0")
      }
    }) : /*#__PURE__*/_react.default.createElement("div", {
      style: {
        marginLeft: 10,
        width: '2em'
      }
    }), /*#__PURE__*/_react.default.createElement("div", {
      style: _objectSpread({
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly'
      }, props.childrenParentStyle)
    }, item.children.map(function (child, j) {
      return /*#__PURE__*/_react.default.createElement("div", {
        key: j,
        style: props.childStyle
      }, props.childFilter instanceof Function && props.childFilter(child.text) || child.text);
    }))));
  }));
}

var _default = VerticalStepsList;
exports.default = _default;