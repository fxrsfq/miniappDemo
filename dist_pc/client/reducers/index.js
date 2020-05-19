"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require("../npm/redux/lib/redux.js");

var _reducer = require("../public/mapp_common/marketing/reducer.js");

var _reducer2 = require("../pages/refundManagement/reducer.js");

var _reducer3 = require("../pages/batchEvaluations/reducer.js");

/** 
 * 合并  reducer
 * 在自己的component文件夹中封装reducer，在这里导入即可
*/
exports.default = (0, _redux.combineReducers)({
  marketingAdInfoReducer: _reducer.marketingAdInfoReducer,
  refundListReducer: _reducer2.refundListReducer,
<<<<<<< HEAD
  toEvaluateReducer: _reducer3.toEvaluateReducer
=======
  toEvaluateReducer: _reducer4.default
>>>>>>> 94088b6045bdec216fa76a5dbf4681a91bcb242d
});