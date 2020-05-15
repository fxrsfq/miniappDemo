import { Component } from '@tarojs/taro';
import { View, Text, Checkbox, Image, Button } from '@tarojs/components';

/**
 * @description 评价列表项组件 孙
 * @author fuQiang
 * @class IndexPart
 * @extends {Component}
 */
class Tbody extends Component{
    render(){
        //trades：一次交易 对应一个买家  orders：一次交易的订单数

        // const {imgSrc, goodsInformation, orderCode, confirmNumber, quantity, amount, nickName} = {this.props.currentOrder.};
        return (
            <View className="table-tbody-tr" key={orderCode}>
                <View className="cell0 cells">
                    <Checkbox className="check-box"></Checkbox>
                </View>
                <View className="cell1 cells">
                    <Image src={imgSrc} className="photo"></Image>
                    <Text className="evaluation-customer">{goodsInformation}</Text>
                </View>
                <View className="cell2 cells">
                    <Text>{orderCode}</Text>
                </View>
                <View className="cell3 cells">
                    <Text>{confirmNumber}</Text>
                </View>
                <View className="cell4 cells">
                    <Text>共{quantity}笔</Text>
                    <Text className="account">{amount}</Text>
                </View>
                <View className="cell5 cells">
                    <View className="blue-box"></View>
                    <Text>{nickName}</Text>
                </View>
                <View className="cell6 cells">
                    <Button className="evaluation-btu" onClick={()=>{this.props.promptStatusControl(true)}}>评价</Button>
                </View>
            </View>
        );
    }
}

export default Tbody;