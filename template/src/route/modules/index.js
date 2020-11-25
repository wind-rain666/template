export default [
  {
    path: '/redirect/:path(.*)',
    component: () => import('../../views/redirect/index')
  },
  {
    path: '/',
    name: 'home',
    redirect: '/dashboard'
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    meta: { title: '首页', svg: 'dashboard', layout: true },
    component: () => import('../../views/dashboard/index.vue')
  }
];
