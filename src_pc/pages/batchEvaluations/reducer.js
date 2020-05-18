//reducer  评价的 reducer
//在创建createStore(reducer)的时候，combineReducers(...reducer)已经将 reducer和 store 关联起来了
//在store.dispatch(action)时，action便与 reducer 关联了

let store = {
    evaluationsListData:[],   //请求到的所有数据
    filterResults:[],         // tab 筛选结果
};

function toEvaluateReducer(state = store, action){
    //  在这里处理 action行为
    switch(action.type){
        case "INIT": return {
            evaluationsListData:action.originalData,
            filterResults:action.originalData
        };
        case "ALL":return {
            ...state,
            filterResults:state.evaluationsListData
        };
        case "BUYER_RATED":return{
            ...state,
            filterResults:action.rated
        };
        case "BUYER_UNRATED":return{
            ...state,
            filterResults:action.unrated
        };
        default:return store ;
    }
}

export default toEvaluateReducer; 