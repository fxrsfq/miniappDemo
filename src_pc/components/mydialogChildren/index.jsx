import { Component } from '@tarojs/taro';
import { connect } from '@tarojs/redux';
import { View, Image, Text, RadioGroup, Radio, Textarea } from '@tarojs/components';
import Select from "pcComponents/mySelect";
import {DEFAULT_AUTO_RATE_PHRASE} from "tradePublic/autoRate/api";
import "taro-ui/dist/style/components/tabs.scss";
import "./index.css";

@connect((store) => {
    return {
        batch: store.toEvaluateReducer.batch,
        currentOrder:store.toEvaluateReducer.currentOrder,//要评价的宝贝信息
    };
})

/**
 * @description 弹出框 myDialog 的 children 部分
 * @author fuQiang
 * @class Prompt
 * @extends {Component}
 */
class Prompt extends Component {
    render() {
        const {batch, currentOrder} = this.props;
        return (
            <View class="prompt-container">
                <View className="prompt-main">
                    {
                        batch === false && <View className="order-detail">
                            <Image src={currentOrder.pic_path} className="order-detail-photo"></Image>
                            <View className="order-detail-words">
                                <Text className="order-detail-words-name mar-bottom">{cur.title}</Text>
                                <View className="order-detail-merchantcode mar-bottom">商家编码&nbsp;{2348972816378}</View>
                                <View className="order-detail-goods-attributes mar-bottom">
                                    <View className="order-detail-goods-attributes-a">
                                        <Text className="order-detail-goods-attributes-text">紫色</Text>
                                        <Text className="order-detail-goods-attributes-text">140CM，尺寸偏小，建议多拍大一号，胖子建议选大一码，切记</Text>
                                    </View >
                                    <Text className="order-detail-goods-attributes-b order-detail-goods-attributes-text">这是第三属性，如果有的话就显示粗来</Text>
                                </View>

                                <View className="order-detail-amount-information mar-bottom">
                                    <View>
                                        <Text className="order-detail-amount-aboriginal mar-right">¥109.00</Text>
                                        <Text className="order-detail-order-quantity">x2</Text>
                                    </View>
                                    <View>
                                        <Text className="order-detail-preferential mar-right">惠</Text>
                                        <Text className="order-detail-preferential-value mar-right">-¥98.99</Text>
                                        <Text className="order-detail-preferential-change mar-right">改</Text>
                                        <Text className="order-detail-preferential-change-value">+¥8.99</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    }

                    <View className="evaluation-input">
                        <View className="evaluation-result evaluation-input-child">
                            <Text className="evaluatioon-label">评价结果</Text>
                            <View >
                                {
                                    batch === false && <RadioGroup>
                                    <Radio value=""  value="good"></Radio>
                                    <Radio value=""  value="neutral"></Radio>
                                    <Radio value=""  value="bad"></Radio>
                                </RadioGroup>
                                }
                                {
                                    batch === true && <Radio value="good"></Radio>
                                }
                            </View>
                        </View>
                        <View className="evaluation-phrases evaluation-input-child">
                            <Text className="evaluatioon-label">选择短语</Text>
                            <Select className="evaluation-phrases-select" dataSource={DEFAULT_AUTO_RATE_PHRASE}></Select>
                            <Text className="evaluation-phrases-options-text">设置评价短语</Text>
                        </View>
                        <View className="evaluation-content evaluation-input-child">
                            <Text className="evaluatioon-label evaluation-content-label">评价内容</Text>
                            <Textarea className="evaluation-content-textarea" placeholder="请输入评价内容"></Textarea>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

export default Prompt;