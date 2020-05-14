import { Component } from '@tarojs/taro';
import { View, Text, Checkbox, Image, Button } from '@tarojs/components';
import Tbody from "./tBody";
import "./index.css";
/**
 * @description 评价列表 List 子
 * @author fuQiang
 * @class EvaluationsList
 * @extends {Component}
 */
class EvaluationsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bodyArr: [{
                imgSrc: "", goodsInformation: "这个是一个新的宝贝这个是一个新的宝贝这个是一个新的宝贝这个是一个搜索场这个是一个新的宝贝这个是一个新的宝贝", orderCode: 1234567890, confirmNumber: "2020-5-12 18:22:22", quantity: 123, amount: 12312323,
                nickName: "马小跳的爷爷"
            },{
                imgSrc: "", goodsInformation: "这个是一个新的宝贝这个是一个新的宝贝这个是一个新的宝贝这个是一个搜索场这个是一个新的宝贝这个是一个新的宝贝", orderCode: 9876543210, confirmNumber: "2020-5-12 18:22:22", quantity: 123, amount: 12312323,
                nickName: "马小跳的爷爷"
            }],// 订单数组 
        }
    }

    render() { 
       
        console.clear();
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
                    {
                        this.state.bodyArr.map((cur) => {
                            return <Tbody currentOrder={cur}></Tbody>
                        })
                    }
                </View>
            </View>
        );
    }
}

export default EvaluationsList;