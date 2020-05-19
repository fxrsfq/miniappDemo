import { Component } from '@tarojs/taro';
import { View, Text, Checkbox, Image, Button } from '@tarojs/components';
import {toSelect, toSingleEvaluate, changeBatch} from "pcPages/batchEvaluations/action";

/** 
 * @description 订单列表组件
 */
class Tbody extends Component{

    /**
     * @description   单选
     * @memberof Tbody
     * @param selectType String 选择类型: single
     */
    singleSelect = (selectType, oid)=>{
        toSelect(selectType, oid);
    }

    /**
     * @description 单宝贝评价
     * @memberof Tbody
     * @param obj 订单id  {"tid":tid,"oid":oid}
     */
    singleBatch = ()=>{
        // 这个方法应该在弹框中使用
        // toSingleEvaluate(tid, oid);
        const {tid,oid} =this.props.order;
        console.log("singleBatch 实参 obj 为：",{tid,oid} );
        changeBatch("single", {tid,oid});
        this.props.promptStatusControl(true);
    }

    render(){
        //trades：一次交易 对应一个买家  orders：一次交易的订单数
        const {checked, pic_path, title, tid, oid, consign_time, num, payment, buyer_nick} = this.props.order;
        // console.log("tid：",tid,"oid：", oid);
        return (
            <View className="table-tbody-tr" key={oid}>
                <View className="cell0 cells">
                    <Checkbox className="check-box" checked={checked} onChange={()=>{this.singleSelect("single", oid)}}></Checkbox>
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
                    <Button className="evaluation-btu" onClick={this.singleBatch}>评价</Button>
                </View>
            </View>
        );
    }
}

export default Tbody;