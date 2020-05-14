"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require("../npm/redux/lib/redux.js");

var _reducer = require("../public/mapp_common/marketing/reducer.js");

var _reducer2 = require("../pages/refundManagement/reducer.js");

var _reducer3 = require("../pages/batchEvaluations/reducer.js");

var _reducer4 = _interopRequireDefault(_reducer3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** 
 * 合并  reducer
 * 在自己的component文件夹中封装reducer，在这里导入即可
*/
exports.default = (0, _redux.combineReducers)({
  marketingAdInfoReducer: _reducer.marketingAdInfoReducer,
  refundListReducer: _reducer2.refundListReducer,
  toEvaulateReducer: _reducer4.default
});