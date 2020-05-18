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

/**
 * @description 选项卡操作，筛选数据
 * @param {*} data  数据的上一次筛选结果
 * @param {*} tabStr 选项卡字符串，即筛选标志
 */
export function filterState(data, tabStr) {
    let arr = []; //买家未评订单
    if (tabStr === "买家未评") {
        arr = data.filter((item) => {
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
        arr = data.filter((item) => {
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
 * @description 选项卡的分类数据筛选  
 * @author fuQiang
 * @export
 * @param {*} data 选项卡筛选的分类数据：全部、买家已评、买家未评
 * @param {*} tabStr 选项卡字符串：全部、买家已评、买家未评
 */
export function getDataToStore(data) {
    let arr = []; //订单的筛选结果                                               
    for (var i = 0; i < data.totalResults; i++) {
        for (var j = 0; j < data.trades[i].orders.length; j++) {
            var obj = {
                buyer_rate: data.trades[i].buyer_rate, // 买家评价状态
                buyer_nick: data.trades[i].buyer_nick, // 买家昵称
                pic_path: data.trades[i].orders[j].pic_path, // 图像路径
                title: data.trades[i].orders[j].title, // 订单标题
                oid: data.trades[i].orders[j].oid, // 订单号
                consign_time: data.trades[i].orders[j].consign_time, // 确认时间
                num: data.trades[i].orders[j].num, // 数量
                payment: data.trades[i].orders[j].payment, // 实收款
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
 * @description
 * 单宝贝评价 || 批量评价
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
