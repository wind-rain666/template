export default [
  {
    path: '/user',
    name: 'user',
    meta: { title: '用户管理', svg: 'user-manager', layout: true },
    redirect: '/user/list'
  },
  {
    path: '/user/list',
    name: 'userList',
    meta: { title: '用户列表', svg: 'user', layout: true, parentMenu: 'user' },
    component: () => import('../../views/user/list/index.vue')
  },
  {
    path: '/user/login',
    name: 'userLogin',
    meta: { title: '用户登录', noCache: true },
    component: () => import('../../views/user/login/index.vue')
  }
];
