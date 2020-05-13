import Taro, { Component } from '@tarojs/taro';
import { Button, Text, View } from '@tarojs/components';
import { classNames, isFunction, NOOP } from "mapp_common/utils";

import './index.scss';

class MyDialog extends Component {
    constructor (props) {
        super(props);
    }

    // 点 x
    onCloseClick = () => {
        this.props.onClose();
    };

    onCancel = () => {
        isFunction(this.props.onCancel) && this.props.onCancel();
        if (this.props.onCancelClose) {
            this.onClose();
        }
    };

    //  点 确认
    onOk = () => {
        isFunction(this.props.onOk) && this.props.onOk();
        if (this.props.onOkClose) {
            this.onClose();
        }
    };

    // 点 取消
    onClose = () => {
        this.props.onClose();
    };

    handleClickOverlay = () => {
        if (this.props.closeOnClickOverlay) {
            this.onClose();
        }
    };

    render () {

        const { wrapperClassName, hasFooter, className, title, children, content, closeable, cancelText, confirmText, hasCancel, wrapperStyle } = this.props;
        console.log("\n", "children 部分：", children, "\n");
        return <View className={classNames('at-modal--active my-dialog-wrapper', wrapperClassName)} style={wrapperStyle}>
            <View className='at-modal__overlay' onClick={this.handleClickOverlay} />
            <View className={classNames('at-modal__container', className, { hidden:!this.props.visible })}>
                {title && (
                    // 标题 和 关闭X
                    <View className='dialog-title'>
                        <Text className='dialog-title-text'>{title}</Text>
                        {closeable && <Text className='iconfont iconfont-guanbi' onClick={this.onCloseClick} />}
                    </View>
                )}

                {/* 主体content */}
                <View className='my-dialog-content'>
                    {content && <View className='content-simple'>
                        {content}
                    </View>}
                    {children}
                </View>

                {/* 底部  footer */}
                {hasFooter && <View className='dialog-bottom'>

                    {cancelText && hasCancel && (
                        <Button className='btn-cancel' onClick={this.onCancel}>{cancelText}</Button>
                    )}
                    {confirmText && (
                        <Button className='btn-ok' type='primary' onClick={this.onOk}>{confirmText}</Button>
                    )}
                </View>
                }

            </View>
        </View>;
       
    }
}

MyDialog.defaultProps = {
    visible: true,//控制  content 部分的可见性
    wrapperClassName: '',//没用
    content: null,//弹出内容
    closeOnClickOverlay: false,
    cancelText: '取消',
    confirmText: '确认',
    className: '',
    title: null,
    children: null,//元素  and 组件
    hasFooter: false,//footer显示
    onClose: NOOP,
    onCancel: NOOP,
    onOk: NOOP,//点击确定的回调函数 
    hasCancel: true,
    closeable: true,
    onCancelClose: true,
    onOkClose: true,

};


export default MyDialog;
