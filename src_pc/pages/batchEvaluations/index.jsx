import { Component } from '@tarojs/taro';
import { View, Text, ScrollView, Checkbox, Button } from '@tarojs/components';
import "taro-ui/dist/style/components/tabs.scss";
import "./index.css";

import EvaluationsList from "pcComponents/evaluationsList";
import MyPagination from "pcComponents/myPagination";

import MyDialog from "pcComponents/myDialog";
import Prompt from "pcComponents/mydialogChildren";
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
            tabTitle: "全部",//选项卡样式 关键字,
            promptStatus:fasle,//弹框状态
        }
        this.tabClick = this.tabClick.bind(this);
        this.evaluateBtuClick = this.evaluateBtuClick.bind(this);
    }
    // 选项卡样式 切换
    tabClick = (title) => {
        this.setState({ tabTitle: title });
    }
    // 弹出框弹出状态 显示或取消
    promptStatusControl =(arg)=>{ 
        this.setState({promptStatus:arg});
    }
   

    render() {
        const {tabTitle, promptStatus} = this.state;
        // 选项卡列表
        const tabList = [{ title: '全部' }, { title: '买家已评' }, { title: '买家未评' }].map((cur) => {
            return <View className="tab" onClick={() => { this.tabClick(cur.title) }} key={cur.title}>
                <Text className={tabTitle === cur.title ? "tab-text-click" : "tab-text"} >
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
                        <Button className="batch-evaluate-btu" onClick={()=>{this.promptStatusControl(true)}}>批量评价</Button>
                    </View>
                    {/*  分页按钮 list */}
                    <View>
                        <MyPagination total="5" pageSize="8" shape="normal" current="1"></MyPagination>
                    </View>
                </View>
                {/* 批量评价 || 单宝贝评价 弹出框 */}
                <View>
                    {promptStatus && <MyDialog onCancel={()=>{this.promptStatusControl(false)}} hasFooter="true" title="评价" className="mydialog-cite">
                        <Prompt></Prompt>
                    </MyDialog>}
                </View>
                {/* 评价成功弹出框 */}
                <View></View>
            </View>
        );
    }
}

export default BatchEvaluations;