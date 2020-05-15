//reducer  评价的 reducer
//在创建createStore(reducer)的时候，combineReducers(...reducer)已经将 reducer和 store 关联起来了
//在store.dispatch(action)时，action便与 reducer 关联了 

let store = {
    evaluationsListData:{}
};

function ToEvaulateReducer(state = store, action){
    return {
        evaluationsListData:action.tostore
    };
}

export default ToEvaulateReducer; 