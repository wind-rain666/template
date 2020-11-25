// import { getToken } from './auth'
import store from '../store/index.js';
import router from '../route/index.js';
import { Message } from 'element-ui';

// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  timeout: 10000 // request timeout
});

// request interceptor
service.interceptors.request.use(
  config => {
    config.headers['Authorization'] = store.state.user.token;
    config.headers['Content-Type'] = 'application/json; charset=utf-8';
    config.headers['Accept'] = '*/*';
    return config;
  },
  error => {
    console.error(error); // for debug
    return Promise.reject(error);
  }
);

// response interceptor
service.interceptors.response.use(
  response => {
    store.dispatch('extendTokenExpiresAt'); //token自动续期
    return response.data;
  },
  error => {
    console.error(error); // for debug
    if (error.response.status === 401) {
      store.dispatch('token', '');
      Message.error('请登录后操作');
      return router.push({
        name: 'userLogin'
      });
    }
    if (error.response) {
      if (typeof error.response.data == 'string' || error.response.data instanceof String) return Promise.reject(error.response.data);
      else if ('message' in error.response.data) return Promise.reject(error.response.data.message); 
    }

    return Promise.reject(error.toString());
  }
);

export default service;
