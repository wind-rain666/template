import Vue from 'vue';
import VueRouter from 'vue-router';
import indexRouter from './modules/index';
import userRouter from './modules/user';
import systemRouter from './modules/system';
import notFoundRouter from './modules/404';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: indexRouter.concat(userRouter, systemRouter).concat(notFoundRouter)
});
