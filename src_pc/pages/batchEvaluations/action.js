import Taro from '@tarojs/taro';

let app = Taro.getApp();
/**
 * dispatch for taro
 * @param json
 */
export const dispatch = (json) => {
    app.store.dispatch(json);
};

/**
 * get state
 * @returns {any|*|Promise<NavigationPreloadState>}
 */
export const getState = () => {
    return app.store.getState();
};

//写了以上的东西，直接调用dispatch()即可

// 在 action  中抽取数据，然后传给store .store再传给组件

/**
 * @description 请求数据，初始化store
 * @author fuQiang
 * @export
 * @param {*} data 请求到的数据 实参来自于组件生命周期请求到的数据 
 */
export function getDataToStore(data){
    dispatch({
        type:"INIT",
        tostore:data
    }); 
}


/** 
 * @description
 * 单宝贝评价 || 批量评价
 * 
 * 1、将action 封装为一个方法，等待事件被触发 回调
 * 2、组件生命周期请求数据，然后调用 action 的方法，action携带数据。 在action中 dispatch(action)，reducer被触发
 * 3、将请求到的数据放到 action 中传递给 reducer,然后 reducer 来修改 store
 * @author fuQiang
 * @param evaluationType 评价类型：单宝贝评价、批量评价 
 * @returns action 不同实参返回携带不同数据的 action
*/
export function ToEvaluateAction(evaluationType) {
    let action = 0;

    return action;
}

