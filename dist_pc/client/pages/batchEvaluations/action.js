"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getState = exports.dispatch = undefined;
exports.filterState = filterState;
exports.getDataToStore = getDataToStore;
<<<<<<< HEAD
exports.toSingleEvaluate = toSingleEvaluate;
exports.toBatchEvaluate = toBatchEvaluate;
=======
exports.toEvaluate = toEvaluate;
>>>>>>> 94088b6045bdec216fa76a5dbf4681a91bcb242d
exports.toSelect = toSelect;

var _index = require("../../npm/_tarojs/taro-alipay/index.js");

var _index2 = _interopRequireDefault(_index);

var _taobaoTraderate = require("../../public/tradePublic/taobaoTraderate.js");

var _taobaoTraderate2 = _interopRequireDefault(_taobaoTraderate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = _index2.default.getApp();
/**
 * dispatch for taro
 * @param json
 */
var dispatch = exports.dispatch = function dispatch(json) {
  app.store.dispatch(json);
};

/**
 * get state
 * @returns {any|*|Promise<NavigationPreloadState>}
 */
var getState = exports.getState = function getState() {
  return app.store.getState();
};

//写了以上的东西，直接调用dispatch()、getState()即可

/**
 * @description 选项卡操作，筛选数据
 * @param {*} data  数据的上一次筛选结果
 * @param {*} tabStr 选项卡字符串，即筛选标志
 */
<<<<<<< HEAD
function filterState(tabStr) {
  var data = getState().toEvaluateReducer.filterResults;
=======
function filterState(data, tabStr) {
>>>>>>> 94088b6045bdec216fa76a5dbf4681a91bcb242d
  var arr = []; //买家未评订单
  if (tabStr === "买家未评") {
    arr = data.filter(function (item) {
      return item.buyer_rate === false ? true : false;
    });
    console.clear();
    console.log("卖家未评：", arr);
    console.log("原始数据为：", data);
    dispatch({
      type: "BUYER_UNRATED",
      unrated: arr
    });
  } else if (tabStr === "买家已评") {
    arr = data.filter(function (item) {
      return item.buyer_rate === true ? true : false;
    });
    dispatch({
      type: "BUYER_RATED",
      rated: arr
    });
  } else {
    dispatch({
      type: "ALL"
    });
  }
}

/**
<<<<<<< HEAD
 * @description 初始化redux数据 
=======
 * @description 选项卡的分类数据筛选  
>>>>>>> 94088b6045bdec216fa76a5dbf4681a91bcb242d
 * @author fuQiang
 * @export
 * @param {*} data 选项卡筛选的分类数据：全部、买家已评、买家未评
 * @param {*} tabStr 选项卡字符串：全部、买家已评、买家未评
 */
function getDataToStore(data) {
<<<<<<< HEAD
  console.clear();
  console.log("原始数据为：", data);
=======
>>>>>>> 94088b6045bdec216fa76a5dbf4681a91bcb242d
  var arr = []; //订单的筛选结果                                               
  for (var i = 0; i < data.totalResults; i++) {
    for (var j = 0; j < data.trades[i].orders.length; j++) {
      var obj = {
        checked: false, //选中状态
        buyer_rate: data.trades[i].buyer_rate, // 买家评价状态
        buyer_nick: data.trades[i].buyer_nick, // 买家昵称
        pic_path: data.trades[i].orders[j].pic_path, // 图像路径
        title: data.trades[i].orders[j].title, // 订单标题
<<<<<<< HEAD
        tid: data.trades[i].tid, // 交易号 
=======
>>>>>>> 94088b6045bdec216fa76a5dbf4681a91bcb242d
        oid: data.trades[i].orders[j].oid, // 订单号
        consign_time: data.trades[i].orders[j].consign_time, // 确认时间
        num: data.trades[i].orders[j].num, // 数量
        payment: data.trades[i].orders[j].payment // 实收款
      };
      arr.push(obj);
    }
  }
  dispatch({
    type: "INIT",
    originalData: arr
  });
}

/** 
<<<<<<< HEAD
 * @description 单宝贝评价
=======
 * @description
 * 单宝贝评价 || 批量评价
 * 1、将action 封装为一个方法，等待事件被触发 回调
 * 2、组件生命周期请求数据，然后调用 action 的方法，action携带数据。 在action中 dispatch(action)，reducer被触发
 * 3、将请求到的数据放到 action 中传递给 reducer,然后 reducer 来修改 store
>>>>>>> 94088b6045bdec216fa76a5dbf4681a91bcb242d
 * @author fuQiang
 * @param id 评价类型：单宝贝oid
 * @returns action 不同实参返回携带不同数据的 action
 */
<<<<<<< HEAD
function toSingleEvaluate(tid, oid) {
  var data = getState().toEvaluateReducer.filterResults;
  for (var i = 0; i < data.length; i++) {
    if (data[i].oid === oid) {
      (0, _taobaoTraderate2.default)({
        "tid": tid,
        "oid": oid,
        "result": "good",
        "content": "good",
        "callback": function callback() {
          console.log("批量评价成功");
        },
        "errCallback": function errCallback() {
          connsole.log("批量评价失败");
        }
      });
      break;
    } else {
      continue;
    }
  }
}

/**
 * @description 批量评价
 * @author fuQiang
 * @export
 */
function toBatchEvaluate() {
  var data = getState().toEvaluateReducer.filterResults;
  var arr = [];
  data.forEach(function (item) {
    if (item.checked === true) {
      var obj = {
        tid: item.tid,
        oid: item.oid,
        result: "good",
        content: "good",
        callback: function callback() {
          console.log("批量评价成功");
        },
        errCallback: function errCallback() {
          connsole.log("批量评价失败");
        }
      };
      arr.push(obj);
    }
  });
  arr.forEach(function (item) {
    (0, _taobaoTraderate2.default)(item);
  });
=======
function toEvaluate(evaluationType) {
  var action = 0;

  return action;
>>>>>>> 94088b6045bdec216fa76a5dbf4681a91bcb242d
}

/**
 * @description 选择
 * @param arg 全选/单选标志
<<<<<<< HEAD
 * @param data 列表数组
 */
function toSelect(arg) {
  var data = getState().toEvaluateReducer.filterResults;
  // console.log("select all：", data);
  if (arg === "all") {
    for (var i = 0; i < data.length; i++) {
      data[i].checked = !data[i].checked;
    }
    dispatch({
      type: "SELECTALL",
      allCheckedChange: data
    });
  } else {
    for (var i = 0; i < data.length; i++) {
      if (data[i].oid === oid) {
        data[i].checked = !data[i].checked;
        break;
      } else {
        continue;
      }
    }
    dispatch({
      type: "SINGLE",
      singleCheckedChange: data
=======
 */
function toSelect(arg) {
  if (arg === "all") {
    dispatch({
      type: "SELECTALL"
    });
  } else {
    dispatch({
      type: "SINGLE"
      // 这里携带oid
>>>>>>> 94088b6045bdec216fa76a5dbf4681a91bcb242d
    });
  }
}