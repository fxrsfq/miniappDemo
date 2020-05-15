"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
//reducer  评价的 reducer
//在创建createStore(reducer)的时候，combineReducers(...reducer)已经将 reducer和 store 关联起来了
//在store.dispatch(action)时，action便与 reducer 关联了 

var store = {
  evaluationsListData: {}
};

function ToEvaulateReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : store;
  var action = arguments[1];

  return {
    evaluationsListData: action.tostore
  };
}

exports.default = ToEvaulateReducer;