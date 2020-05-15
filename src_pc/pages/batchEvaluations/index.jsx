import Taro, { Component } from '@tarojs/taro';
import { View, Text, ScrollView, Checkbox, Button } from '@tarojs/components';
import "taro-ui/dist/style/components/tabs.scss";
import "./index.css";
import { connect } from '@tarojs/redux';
import EvaluationsList from "pcComponents/evaluationsList";
import MyPagination from "pcComponents/myPagination";
import MyDialog from "pcComponents/myDialog";
import Prompt from "pcComponents/mydialogChildren";
import {getDataToStore} from "./action";
import {soldGet} from "tradePublic/tradeDataCenter/api/soldGet";

@connect((store) => {
    return {
        // searchVal: store.refundListReducer.searchVal,
        // activeTabKey: store.refundListReducer.activeTabKey,
        // pageNo: store.refundListReducer.pageNo,
        // pageSize: store.refundListReducer.pageSize,
        // tradeCounts: store.refundListReducer.tradeCounts,
        // list: store.refundListReducer.list,
        evaluationsListData:store.evaluationsListData
    };
})

/**
 * @description 批量评价根 组件 父
 * @author fuQiang
 * @class BatchDelete
 * @extends {Component}
 */
class BatchEvaluations extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tabTitle: "全部",//选项卡样式 关键字,
            promptStatus: false,//弹框状态 true：显示 false：取消
        }
        // this.tabClick = this.tabClick.bind(this);
        // this.promptStatusControl = this.promptStatusControl.bind(this);
    }
    componentDidMount(){
        //挂载请求订单列表数据  
       soldGet({
            // result   {trades,totalResults,has_next}
            callback:(result) => {
               console.log("获取到的订单列表为abc：", result);
               getDataToStore(result);
           },
           errCallback:(err)=>{
               console.error("拉取订单列表异常");
           }
       });
    // soldGet().then((result)=>{

    //     console.log("获取到的数据为abc：", result);
    // }, (err)=>{
    //     console.error("获取订单评价列表失败，异常如下：", err);
    // });
    }
    // 选项卡样式 切换
    tabClick = (title) => {
        this.setState({ tabTitle: title });
    }
    // 弹出框弹出状态 显示或取消
    promptStatusControl = (arg) => {
        this.setState({ promptStatus: arg });
    }
    // 全选 反选
    // toSelect = ()=>{
    // } 
  
    render() {
        // console.log("组件拿到了数据！",this.props.evaluationsListData);
        const { tabTitle, promptStatus } = this.state;
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
                    <EvaluationsList promptStatusControl={this.promptStatusControl}></EvaluationsList>
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
                        <Button className="batch-evaluate-btu" onClick={() => { this.promptStatusControl(true) }}>批量评价</Button>
                    </View>
                    {/*  分页按钮 list */}
                    <View>
                        <MyPagination total="5" pageSize="8" shape="normal" current="1"></MyPagination>
                    </View>
                </View>
                {/* 批量评价 || 单宝贝评价 弹出框 */}
                <View>
                    {promptStatus && <MyDialog onClose={() => { this.promptStatusControl(false) }} hasFooter="true" title="评价" className="mydialog-cite">
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