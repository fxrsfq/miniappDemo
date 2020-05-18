"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//reducer  评价的 reducer
//在创建createStore(reducer)的时候，combineReducers(...reducer)已经将 reducer和 store 关联起来了
//在store.dispatch(action)时，action便与 reducer 关联了

var store = {
  evaluationsListData: [], //请求到的所有数据
  filterResults: [] // tab 筛选结果
};

function toEvaluateReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : store;
  var action = arguments[1];

  //  在这里处理 action行为
  switch (action.type) {
    case "INIT":
      return {
        evaluationsListData: action.originalData,
        filterResults: action.originalData
      };
    case "ALL":
      return _extends({}, state, {
        filterResults: state.evaluationsListData
      });
    case "BUYER_RATED":
      return _extends({}, state, {
        filterResults: action.rated
      });
    case "BUYER_UNRATED":
      return _extends({}, state, {
        filterResults: action.unrated
      });
    default:
      return store;
  }
}

exports.default = toEvaluateReducer;