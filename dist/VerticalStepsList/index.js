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

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

(function () {
  var styles = ".vpl-list .marker {\n  display: inline-block;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.vpl-list .marker .circle-marker {\n  width: 12.8px;\n  height: 12.8px;\n  margin: 0 3.6px;\n  background: #000;\n  border-radius: 50%;\n}\n.vpl-list .marker > * {\n  width: 20px;\n  height: 20px;\n}\n.vpl-list label {\n  display: inline-flex;\n  align-items: center;\n  margin: 0.25em 0;\n}\n.vpl-list label > span {\n  margin: 0 0.25em;\n}\n.vpl-list label .disabled > * {\n  color: #eee;\n  opacity: 0.5;\n}\n.vpl-list label .disabled .default-checkbox {\n  background-color: #eee;\n  opacity: 0.5;\n}\n.vpl-list label > div {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.vpl-list label > div * {\n  width: 20px;\n  height: 20px;\n}\n.vpl-list .default-checkbox {\n  border: 1px solid #333;\n  width: 14px;\n  height: 14px;\n  margin: 0 3px;\n}\n.vpl-list .node .meta {\n  float: right;\n}\n.vpl-list .children {\n  display: flex;\n}\n.vpl-list .children > .line {\n  width: 2em;\n  height: auto;\n}\n.vpl-list .done.children {\n  border-color: #000;\n}\n.vpl-list .line {\n  height: 1em;\n  margin-left: 10px;\n  border-left: 1px solid #000;\n}\n.vpl-list .coming {\n  color: #bbbb;\n}\n.vpl-list .coming .marker {\n  opacity: 0.3;\n}\n.vpl-list .coming.line {\n  border-color: #bbbb;\n}";
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
      props = _objectWithoutProperties(_ref, ["items"]);

  var _useState = (0, _react.useState)(initItems),
      _useState2 = _slicedToArray(_useState, 2),
      items = _useState2[0],
      setItems = _useState2[1];

  var checkedHandler = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(i) {
      var callbackResponse, promiseResponse;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(items[i].callback instanceof Function)) {
                _context.next = 20;
                break;
              }

              callbackResponse = items[i].callback();

              if (!(callbackResponse instanceof Promise)) {
                _context.next = 18;
                break;
              }

              setItems((0, _immer.default)(items, function (draft) {
                draft[i].disabled = true;
              }));
              _context.prev = 4;
              _context.next = 7;
              return callbackResponse;

            case 7:
              promiseResponse = _context.sent;
              setItems((0, _immer.default)(items, function (draft) {
                draft[i].disabled = false;
              }));

              if (!(promiseResponse === false)) {
                _context.next = 11;
                break;
              }

              return _context.abrupt("return");

            case 11:
              _context.next = 18;
              break;

            case 13:
              _context.prev = 13;
              _context.t0 = _context["catch"](4);
              setItems((0, _immer.default)(items, function (draft) {
                draft[i].disabled = false;
              }));
              console.error(_context.t0);
              return _context.abrupt("return");

            case 18:
              if (!(callbackResponse === false)) {
                _context.next = 20;
                break;
              }

              return _context.abrupt("return");

            case 20:
              setItems((0, _immer.default)(items, function (draft) {
                draft[i].status = _status.default.DONE;

                if (draft[i + 1]) {
                  draft[i + 1].status = _status.default.PENDING;
                }

                if (draft[i].update instanceof Function) {
                  draft[i] = draft[i].update();
                }
              }));

            case 21:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[4, 13]]);
    }));

    return function checkedHandler(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  var availableProps = {};

  for (var key in props) {
    if ((props[key] instanceof Function || /*#__PURE__*/(0, _react.isValidElement)(props[key])) === false) {
      availableProps[key] = props[key];
    }
  }

  var preventCheckboxHandler = function preventCheckboxHandler(e) {
    e.target.checked = false;
  };

  return /*#__PURE__*/_react.default.createElement("div", _extends({}, availableProps, {
    className: (0, _classnames.default)('vpl-list', props.className)
  }), items.map(function (item, i) {
    item = props.itemFilter instanceof Function && props.itemFilter(item) || item;
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: (0, _classnames.default)('node', {
        coming: item.status === _status.default.COMING
      })
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
      })
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