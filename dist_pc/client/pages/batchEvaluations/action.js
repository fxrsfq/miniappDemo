"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getState = exports.dispatch = undefined;
exports.filterState = filterState;
exports.getDataToStore = getDataToStore;
exports.changeBatch = changeBatch;
exports.toSingleEvaluate = toSingleEvaluate;
exports.toBatchEvaluate = toBatchEvaluate;
exports.toSelect = toSelect;

var _index = require("../../npm/_tarojs/taro-alipay/index.js");

var _index2 = _interopRequireDefault(_index);

var _taobaoTraderate = require("../../public/tradePublic/taobaoTraderate.js");

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
function filterState(tabStr) {
  var data = getState().toEvaluateReducer.filterResults;
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
 * @description 初始化redux数据 
 * @author fuQiang
 * @export
 * @param {*} data 选项卡筛选的分类数据：全部、买家已评、买家未评
 * @param {*} tabStr 选项卡字符串：全部、买家已评、买家未评
 */
function getDataToStore(data) {
  console.clear();
  console.log("原始数据为：", data);
  var arr = []; //订单的筛选结果                                               
  for (var i = 0; i < data.totalResults; i++) {
    for (var j = 0; j < data.trades[i].orders.length; j++) {
      var obj = {
        checked: false, //选中状态
        buyer_rate: data.trades[i].buyer_rate, // 买家评价状态
        buyer_nick: data.trades[i].buyer_nick, // 买家昵称
        pic_path: data.trades[i].orders[j].pic_path, // 图像路径
        title: data.trades[i].orders[j].title, // 订单标题
        tid: data.trades[i].tid, // 交易号 
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
 * @description 修改弹出框的显示部分标志
 */
function changeBatch(sign, obj) {
  //这里接受的 obj 不正确
  if (sign === "single") {
    //修改 组件显示区域的标志为 单宝贝评价 
    dispatch({
      type: "SINGLE",
      currentSingleOrder: obj
    });
  } else {
    //修改 组件显示区域的标志为  批量评价 
    dispatch({
      type: "BATCH"
    });
  }
}

/** 
 * @description 单宝贝评价
 * @author fuQiang
 * @param id 评价类型：单宝贝oid
 * @returns action 不同实参返回携带不同数据的 action
 */
function toSingleEvaluate() {
  // let data = getState().toEvaluateReducer.filterResults;
  var _getState$toEvaluateR = getState().toEvaluateReducer.currentSingleOrder,
      tid = _getState$toEvaluateR.tid,
      oid = _getState$toEvaluateR.oid;
  // console.log("我执行了！", getState().toEvaluateReducer.currentSingleOrder);

  (0, _taobaoTraderate.taobaoTraderateAdd)({
    tid: tid,
    oid: oid,
    result: "good",
    content: "good",
    callback: function callback() {
      console.log("批量评价成功");
    },
    errCallback: function errCallback() {
      connsole.log("批量评价失败");
    }
  });
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
    (0, _taobaoTraderate.taobaoTraderateAdd)(item);
  });
}

/**
 * @description 选择
 * @param arg 全选/单选标志
 */
function toSelect(arg, oid) {
  var data = getState().toEvaluateReducer.filterResults;

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
      type: "SELECTSINGLE",
      singleCheckedChange: data
    });
  }
}