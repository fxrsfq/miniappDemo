//reducer  评价的 reducer
//在创建createStore(reducer)的时候，combineReducers(...reducer)已经将 reducer和 store 关联起来了
//在store.dispatch(action)时，action便与 reducer 关联了

let store = {
    evaluationsListData:[],   // 请求到的所有数据
    filterResults:[],         // tab 筛选结果
    selectAll:false,          // 全选状态
};

<<<<<<< HEAD
export function toEvaluateReducer(state = store, action){
    //  在这里处理 action行为
    switch(action.type){
        case "INIT": return {
            ...state,
=======
function toEvaluateReducer(state = store, action){
    //  在这里处理 action行为
    switch(action.type){
        case "INIT": return {
>>>>>>> 94088b6045bdec216fa76a5dbf4681a91bcb242d
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
<<<<<<< HEAD
        case "SELECTALL":return {
            ...state,
            filterResults:action.allCheckedChange
        };
        case "SELECTSINGLE":return {
            ...state,
            filterResults:action.singleCheckedChange
        }
        default:return store ;
    }
}
=======
        default:return store ;
    }
}

export default toEvaluateReducer; 
>>>>>>> 94088b6045bdec216fa76a5dbf4681a91bcb242d
