'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/*
   路由导航条的显示信息
   routes：顶部导航菜单
   children：单个菜单项的siderBar导航菜单
*/
var routes = exports.routes = [{
  name: '订单管理',
  path: '/tradeManagement',
  abstract: true,
  children: [{
    name: '退款管理',
    default: true,
    component: 'refundManagement',
    path: '/refundManagement',
    icon: 'iconfont-tuikuanguanli'

  }, {
    name: '批量删除',
    default: true,
    component: 'BatchEvaluations',
    path: '/batchEvaluations',
    icon: 'iconfont-tuikuanguanli'

  }]
}];
var defaultPath = exports.defaultPath = '/tradeManagement/refundManagement';