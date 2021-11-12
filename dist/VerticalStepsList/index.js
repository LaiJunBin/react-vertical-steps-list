"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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
  var styles = ".vsl-list .marker {\n  display: inline-block;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.vsl-list .marker .circle-marker {\n  width: 12.8px;\n  height: 12.8px;\n  margin: 0 3.6px;\n  background: #000;\n  border-radius: 50%;\n}\n.vsl-list .marker > * {\n  width: 20px;\n  height: 20px;\n}\n.vsl-list label {\n  display: inline-flex;\n  align-items: center;\n  margin: 0.25em 0;\n}\n.vsl-list label > span {\n  margin: 0 0.25em;\n}\n.vsl-list label .disabled > * {\n  color: #eee;\n  opacity: 0.5;\n}\n.vsl-list label .disabled .default-checkbox {\n  background-color: #eee;\n  opacity: 0.5;\n}\n.vsl-list label > div {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.vsl-list label > div * {\n  width: 20px;\n  height: 20px;\n}\n.vsl-list .default-checkbox {\n  border: 1px solid #333;\n  width: 14px;\n  height: 14px;\n  margin: 0 3px;\n}\n.vsl-list .node .meta {\n  float: right;\n}\n.vsl-list .children {\n  display: flex;\n}\n.vsl-list .children > .line {\n  width: 2em;\n  height: auto;\n}\n.vsl-list .done.children {\n  border-color: #000;\n}\n.vsl-list .line {\n  height: 1em;\n  margin-left: 10px;\n  border-left: 1px solid #000;\n}\n.vsl-list .coming {\n  color: #bbbb;\n}\n.vsl-list .coming .marker {\n  opacity: 0.3;\n}\n.vsl-list .coming.line {\n  border-color: #bbbb;\n}\n.vsl-list.dark-theme {\n  color: #fff;\n}\n.vsl-list.dark-theme .marker .circle-marker {\n  background: #fff;\n}\n.vsl-list.dark-theme label .disabled > * {\n  color: #444;\n}\n.vsl-list.dark-theme label .disabled .default-checkbox {\n  background-color: #444;\n  opacity: 0.5;\n}\n.vsl-list.dark-theme .default-checkbox {\n  border: 1px solid #fff;\n}\n.vsl-list.dark-theme .done.children {\n  border-color: #fff;\n}\n.vsl-list.dark-theme .line {\n  border-left: 1px solid #fff;\n}\n.vsl-list.dark-theme .coming {\n  color: #888;\n}\n.vsl-list.dark-theme .coming .marker {\n  opacity: 0.5;\n}\n.vsl-list.dark-theme .coming.line {\n  border-color: #888;\n}";
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
  var ignoreProps = ['itemClass', 'itemStyle', 'childrenClass', 'childrenStyle', 'darkTheme'];

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
      style: props.itemStyle
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
      className: "default-checkbox"
    }))) : /*#__PURE__*/_react.default.createElement("div", {
      className: "marker"
    }, /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/(0, _react.isValidElement)(item.marker) ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, item.marker) : /*#__PURE__*/_react.default.createElement("div", {
      className: "circle-marker"
    }))), /*#__PURE__*/_react.default.createElement("span", null, props.textFilter instanceof Function && props.textFilter(item.text) || item.text)), item.meta instanceof Function ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
      className: "meta"
    }, item.meta())) : ''), items.length - 1 > i && !item.children && /*#__PURE__*/_react.default.createElement("div", {
      className: (0, _classnames.default)('line', {
        coming: items[i + 1].status === _status.default.COMING
      })
    }), item.children && /*#__PURE__*/_react.default.createElement("div", {
      className: (0, _classnames.default)('children', {
        coming: items[i].status === _status.default.COMING,
        done: items[i].status === _status.default.DONE
      }, props.childrenClass),
      style: props.childrenStyle
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "line"
    }), /*#__PURE__*/_react.default.createElement("div", null, item.children.map(function (child, j) {
      return /*#__PURE__*/_react.default.createElement("div", {
        key: j
      }, props.childFilter instanceof Function && props.childFilter(child.text) || child.text);
    }))));
  }));
}

var _default = VerticalStepsList;
exports.default = _default;