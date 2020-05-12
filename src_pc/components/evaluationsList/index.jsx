import { Component } from '@tarojs/taro';
import { View, Text, Checkbox, Image, Button } from '@tarojs/components';
import "./index.css";
/**
 * @description 评价列表
 * @author fuQiang
 * @class EvaluationsList
 * @extends {Component}
 */
class EvaluationsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            headerArr: [{ words: "选择", key: 0 }, { words: "选择宝贝信息", key: 1 }, { words: "订单号", key: 2 }, { words: "确认时间", key: 3 },
            { words: "数量/实收款", key: 4 }, { words: "卖家旺旺", key: 5 }, { words: "卖家操作旺旺", key: 6 }],//表头关键字

            bodyArr: [{
                imgSrc: "", goodsInformation: "", orderCode: 1234567890, confirmNumber: "2020-5-12 18:22:22", quantity: 123, amount: 12312323,
                nickName: "effa"
            }],// 订单数组 

        }
    }

    render() {

        const { headerArr, bodyArr } = this.state;
        // 表头项
        const tableTh = headerArr.map((cur) => {
            return (
                <View key={cur.key} className={"table-header-tr-th w-" + cur.key}>
                    <Text>{cur.words}</Text>
                </View>
            );
        });
        //订单列表
        const tableTrs = bodyArr.map((cur) => {
            return <View className="table-tbody-tr" key={cur.orderCode}>
                <View className="td1">
                    <Checkbox></Checkbox>
                </View>
                <View className="td2">
                    <Image src={cur.imgSrc}></Image>
                </View>
                <View className="td3">
                    <Text>{cur.goodsInformation}</Text>
                </View>
                <View className="td4">
                    <Text>{cur.orderCode}</Text>
                </View>
                <View className="td5">
                    <Text>{cur.confirmNumber}</Text>
                </View>
                <View className="td6">
                    <Text>共{cur.quantity}笔</Text>
                    <Text>{cur.amount}</Text>
                </View>
                <View className="td7">
                    <View></View>
                    <Text>{cur.nickName}</Text>
                </View>
                <View className="td8">
                    <Button>评价</Button>
                </View>
            </View>
        });
        return (
            <View className="evaluationslist-table">
                <View className="table-thead">
                    {tableTh}
                </View>
                <View className="table-tbody">
                    {tableTrs}
                </View>
            </View>
        );
    }
}

export default EvaluationsList;