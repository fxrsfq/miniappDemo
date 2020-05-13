import { Component } from '@tarojs/taro';
import { View, Text, Checkbox, Image, Button } from '@tarojs/components';
import "./index.css";
/**
 * @description 评价列表 List
 * @author fuQiang
 * @class EvaluationsList
 * @extends {Component}
 */
class EvaluationsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // headerArr: [{ words: "选择", key: 0 }, { words: "选择宝贝信息", key: 1 }, { words: "订单号", key: 2 }, { words: "确认时间", key: 3 },
            // { words: "数量/实收款", key: 4 }, { words: "卖家旺旺", key: 5 }, { words: "操作 ", key: 6 }],//表头关键字

            bodyArr: [{
                imgSrc: "", goodsInformation: "这个是一个新的宝贝这个是一个新的宝贝这个是一个新的宝贝这个是一个搜索场这个是一个新的宝贝这个是一个新的宝贝", orderCode: 1234567890, confirmNumber: "2020-5-12 18:22:22", quantity: 123, amount: 12312323,
                nickName: "马小跳的爷爷"
            }],// 订单数组 

        }
    }

    render() {
       
        //订单列表
        const tableTrs = this.state.bodyArr.map((cur) => {
            return <View className="table-tbody-tr" key={cur.orderCode}>
                <View className="cell0 cells">
                    <Checkbox className="check-box"></Checkbox>
                </View>
                <View className="cell1 cells">
                    <Image src={cur.imgSrc} className="photo"></Image>
                    <Text className="evaluation-customer">{cur.goodsInformation}</Text>
                </View>
                <View className="cell2 cells">
                    <Text>{cur.orderCode}</Text>
                </View>
                <View className="cell3 cells">
                    <Text>{cur.confirmNumber}</Text>
                </View>
                <View className="cell4 cells">
                    <Text>共{cur.quantity}笔</Text>
                    <Text className="account">{cur.amount}</Text>
                </View>
                <View className="cell5 cells">
                    <View className="blue-box"></View>
                    <Text>{cur.nickName}</Text>
                </View>
                <View className="cell6 cells">
                    <Button className="evaluation-btu" onClick={()=>{this.props.promptStatusControl(true)}}>评价</Button>
                </View>
            </View>
        });
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
                    {tableTrs}
                </View>
            </View>
        );
    }
}

export default EvaluationsList;