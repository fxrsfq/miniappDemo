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
        console.log("props为：", this.props.order);
        const {pic_path, title, oid, consign_time, num, payment, buyer_nick, promptStatusControl} = this.props.order;
        return (
            <View className="table-tbody-tr" key={oid}>
                <View className="cell0 cells">
                    <Checkbox className="check-box"></Checkbox>
                </View>
                <View className="cell1 cells">
                    <Image src={pic_path} className="photo"></Image>
                    <Text className="evaluation-customer">{title}</Text>
                </View>
                <View className="cell2 cells">
                    <Text>{oid}</Text>
                </View>
                <View className="cell3 cells">
                    <Text>{consign_time}</Text>
                </View>
                <View className="cell4 cells">
                    <Text>共{num}笔</Text>
                    <Text className="account">{payment}</Text>
                </View>
                <View className="cell5 cells">
                    <View className="blue-box"></View>
                    <Text>{buyer_nick}</Text>
                </View>
                <View className="cell6 cells">
                    <Button className="evaluation-btu" onClick={()=>{promptStatusControl(true)}}>评价</Button>
                </View>
            </View>
        );
    }
}

export default Tbody;