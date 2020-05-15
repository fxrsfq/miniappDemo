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
        evaluationsListData:store.evaluationsListData
    };
})

/**
 * @description 评价列表 List 子
 * @author fuQiang
 * @class EvaluationsList
 * @extends {Component}
 */
class EvaluationsList extends Component {
 
    // 评价列表渲染
    showList = (data) => {
        console.clear();
        console.log("组件拿到了数据！", data);
        // 在这里遍历trades ，把要传递的数据封装好再传给子组件 forEach套map， return子组件 
        let arr = [];
        // return <Tbody currentTrade={cur}></Tbody>;
        data.forEach((cur)=>{
            
        });
    }
    
    render() { 
        
        let tbody = showList(this.props.evaluationsListData);
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
                    {/* {tbody} */}
                </View>
            </View>
        );
    }
}

export default EvaluationsList; 