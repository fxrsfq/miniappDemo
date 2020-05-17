import { Component } from '@tarojs/taro';
import { View, Text, Checkbox, Image, Button } from '@tarojs/components';
import Tbody from "./tBody";
import "./index.css";
import { connect } from '@tarojs/redux';
@connect((store) => {
    return {
        // searchVal: store.refundListReducer.searchVal,
        // activeTabKey: store.refundListReducer.activeTabKey,
        // pageNo: store.refundListReducer.pageNo,
        // pageSize: store.refundListReducer.pageSize,
        // tradeCounts: store.refundListReducer.tradeCounts,
        // list: store.refundListReducer.list,
        evaluationsListData: store.toEvaulateReducer.evaluationsListData
    };
})

/**
 * @description 评价列表 List 子
 * @author fuQiang
 * @class EvaluationsList
 * @extends {Component}
 */
class EvaluationsList extends Component {


    // 筛选 评价列表数据
    showList = (data) => {
        console.clear();
        console.log("组件拿到了数据！", data);
        var arr = [];                                                 //所有订单数据
        for (var i =0; i < data.totalResults; i++) {
            for(var j =0; j < data.trades[i].orders.length; j++){
                var obj = {
                    buyer_nick:data.trades[i].buyer_nick,               //买家昵称
                    pic_path:data.trades[i].orders[j].pic_path,         //图像路径
                    title:data.trades[i].orders[j].title,               //订单标题
                    oid:data.trades[i].orders[j].oid,                   //订单号
                    consign_time:data.trades[i].orders[j].consign_time,  //确认时间
                    num:data.trades[i].orders[j].num,                  //数量
                    payment: data.trades[i].orders[j].payment,                  //实收款
                    promptStatusControl:this.props.promptStatusControl, //弹框函数
                };
                arr.push(obj);
            }
            
        }
        return arr;
    }
    render() {

        let tbody = this.showList(this.props.evaluationsListData);
        return (
            <View className="evaluationslist-table">
                <View className="table-thead">
                    {/* {tableTh} */}

                    <View className="table-header-tr-th cell0">
                        <Text className="cell-text">选择</Text>
                    </View>
                    <View className="table-header-tr-th cell1">
                        <Text className="cell-text">宝贝信息</Text>
                    </View>
                    <View className="table-header-tr-th cell2">
                        <Text className="cell-text">订单号</Text>
                    </View>
                    <View className="table-header-tr-th cell3">
                        <Text className="cell-text">确认时间</Text>
                    </View>
                    <View className="table-header-tr-th cell4">
                        <Text className="cell-text">数量/实收款</Text>
                    </View>
                    <View className="table-header-tr-th cell5">
                        <Text className="cell-text">买家旺旺 </Text>
                    </View>
                    <View className="table-header-tr-th cell6">
                        <Text className="cell-text">操作</Text>
                    </View>
                </View>
                <View className="table-tbody">
                    {/* 你需要在这里传靠椅信息和订单信息  */}
                    {
                        tbody.map((cur)=>{
                            return <Tbody order={cur}></Tbody>
                        })
                    }
                </View>
            </View>
        );
    }
}

export default EvaluationsList; 