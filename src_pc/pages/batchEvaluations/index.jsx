import { Component } from '@tarojs/taro';
import { View, Text, ScrollView, Checkbox, Button } from '@tarojs/components';

import "taro-ui/dist/style/components/tabs.scss";
import "./index.css";

import EvaluationsList from "pcComponents/evaluationsList";

import MyPagination from "pcComponents/myPagination";

/**
 * @description 批量评价根 组件 
 * @author fuQiang
 * @class BatchDelete
 * @extends {Component}
 */
class BatchEvaluations extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tabTitle: "全部"//选项卡样式 关键字
        }
        this.tabClick = this.tabClick.bind(this);
    }
    tabClick = (title) => {
        this.setState({ tabTitle: title });
    }
    render() {
        // 选项卡列表
        const tabList = [{ title: '全部' }, { title: '买家已评' }, { title: '买家未评' }].map((cur) => {
            return <View className="tab" onClick={() => { this.tabClick(cur.title) }} key={cur.title}>
                <Text className={this.state.tabTitle === cur.title ? "tab-text-click" : "tab-text"} >
                    {cur.title}
                </Text>
            </View>;
        });
        return (
            <View>
                <View className="batch-evaluations-main">
                    {/* 顶部导航条 */}
                    <ScrollView className="tabs" enableFlex="true">
                        {tabList}
                    </ScrollView>

                    {/* 评价列表 列表渲染*/}
                    <EvaluationsList></EvaluationsList>
                </View>
                <View className="batch-evaluations-footer">
                    {/* 全选 表单*/}
                    <View className="batch-operation">
                        <View className="check-all">
                            <Checkbox className="check-all-checkbox"></Checkbox>
                            <View className="check-all-information">
                                <Text className="check-all-keys">全选(已选)</Text>
                                <Text className="check-all-quantity">1</Text>
                            </View>
                        </View>
                        <Button className="batch-evaluate-btu">批量评价</Button>
                    </View>
                    {/* 批量评价 按钮*/}
                    <View>
                        <MyPagination total="5" pageSize="8" shape="normal" current="1"></MyPagination>
                    </View>
                </View>
                {/* 批量评价踏出框 */}
                <View></View>
                {/* 单宝贝评价弹出框 */}
                <View></View>
                {/* 评价成功弹出框 */}
                <View></View>
            </View>
        );
    }
}

export default BatchEvaluations;