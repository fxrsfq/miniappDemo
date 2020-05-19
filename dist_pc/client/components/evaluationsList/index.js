"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _dec, _class, _class2, _temp2;

var _index = require("../../npm/_tarojs/taro-alipay/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = require("../../npm/_tarojs/redux/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propsManager = my.propsManager;

/**
 * @description 评价列表
 * @author fuQiang
 * @class EvaluationsList
 * @extends {Component}
 */
var EvaluationsList = (_dec = (0, _index3.connect)(function (store) {
<<<<<<< HEAD
  // console.log("evaluationsList获取到的store为：", store);
=======
  console.log("evaluationsList获取到的store为：", store);
>>>>>>> 94088b6045bdec216fa76a5dbf4681a91bcb242d
  return {
    filterResults: store.toEvaluateReducer.filterResults
  };
}), _dec(_class = (_temp2 = _class2 = function (_BaseComponent) {
  _inherits(EvaluationsList, _BaseComponent);

  function EvaluationsList() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, EvaluationsList);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

<<<<<<< HEAD
    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = EvaluationsList.__proto__ || Object.getPrototypeOf(EvaluationsList)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["loopArray43", "filterResults", "promptStatusControl"], _this.customComponents = ["Tbody"], _temp), _possibleConstructorReturn(_this, _ret);
=======
    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = EvaluationsList.__proto__ || Object.getPrototypeOf(EvaluationsList)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["loopArray23", "tbody", "filterResults", "promptStatusControl"], _this.customComponents = ["Tbody"], _temp), _possibleConstructorReturn(_this, _ret);
>>>>>>> 94088b6045bdec216fa76a5dbf4681a91bcb242d
  }

  _createClass(EvaluationsList, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(EvaluationsList.prototype.__proto__ || Object.getPrototypeOf(EvaluationsList.prototype), "_constructor", this).call(this, props);

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

<<<<<<< HEAD
      // console.clear();
      var _props = this.__props,
          filterResults = _props.filterResults,
          promptStatusControl = _props.promptStatusControl;

      console.log("列表渲染的数组为：", this.__props.filterResults);

      var loopArray43 = filterResults.map(function (item, _anonIdx) {
        item = {
          $original: (0, _index.internal_get_original)(item)
        };

        var _genCompid = (0, _index.genCompid)(__prefix + "fdzzzzzzzz" + _anonIdx, true),
            _genCompid2 = _slicedToArray(_genCompid, 2),
            $prevCompid__73 = _genCompid2[0],
            $compid__73 = _genCompid2[1];

        propsManager.set({
          "order": item.$original,
          "promptStatusControl": promptStatusControl
        }, $compid__73, $prevCompid__73);
        return {
          $compid__73: $compid__73,
          $original: item.$original
        };
      });
      Object.assign(this.__state, {
        loopArray43: loopArray43,
        filterResults: filterResults
=======
      var tbody = this.__props.filterResults;
      var promptControl = this.__props.promptStatusControl;
      console.log("组件拿到了数据为：", tbody);

      var loopArray23 = tbody.map(function (cur, _anonIdx) {
        cur = {
          $original: (0, _index.internal_get_original)(cur)
        };

        var _genCompid = (0, _index.genCompid)(__prefix + "dczzzzzzzz" + _anonIdx, true),
            _genCompid2 = _slicedToArray(_genCompid, 2),
            $prevCompid__39 = _genCompid2[0],
            $compid__39 = _genCompid2[1];

        propsManager.set({
          "order": cur.$original,
          "promptStatusControl": promptControl
        }, $compid__39, $prevCompid__39);
        return {
          $compid__39: $compid__39,
          $original: cur.$original
        };
      });
      Object.assign(this.__state, {
        loopArray23: loopArray23,
        tbody: tbody
>>>>>>> 94088b6045bdec216fa76a5dbf4681a91bcb242d
      });
      return this.__state;
    }
  }]);

  return EvaluationsList;
}(_index.Component), _class2.$$events = [], _class2.$$componentPath = "components/evaluationsList/index", _temp2)) || _class);
exports.default = EvaluationsList;

Component(require('../../npm/_tarojs/taro-alipay/index.js').default.createComponent(EvaluationsList));