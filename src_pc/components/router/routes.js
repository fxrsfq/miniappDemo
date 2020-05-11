 /*
    路由导航条的显示信息
    routes：顶部导航菜单
    children：单个菜单项的siderBar导航菜单
 */
export const routes = [
    {
        name: '订单管理',
        path: '/tradeManagement',
        abstract: true,
        children: [
            {
                name: '退款管理',
                default: true,
                component: 'refundManagement',
                path: '/refundManagement',
                icon: 'iconfont-tuikuanguanli',

            },
            {
                name: '批量删除',
                component: 'batchEvaluations',//目录名 映射其下的index.jsx
                path: '/batchEvaluations',
                icon: 'iconfont-tuikuanguanli',
            }
        ],
    }
];
export const defaultPath = '/tradeManagement/refundManagement';
