if(!self.__appxInited) {
self.__appxInited = 1;


require('./config$');


  var AFAppX = self.AFAppX.getAppContext
    ? self.AFAppX.getAppContext().AFAppX
    : self.AFAppX;
  self.getCurrentPages = AFAppX.getCurrentPages;
  self.getApp = AFAppX.getApp;
  self.Page = AFAppX.Page;
  self.App = AFAppX.App;
  self.my = AFAppX.bridge || AFAppX.abridge;
  self.abridge = self.my;
  self.Component = AFAppX.WorkerComponent || function(){};
  self.$global = AFAppX.$global;
  self.requirePlugin = AFAppX.requirePlugin;
          

if(AFAppX.registerApp) {
  AFAppX.registerApp({
    appJSON: appXAppJson,
  });
}



function success() {
require('../../app');
require('../../public/mapp_common/marketing/modalAD/ModalADpc?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../public/mapp_common/marketing/modalAD/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../public/mapp_common/marketing/bannerAD/bannerADpc?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../public/mapp_common/marketing/bannerAD/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../public/mapp_common/marketing/afterActionAD/afterActionPC?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../public/mapp_common/marketing/afterActionAD/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../public/mapp_common/marketing/renewBox/renewBoxPC?hash=741099c67ffc48c87975c63aaac2d777f1c3cd36');
require('../../public/mapp_common/marketing/renewBox/index?hash=741099c67ffc48c87975c63aaac2d777f1c3cd36');
require('../../public/mapp_common/marketing/midCoupon/midCouponPC?hash=741099c67ffc48c87975c63aaac2d777f1c3cd36');
require('../../public/mapp_common/marketing/midCoupon/index?hash=741099c67ffc48c87975c63aaac2d777f1c3cd36');
require('../../public/mapp_common/marketing/notice/noticePC?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../public/mapp_common/marketing/notice/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../public/mapp_common/marketing/modalVIP/ModalVIPpc?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../public/mapp_common/marketing/modalVIP/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../public/mapp_common/marketing/midCard/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../npm/taro-ui/dist/weapp/components/modal/header/index?hash=a11fdcdff8ea970c65f185a8731cafe48f67047c');
require('../../npm/taro-ui/dist/weapp/components/modal/content/index?hash=a11fdcdff8ea970c65f185a8731cafe48f67047c');
require('../../npm/taro-ui/dist/weapp/components/modal/action/index?hash=a11fdcdff8ea970c65f185a8731cafe48f67047c');
require('../../npm/taro-ui/dist/weapp/components/modal/index?hash=c386a5f0f6c503592f4411f09072ccbd92d45fd4');
require('../../public/mapp_common/marketing/payResult/payResultPC?hash=5e7f8f4b2ec58f467543f991a56ae695799c9e67');
require('../../public/mapp_common/marketing/payResult/index?hash=5e7f8f4b2ec58f467543f991a56ae695799c9e67');
require('../../public/mapp_common/marketing/index?hash=4001dd8bc322ab0d74e00e4291a3c747112587ca');
require('../../public/mapp_common/marketing/notice/pcNoticeBallon?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../public/mapp_common/components/myTab/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/emptyPage/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/refundManagement/orderCard/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/refundManagement/refundCard/index?hash=3fa1172147070a407af8e26f677a8eee1cd8e764');
require('../../components/refundManagement/refundList/index?hash=3d3c07e6370a0ac6e0a30be6ad26c12c31bcc5ac');
require('../../components/myPagination/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../pages/refundManagement/index?hash=21a15d8a6cfbcd58f16c8fc4fd5c8e6d38df4254');
require('../../components/evaluationsList/tBody?hash=a11fdcdff8ea970c65f185a8731cafe48f67047c');
require('../../components/evaluationsList/index?hash=69d15fc2ffaed0c4804a78ee3a34e905b2dc66ca');
require('../../components/myDialog/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/mySelect/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/mydialogChildren/index?hash=285de49aaeb0bd9d5b11dee26968b1991b4340e1');
require('../../pages/batchEvaluations/index?hash=5e4fe9cfe71a54fb4c7b7e713ce0564e519dc620');
require('../../components/testDialog/index?hash=5e7f8f4b2ec58f467543f991a56ae695799c9e67');
require('../../components/myDialog/confirmDialog?hash=395a7bf4d772b4a41d34f914f75cf6f53d0c325a');
require('../../components/myDialog/InputDialog?hash=395a7bf4d772b4a41d34f914f75cf6f53d0c325a');
require('../../components/dialogManager/index?hash=5d42a8715427921ffee642338deb4f4bdb551e34');
require('../../components/miniapp-router/router-view/router-view?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../pages/index/index?hash=061c90a37bb40ed0df539f86a59f9e979f576959');
}
self.bootstrapApp ? self.bootstrapApp({ success }) : success();
}