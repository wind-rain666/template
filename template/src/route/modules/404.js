export default [
  {
    path: '/404',
    meta: { title: '404', layout: false },
    component: () => import('../../views/404/index.vue')
  },
  {
    path: '*',
    redirect: '/404'
  }
];
