import request from '../utils/request';

/**
 * 用户登录接口
 * @param {string} identity 用户唯一标识（用户名、邮箱或手机号）
 * @param {string} password 用户密码（MD5加密）
 */
export function loginApi(identity, password) {
  return request({
    url: '/users/login',
    method: 'post',
    data: {
      identifier: identity,
      password: password
    }
  });
}
