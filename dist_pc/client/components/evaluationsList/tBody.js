"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _index = require("../../npm/_tarojs/taro-alipay/index.js");

var _index2 = _interopRequireDefault(_index);

var _action = require("../../pages/batchEvaluations/action.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/** 
 * @description 订单列表组件
 */
var propsManager = my.propsManager;
var Tbody = (_temp2 = _class = function (_BaseComponent) {
  _inherits(Tbody, _BaseComponent);

  function Tbody() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Tbody);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Tbody.__proto__ || Object.getPrototypeOf(Tbody)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["oid", "checked", "pic_path", "title", "consign_time", "num", "payment", "buyer_nick", "order", "promptStatusControl"], _this.singleSelect = function (selectType, oid) {
      (0, _action.toSelect)(selectType, oid);
    }, _this.singleBatch = function () {
      // 这个方法应该在弹框中使用
      // toSingleEvaluate(tid, oid);
      var _this$props$order = _this.props.order,
          tid = _this$props$order.tid,
          oid = _this$props$order.oid;

      console.log("singleBatch 实参 obj 为：", { tid: tid, oid: oid });
      (0, _action.changeBatch)("single", { tid: tid, oid: oid });
      _this.props.promptStatusControl(true);
    }, _this.customComponents = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Tbody, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(Tbody.prototype.__proto__ || Object.getPrototypeOf(Tbody.prototype), "_constructor", this).call(this, props);

      this.$$refs = [];
    }

    /**
     * @description   单选
     * @memberof Tbody
     * @param selectType String 选择类型: single
     */


    /**
     * @description 单宝贝评价
     * @memberof Tbody
     * @param obj 订单id  {"tid":tid,"oid":oid}
     */

  }, {
    key: "_createData",
    value: function _createData() {
      var _this2 = this;

      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      //trades：一次交易 对应一个买家  orders：一次交易的订单数
      var _props$order = this.__props.order,
          checked = _props$order.checked,
          pic_path = _props$order.pic_path,
          title = _props$order.title,
          tid = _props$order.tid,
          oid = _props$order.oid,
          consign_time = _props$order.consign_time,
          num = _props$order.num,
          payment = _props$order.payment,
          buyer_nick = _props$order.buyer_nick;
      // console.log("tid：",tid,"oid：", oid);

      this.anonymousFunc0 = function () {
        _this2.singleSelect("single", oid);
      };

      Object.assign(this.__state, {
        oid: oid,
        checked: checked,
        pic_path: pic_path,
        title: title,
        consign_time: consign_time,
        num: num,
        payment: payment,
        buyer_nick: buyer_nick
      });
      return this.__state;
    }
  }, {
    key: "anonymousFunc0",
    value: function anonymousFunc0(e) {
      ;
    }
  }]);

  return Tbody;
}(_index.Component), _class.$$events = ["anonymousFunc0", "singleBatch"], _class.$$componentPath = "components/evaluationsList/tBody", _temp2);
exports.default = Tbody;

Component(require('../../npm/_tarojs/taro-alipay/index.js').default.createComponent(Tbody));