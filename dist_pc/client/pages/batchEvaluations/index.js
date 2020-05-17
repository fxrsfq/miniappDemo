"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2; /* eslint-disable comma-dangle */
/* eslint-disable space-before-function-paren */
/* eslint-disable linebreak-style */
/* eslint-disable spaced-comment */


var _index = require("../../npm/_tarojs/taro-alipay/index.js");

var _index2 = _interopRequireDefault(_index);

var _action = require("./action.js");

var _soldGet = require("../../public/tradePublic/tradeDataCenter/api/soldGet.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// @connect((store) => {
//     return {
//         // searchVal: store.refundListReducer.searchVal,
//         // activeTabKey: store.refundListReducer.activeTabKey,
//         // pageNo: store.refundListReducer.pageNo,
//         // pageSize: store.refundListReducer.pageSize,
//         // tradeCounts: store.refundListReducer.tradeCounts,
//         // list: store.refundListReducer.list,
//         evaluationsListData: store.evaluationsListData
//     };
// })

/**
 * @description 批量评价根 组件 父
 * @author fuQiang
 * @class BatchDelete
 * @extends {Component}
 */
var propsManager = my.propsManager;
var BatchEvaluations = (_temp2 = _class = function (_BaseComponent) {
  _inherits(BatchEvaluations, _BaseComponent);

  function BatchEvaluations() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, BatchEvaluations);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = BatchEvaluations.__proto__ || Object.getPrototypeOf(BatchEvaluations)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["loopArray3", "$compid__23", "$compid__24", "$compid__25", "tabTitle", "promptStatus"], _this.tabClick = function (title) {
      _this.setState({ tabTitle: title });
    }, _this.promptStatusControl = function (arg) {
      _this.setState({ promptStatus: arg });
    }, _this.anonymousFunc0Map = {}, _this.customComponents = ["EvaluationsList", "MyPagination", "MyDialog", "Prompt"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(BatchEvaluations, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(BatchEvaluations.prototype.__proto__ || Object.getPrototypeOf(BatchEvaluations.prototype), "_constructor", this).call(this, props);
      this.state = {
        tabTitle: "全部", //选项卡样式 关键字,
        promptStatus: false //弹框状态 true：显示 false：取消

        // this.tabClick = this.tabClick.bind(this);
        // this.promptStatusControl = this.promptStatusControl.bind(this);
      };this.$$refs = [];
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      //挂载请求订单列表数据  
      (0, _soldGet.soldGet)({
        callback: function callback(result) {
          // console.clear();
          // console.log("获取到的订单列表为：", result);
          (0, _action.getDataToStore)(result);
        },
        errCallback: function errCallback(err) {
          console.error("拉取订单列表异常");
        }
      });
      // soldGet().then((result)=>{

      //     console.log("获取到的数据为abc：", result);
      // }, (err)=>{
      //     console.error("获取订单评价列表失败，异常如下：", err);
      // });
    }
    // 选项卡样式 切换

    // 弹出框弹出状态 显示或取消

  }, {
    key: "_createData",

    // 全选 反选
    // toSelect = ()=>{
    // } 

    value: function _createData() {
      var _this2 = this;

      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _genCompid = (0, _index.genCompid)(__prefix + "$compid__23"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__23 = _genCompid2[0],
          $compid__23 = _genCompid2[1];

      var _genCompid3 = (0, _index.genCompid)(__prefix + "$compid__24"),
          _genCompid4 = _slicedToArray(_genCompid3, 2),
          $prevCompid__24 = _genCompid4[0],
          $compid__24 = _genCompid4[1];

      var _genCompid5 = (0, _index.genCompid)(__prefix + "$compid__25"),
          _genCompid6 = _slicedToArray(_genCompid5, 2),
          $prevCompid__25 = _genCompid6[0],
          $compid__25 = _genCompid6[1];

      // console.log("组件拿到了数据！",this.props.evaluationsListData);


      var _state = this.__state,
          tabTitle = _state.tabTitle,
          promptStatus = _state.promptStatus;
      // 选项卡列表

      this.anonymousFunc1 = function () {
        _this2.promptStatusControl(true);
      };

      this.anonymousFunc2 = function () {
        _this2.promptStatusControl(false);
      };

      var loopArray3 = [{ title: '全部' }, { title: '买家已评' }, { title: '买家未评' }].map(function (cur, __index0) {
        cur = {
          $original: (0, _index.internal_get_original)(cur)
        };

        var _$indexKey = "gzzzz" + __index0;

        _this2.anonymousFunc0Map[_$indexKey] = function () {
          _this2.tabClick(cur.$original.title);
        };

        return {
          _$indexKey: _$indexKey,
          $original: cur.$original
        };
      });
      propsManager.set({
        "promptStatusControl": this.promptStatusControl
      }, $compid__23, $prevCompid__23);
      propsManager.set({
        "total": "5",
        "pageSize": "8",
        "shape": "normal",
        "current": "1"
      }, $compid__24, $prevCompid__24);
      promptStatus && propsManager.set({
        "onClose": this.anonymousFunc2,
        "hasFooter": "true",
        "title": "\u8BC4\u4EF7",
        "className": "mydialog-cite"
      }, $compid__25, $prevCompid__25);
      Object.assign(this.__state, {
        loopArray3: loopArray3,
        $compid__23: $compid__23,
        $compid__24: $compid__24,
        $compid__25: $compid__25
      });
      return this.__state;
    }
  }, {
    key: "anonymousFunc0",
    value: function anonymousFunc0(_$indexKey) {
      var _anonymousFunc0Map;

      ;

      for (var _len2 = arguments.length, e = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        e[_key2 - 1] = arguments[_key2];
      }

      return this.anonymousFunc0Map[_$indexKey] && (_anonymousFunc0Map = this.anonymousFunc0Map)[_$indexKey].apply(_anonymousFunc0Map, e);
    }
  }, {
    key: "anonymousFunc1",
    value: function anonymousFunc1(e) {
      ;
    }
  }, {
    key: "anonymousFunc2",
    value: function anonymousFunc2(e) {
      ;
    }
  }]);

  return BatchEvaluations;
}(_index.Component), _class.$$events = ["anonymousFunc0", "anonymousFunc1"], _class.$$componentPath = "pages/batchEvaluations/index", _temp2);
exports.default = BatchEvaluations;

Component(require('../../npm/_tarojs/taro-alipay/index.js').default.createComponent(BatchEvaluations));