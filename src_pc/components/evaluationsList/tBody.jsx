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
        const cur = this.props.currentOrder;
        return (
            <View className="table-tbody-tr" key={cur.orderCode}>
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
        );
    }
}

export default Tbody;