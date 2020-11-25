import router from './index';
import store from '../store/index';
import NProgress from 'nprogress';
import { Message } from 'element-ui';

const whiteList = ['/user/login'];

//全局路由前置守卫
router.beforeEach((to, from, next) => {
  NProgress.start();

  store.dispatch('setLayout', to.meta.layout);

  if (whiteList.find(item => to.path === item)) return next();

  if (!store.state.user.token || !store.state.user.expiresAt || store.state.user.expiresAt < Date.now()) return next(`/user/login?redirect=${to.name}`);

  if (to.meta.guardList && !to.meta.guardList.some(guard => store.state.user.guards.includes(guard))) {
    Message.error('无权使用该功能');
    return next({ name: 'home', replace: true });
  }

  return next();
});

//全局路由后置守卫
router.afterEach((to, from) => {
  NProgress.done();
});
