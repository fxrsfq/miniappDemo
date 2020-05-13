"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _index = require("../../npm/_tarojs/taro-alipay/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @description 批量评价根 组件 
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

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = BatchEvaluations.__proto__ || Object.getPrototypeOf(BatchEvaluations)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["loopArray34", "$compid__44", "tabTitle"], _this.tabClick = function (title) {
      _this.setState({ tabTitle: title });
    }, _this.anonymousFunc0Map = {}, _this.customComponents = ["EvaluationsList", "MyPagination"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(BatchEvaluations, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(BatchEvaluations.prototype.__proto__ || Object.getPrototypeOf(BatchEvaluations.prototype), "_constructor", this).call(this, props);
      this.state = {
        tabTitle: "全部" //选项卡样式 关键字
      };
      this.tabClick = this.tabClick.bind(this);
      this.$$refs = [];
    }
  }, {
    key: "_createData",
    value: function _createData() {
      var _this2 = this;

      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _genCompid = (0, _index.genCompid)(__prefix + "$compid__44"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__44 = _genCompid2[0],
          $compid__44 = _genCompid2[1];

      // 选项卡列表


      var loopArray34 = [{ title: '全部' }, { title: '买家已评' }, { title: '买家未评' }].map(function (cur, __index0) {
        cur = {
          $original: (0, _index.internal_get_original)(cur)
        };

        var _$indexKey = "edzzz" + __index0;

        _this2.anonymousFunc0Map[_$indexKey] = function () {
          _this2.tabClick(cur.$original.title);
        };

        return {
          _$indexKey: _$indexKey,
          $original: cur.$original
        };
      });
      propsManager.set({
        "total": "5",
        "pageSize": "8",
        "shape": "normal",
        "current": "1"
      }, $compid__44, $prevCompid__44);
      Object.assign(this.__state, {
        loopArray34: loopArray34,
        $compid__44: $compid__44
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
  }]);

  return BatchEvaluations;
}(_index.Component), _class.$$events = ["anonymousFunc0"], _class.$$componentPath = "pages/batchEvaluations/index", _temp2);
exports.default = BatchEvaluations;

Component(require('../../npm/_tarojs/taro-alipay/index.js').default.createComponent(BatchEvaluations));