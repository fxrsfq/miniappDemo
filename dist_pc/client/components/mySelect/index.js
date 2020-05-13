"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _index = require("../../npm/_tarojs/taro-alipay/index.js");

var _index2 = _interopRequireDefault(_index);

var _logger = require("../../public/mapp_common/utils/logger.js");

var _index3 = require("../../public/mapp_common/utils/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propsManager = my.propsManager;

var MySelect = (_temp2 = _class = function (_BaseComponent) {
  _inherits(MySelect, _BaseComponent);

  function MySelect() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, MySelect);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = MySelect.__proto__ || Object.getPrototypeOf(MySelect)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "showDataSource", "_value", "disabled", "controlled", "hasClear", "dataSource", "children", "className", "value"], _this.findSelected = function (value) {
      var dataSource = _this.props.dataSource;
      if (!Array.isArray(dataSource)) {
        dataSource = [];
      }
      var target = dataSource.find(function (item) {
        return item.label === value;
      });
      if (!target) {
        var _value = JSON.stringify(value);
        target = dataSource.find(function (item) {
          return JSON.stringify(item.value) === _value;
        });
      }
      if (!target) {
        target = dataSource.find(function (item) {
          return item === value;
        });
      }
      if (!target) {
        return null;
      }
      return target;
    }, _this.onChange = function (event) {
      if (event.detail.value === undefined) {
        _this.props.onChange(null);
        return;
      }
      var value = event.detail.value;

      var target = _this.findSelected(value);

      if (!target) {
        _logger.Logger.error('select没有找到对应的value', value);
        return;
      }
      if (target.value) {
        _this.props.onChange(target.value);
      } else {
        _this.props.onChange(target);
      }
    }, _this.customComponents = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(MySelect, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(MySelect.prototype.__proto__ || Object.getPrototypeOf(MySelect.prototype), "_constructor", this).call(this, props);

      this.$$refs = [];
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _props = this.__props,
          dataSource = _props.dataSource,
          children = _props.children,
          className = _props.className,
          value = _props.value,
          disabled = _props.disabled,
          controlled = _props.controlled,
          hasClear = _props.hasClear;

      var _dataSource = dataSource;
      if (!Array.isArray(_dataSource)) {
        _dataSource = [];
      }
      var showDataSource = _dataSource.map(function (item) {
        if (item.label) {
          return item.label;
        }
        if (item.value) {
          return item.value;
        }
        return item;
      });
      var _value = this.findSelected(value);

      // eslint-disable-next-line react/forbid-elements
      var anonymousState__temp = 'select ' + className;
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        showDataSource: showDataSource,
        _value: _value,
        disabled: disabled,
        controlled: controlled,
        hasClear: hasClear
      });
      return this.__state;
    }
  }]);

  return MySelect;
}(_index.Component), _class.$$events = ["onChange"], _class.$$componentPath = "components/mySelect/index", _temp2);


MySelect.defaultProps = {
  className: '',
  dataSource: [],
  onChange: _index3.NOOP,
  disabled: false

};
exports.default = MySelect;

Component(require('../../npm/_tarojs/taro-alipay/index.js').default.createComponent(MySelect));