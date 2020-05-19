import Taro from '@tarojs/taro';
import taobaoTraderateAdd from "tradePublic/taobaoTraderate";

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

//写了以上的东西，直接调用dispatch()、getState()即可

/**
 * @description 选项卡操作，筛选数据
 * @param {*} data  数据的上一次筛选结果
 * @param {*} tabStr 选项卡字符串，即筛选标志
 */
export function filterState(tabStr) {
    let data = getState().toEvaluateReducer.filterResults;
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
 * @description 初始化redux数据 
 * @author fuQiang
 * @export
 * @param {*} data 选项卡筛选的分类数据：全部、买家已评、买家未评
 * @param {*} tabStr 选项卡字符串：全部、买家已评、买家未评
 */
export function getDataToStore(data) {
    console.clear();
    console.log("原始数据为：", data);
    let arr = []; //订单的筛选结果                                               
    for (var i = 0; i < data.totalResults; i++) {
        for (var j = 0; j < data.trades[i].orders.length; j++) {
            var obj = {
                checked:false,                                        //选中状态
                buyer_rate: data.trades[i].buyer_rate,                // 买家评价状态
                buyer_nick: data.trades[i].buyer_nick,                // 买家昵称
                pic_path: data.trades[i].orders[j].pic_path,          // 图像路径
                title: data.trades[i].orders[j].title,                // 订单标题
                tid:data.trades[i].tid,                               // 交易号 
                oid: data.trades[i].orders[j].oid,                    // 订单号
                consign_time: data.trades[i].orders[j].consign_time,  // 确认时间
                num: data.trades[i].orders[j].num,                    // 数量
                payment: data.trades[i].orders[j].payment,            // 实收款
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
 * @description 单宝贝评价
 * @author fuQiang
 * @param id 评价类型：单宝贝oid
 * @returns action 不同实参返回携带不同数据的 action
 */
export function toSingleEvaluate(tid, oid) {
    let data = getState().toEvaluateReducer.filterResults;
    for(var i=0; i<data.length; i++){
        if(data[i].oid === oid){
            taobaoTraderateAdd({
                "tid":tid,
                "oid":oid,
                "result":"good",
                "content":"good",
                "callback":()=>{
                    console.log("批量评价成功");
                },
                "errCallback":()=>{
                    connsole.log("批量评价失败");
                }
            });
            break;
        }else{
            continue;
        }
    }

}

/**
 * @description 批量评价
 * @author fuQiang
 * @export
 */
export function toBatchEvaluate(){
    let data = getState().toEvaluateReducer.filterResults;
    let arr = [];
    data.forEach((item)=>{
        if(item.checked === true){
            let obj ={
                tid:item.tid,
                oid:item.oid,
                result:"good",
                content:"good",
                callback:()=>{
                    console.log("批量评价成功");
                },
                errCallback:()=>{
                    connsole.log("批量评价失败");
                }
            }
            arr.push(obj);
        }

    });
    arr.forEach((item)=>{
        taobaoTraderateAdd(item);
    });
}

/**
 * @description 选择
 * @param arg 全选/单选标志
 * @param data 列表数组
 */
export function toSelect(arg){
    let data = getState().toEvaluateReducer.filterResults;
    // console.log("select all：", data);
    if (arg === "all") {
       for(var i=0; i<data.length; i++){
           data[i].checked = !data[i].checked;
       }
        dispatch({
            type:"SELECTALL",
            allCheckedChange:data
        });
    } else {
        for(var i=0; i<data.length; i++){
            if(data[i].oid === oid){
                data[i].checked = !data[i].checked;
                break;
            }else{
                continue;
            }
        }
        dispatch({
            type:"SINGLE",
            singleCheckedChange:data
        });
    }
  

}
