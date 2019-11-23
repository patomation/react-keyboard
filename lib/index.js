"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = _interopRequireDefault(require("./styles.js"));

var _keys = _interopRequireDefault(require("./keys.js"));

var _hotkey = _interopRequireDefault(require("@patomation/hotkey"));

var _reactUiComponents = require("@patomation/react-ui-components");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Keyboard = function Keyboard(_ref) {
  var className = _ref.className,
      background = _ref.background,
      color = _ref.color,
      style = _ref.style,
      enabled = _ref.enabled,
      hideDisabled = _ref.hideDisabled,
      gap = _ref.gap,
      onDown = _ref.onDown,
      onUp = _ref.onUp,
      buttonStyle = _ref.buttonStyle,
      hoverStyle = _ref.hoverStyle,
      activeStyle = _ref.activeStyle,
      disabledStyle = _ref.disabledStyle;

  var _useState = (0, _react.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      active = _useState2[0],
      setActive = _useState2[1];

  return _react["default"].createElement("div", {
    className: "keyboard",
    style: _objectSpread({}, _styles["default"].container, {}, background ? {
      background: background
    } : null, {}, color ? {
      color: color
    } : null, {}, style)
  }, _react["default"].createElement(_reactUiComponents.Grid, {
    className: "keyboard__grid",
    col: 30,
    row: 5,
    gap: gap !== undefined ? gap : '5px',
    style: {
      height: '100%'
    }
  }, _keys["default"].map(function (key, index) {
    var name = key.name,
        span = key.span;

    var handleDown = function handleDown() {
      if (onDown) onDown(name.toLowerCase());
    };

    var handleUp = function handleUp() {
      if (onUp) onUp(name.toLowerCase());
    }; // Set hotkey


    (0, _hotkey["default"])(name.toLowerCase()).down(function () {
      // Set button active if hotkey used
      setActive(function (lastActive) {
        var nextActive = _toConsumableArray(lastActive);

        nextActive[index] = true;
        return nextActive;
      });
      handleDown();
    }).up(function () {
      // Set button to deactive after hotkey used
      setActive(function (lastActive) {
        var nextActive = _toConsumableArray(lastActive);

        nextActive[index] = false;
        return nextActive;
      });
      handleUp();
    });

    if (enabled && !Object.prototype.hasOwnProperty.call(enabled, name.toLowerCase()) && hideDisabled) {
      return null;
    }

    return _react["default"].createElement(_reactUiComponents.Button, {
      className: "keyboard__button",
      onDown: handleDown,
      onUp: handleUp,
      active: active[index],
      key: "key_".concat(index),
      hoverStyle: hoverStyle,
      activeStyle: activeStyle,
      disabledStyle: disabledStyle,
      disabled: enabled ? !Object.prototype.hasOwnProperty.call(enabled, name.toLowerCase()) : null,
      style: _objectSpread({}, {
        // Makes button into grid item
        gridColumn: "auto / span ".concat(span),
        gridRow: 'auto / span 1',
        // For better centering
        paddingLeft: 0,
        paddingRight: 0
      }, {}, buttonStyle)
    }, name);
  })));
};

Keyboard.propTypes = {
  className: _propTypes["default"].string,
  background: _propTypes["default"].string,
  color: _propTypes["default"].string,
  style: _propTypes["default"].object,
  enabled: _propTypes["default"].bool,
  hideDisabled: _propTypes["default"].bool,
  gap: _propTypes["default"].string,
  onDown: _propTypes["default"].func,
  onUp: _propTypes["default"].func,
  buttonStyle: _propTypes["default"].func,
  hoverStyle: _propTypes["default"].string,
  activeStyle: _propTypes["default"].string,
  disabledStyle: _propTypes["default"].string
};
var _default = Keyboard;
exports["default"] = _default;