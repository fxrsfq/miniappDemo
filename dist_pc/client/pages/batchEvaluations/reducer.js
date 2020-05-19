"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

<<<<<<< HEAD
exports.toEvaluateReducer = toEvaluateReducer;
=======
>>>>>>> 94088b6045bdec216fa76a5dbf4681a91bcb242d
//reducer  评价的 reducer
//在创建createStore(reducer)的时候，combineReducers(...reducer)已经将 reducer和 store 关联起来了
//在store.dispatch(action)时，action便与 reducer 关联了

var store = {
  evaluationsListData: [], // 请求到的所有数据
  filterResults: [], // tab 筛选结果
  selectAll: false // 全选状态
};

function toEvaluateReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : store;
  var action = arguments[1];

  //  在这里处理 action行为
  switch (action.type) {
    case "INIT":
<<<<<<< HEAD
      return _extends({}, state, {
        evaluationsListData: action.originalData,
        filterResults: action.originalData
      });
=======
      return {
        evaluationsListData: action.originalData,
        filterResults: action.originalData
      };
>>>>>>> 94088b6045bdec216fa76a5dbf4681a91bcb242d
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
<<<<<<< HEAD
    case "SELECTALL":
      return _extends({}, state, {
        filterResults: action.allCheckedChange
      });
    case "SELECTSINGLE":
      return _extends({}, state, {
        filterResults: action.singleCheckedChange
      });
    default:
      return store;
  }
}
=======
    default:
      return store;
  }
}

exports.default = toEvaluateReducer;
>>>>>>> 94088b6045bdec216fa76a5dbf4681a91bcb242d
