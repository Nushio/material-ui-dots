"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Paper = _interopRequireDefault(require("@material-ui/core/Paper"));

var _withStyles = _interopRequireDefault(require("@material-ui/core/styles/withStyles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = {
  dots: {
    position: 'relative'
  },
  dotOuter: {
    "float": 'left',
    position: 'absolute'
  },
  dot: {
    transition: 'all 400ms cubic-bezier(0.4, 0.0, 0.2, 1)',
    borderRadius: 16
  }
};

var Dots =
/*#__PURE__*/
function (_Component) {
  _inherits(Dots, _Component);

  function Dots(props) {
    var _this;

    _classCallCheck(this, Dots);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Dots).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "handleDotClick", function (index, event) {
      if (_this.props.onDotClick != null) {
        _this.props.onDotClick(index, event);
      }
    });

    _this.state = {
      previousIndex: props.index || 0
    };
    return _this;
  }

  _createClass(Dots, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(_ref) {
      var _this2 = this;

      var index = _ref.index,
          dotColor = _ref.dotColor,
          dotSize = _ref.dotSize;

      if (index !== this.props.index) {
        this.setState({
          previousIndex: this.props.index
        });
        this.timeout = setTimeout(function () {
          _this2.timeout = null;

          _this2.setState({
            previousIndex: index
          });
        }, 450);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.timeout != null) {
        clearTimeout(this.timeout);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props = this.props,
          classes = _this$props.classes,
          count = _this$props.count,
          index = _this$props.index,
          _this$props$style = _this$props.style,
          style = _this$props$style === void 0 ? {} : _this$props$style,
          onDotClick = _this$props.onDotClick,
          dotColor = _this$props.dotColor,
          dotSize = _this$props.dotSize,
          other = _objectWithoutProperties(_this$props, ["classes", "count", "index", "style", "onDotClick", "dotColor", "dotSize"]);

      var previousIndex = this.state.previousIndex;
      styles.dot = _objectSpread({}, styles.dot, {
        width: dotSize,
        height: dotSize
      });
      styles.dotOuter = _objectSpread({}, styles.dotOuter, {
        width: dotSize,
        height: dotSize,
        padding: dotSize / 2
      });
      return _react["default"].createElement("div", _extends({
        style: _objectSpread({}, style, {
          width: count * (dotSize * 2)
        })
      }, other), _react["default"].createElement("div", {
        className: classes.dots
      }, _toConsumableArray(Array(count).keys()).map(function (i) {
        return _react["default"].createElement("div", {
          key: i,
          className: classes.dotOuter,
          style: _objectSpread({}, styles.dotOuter, {
            left: i * (dotSize * 2),
            cursor: onDotClick != null ? 'pointer' : 'inherit'
          }),
          onClick: function onClick(event) {
            return _this3.handleDotClick(i, event);
          }
        }, _react["default"].createElement(_Paper["default"], {
          className: classes.dot,
          square: false,
          elevation: 0,
          style: _objectSpread({}, styles.dot, {
            backgroundColor: dotColor,
            opacity: i >= Math.min(previousIndex, index) && i <= Math.max(previousIndex, index) ? 0 : 0.5
          })
        }));
      }), _react["default"].createElement(_Paper["default"], {
        elevation: 0,
        className: classes.dot,
        style: _objectSpread({}, styles.dot, {
          backgroundColor: dotColor,
          position: 'absolute',
          marginTop: dotSize / 2,
          left: Math.min(previousIndex, index) * (dotSize * 2) + dotSize / 2,
          width: Math.abs(previousIndex - index) * (dotSize * 2) + dotSize
        })
      })));
    }
  }]);

  return Dots;
}(_react.Component);

Dots.propTypes = {
  count: _propTypes["default"].number.isRequired,
  index: _propTypes["default"].number.isRequired,
  style: _propTypes["default"].object,
  dotColor: _propTypes["default"].string,
  dotSize: _propTypes["default"].number,
  onDotClick: _propTypes["default"].func
};
Dots.defaultProps = {
  dotColor: '#fff',
  dotSize: 8
};

var _default = (0, _withStyles["default"])(styles)(Dots);

exports["default"] = _default;