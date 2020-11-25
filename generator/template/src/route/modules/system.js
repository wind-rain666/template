export default [
  {
    path: '/system',
    name: 'system',
    meta: { title: '系统管理', svg: 'system', layout: true },
    redirect: '/system/log/list'
  },
  {
    path: '/system/log/list',
    name: 'systemLogList',
    meta: { title: '系统日志', svg: 'log', layout: true, parentMenu: 'system' },
    component: () => import('../../views/settings/systemLog/index.vue')
  }
];
