"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _index = require("../../../../npm/_tarojs/taro-alipay/index.js");

var _index2 = _interopRequireDefault(_index);

var _env = require("../../../../constants/env.js");

var _userInfo = require("../../utils/userInfo.js");

var _systemInfo = require("../../utils/systemInfo.js");

var _action = require("../action.js");

var _index3 = require("../../utils/index.js");

var _constants = require("../../../tradePublic/marketing/constants.js");

var _index4 = require("../feedback/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propsManager = my.propsManager;
var RenewBoxPC = (_temp2 = _class = function (_BaseComponent) {
  _inherits(RenewBoxPC, _BaseComponent);

  function RenewBoxPC() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, RenewBoxPC);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = RenewBoxPC.__proto__ || Object.getPrototypeOf(RenewBoxPC)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["$compid__29", "anonymousState__temp", "closeNow", "midModalState", "ENV", "box_content", "box_span", "pid", "ad", "close"], _this.dealBoxContent = function (adInfo) {
      if (!(0, _index3.isEmpty)(_this.bocContentInfo)) {
        return _this.bocContentInfo;
      }
      var contentSource = {};
      var bocContentInfo = {};
      if ((0, _systemInfo.getSystemInfo)()['platform'] === 'iOS') {
        // ios话术
        contentSource = adInfo.user_define.body;
        bocContentInfo = {
          box_content: contentSource.box_content,
          box_span: contentSource.box_span,
          talk_content: contentSource.talk_content
        };
      } else {
        contentSource = _userInfo.renewData.userdata.renewDatas;
        if (!(0, _index3.isEmpty)(contentSource)) {
          var box_content = contentSource.message.replace(/\|/g, '');
          var box_span = contentSource.span ? contentSource.span : '立即续费';
          bocContentInfo = {
            box_content: box_content,
            box_span: box_span
          };
        }
      }
      _this.bocContentInfo = bocContentInfo;
      return bocContentInfo;
    }, _this.closeModal = function () {
      _this.setState({ closeNow: true }, function () {
        setTimeout(function () {
          var _this$props = _this.props,
              pid = _this$props.pid,
              ad = _this$props.ad,
              close = _this$props.close;

          (0, _index4.feedbackClosed)({ adData: ad.adInfo });
          (0, _action.closeAdByPid)({ pid: pid });
          close();
        }, 1000);
      });
    }, _this.clickBox = function () {
      _this.setState({ midModalState: 'modal' }, function () {
        clearTimeout(_this.timer);
        var _this$props2 = _this.props,
            pid = _this$props2.pid,
            ad = _this$props2.ad;

        (0, _index4.feedbackShowed)({ adData: ad.adInfo });
        // 理论上来说，只要对中提示进行了操作，今天就不要展示了，但是呢如果这时候直接使用关闭中提示的广告，
        // 弹窗也就出不来啦，所以这里等广告弹出之后，我们把lastClosedTime设置了，下次就没有惹
        (0, _action.setLastCloseTime)(pid);
      });
    }, _this.startTimer = function () {
      if ((0, _index3.isEmpty)(_this.timer)) {
        _this.timer = setTimeout(function () {
          // 在中提示动画结束之后关闭弹窗
          _this.closeModal();
        }, 30000);
      }
    }, _this.customComponents = ["Marketing"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(RenewBoxPC, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(RenewBoxPC.prototype.__proto__ || Object.getPrototypeOf(RenewBoxPC.prototype), "_constructor", this).call(this, props);
      this.state = {
        midModalState: 'box',
        closeNow: false
      };
      this.$$refs = [];
    }

    /*
     * @Description 处理中提示滑块内容
    */


    /*
     * @Description 关闭弹窗
    */


    /*
     * @Description 点击中提示事件，把滑动的弹窗变成弹窗广告~
    */


    /*
     * @Description 开始关闭的计时器
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

      var _genCompid = (0, _index.genCompid)(__prefix + "$compid__29"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__29 = _genCompid2[0],
          $compid__29 = _genCompid2[1];

      var _props = this.__props,
          pid = _props.pid,
          ad = _props.ad;

      var anonymousState__temp = (0, _index3.isEmpty)(ad);
      if (anonymousState__temp) {
        return null;
      }
      var _state = this.__state,
          midModalState = _state.midModalState,
          closeNow = _state.closeNow;
      var adInfo = ad.adInfo;

      var _dealBoxContent = this.dealBoxContent(adInfo),
          box_content = _dealBoxContent.box_content,
          box_span = _dealBoxContent.box_span,
          talk_content = _dealBoxContent.talk_content;

      var clickBoxEvent = function clickBoxEvent() {
        _this2.clickBox(talk_content);
      };
      this.startTimer();
      this.anonymousFunc0 = clickBoxEvent;
      !(midModalState === 'box') && propsManager.set({
        "type": _constants.MARKETING_TYPE.commonModal,
        "pid": pid,
        "close": this.closeModal
      }, $compid__29, $prevCompid__29);
      Object.assign(this.__state, {
        $compid__29: $compid__29,
        anonymousState__temp: anonymousState__temp,
        ENV: _env.ENV,
        box_content: box_content,
        box_span: box_span
      });
      return this.__state;
    }
  }, {
    key: "anonymousFunc0",
    value: function anonymousFunc0(e) {
      ;
    }
  }]);

  return RenewBoxPC;
}(_index.Component), _class.$$events = ["closeModal", "anonymousFunc0"], _class.$$componentPath = "public/mapp_common/marketing/renewBox/renewBoxPC", _temp2);


RenewBoxPC.defaultProps = {
  pid: 0,
  close: _index3.NOOP
};

exports.default = RenewBoxPC;

Component(require('../../../../npm/_tarojs/taro-alipay/index.js').default.createComponent(RenewBoxPC));