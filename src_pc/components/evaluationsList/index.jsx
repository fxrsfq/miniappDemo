import { Component } from '@tarojs/taro';
import { View, Text, Checkbox, Image, Button } from '@tarojs/components';
import Tbody from "./tBody";
import "./index.css";
import { connect } from '@tarojs/redux';
@connect((store) => {
    console.log("evaluationsList获取到的store为：", store);
    return {
        filterResults: store.toEvaluateReducer.filterResults
    };
})

/**
 * @description 评价列表
 * @author fuQiang
 * @class EvaluationsList
 * @extends {Component}
 */
class EvaluationsList extends Component {
    
    render() {
        let tbody = this.props.filterResults;
        let promptControl = this.props.promptStatusControl;
        console.log("组件拿到了数据为：", tbody);
        
        return (
            <View className="evaluationslist-table">
                <View className="table-thead">
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
                    {
                        tbody.map((cur)=>{
                            return <Tbody order={cur} promptStatusControl={promptControl}></Tbody>
                        })
                    }
                </View>
            </View>
        );
    }
}

export default EvaluationsList; 