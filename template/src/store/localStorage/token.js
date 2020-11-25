const TokenKey = 'token';

/**
 * 从localStorage中获取token
 */
export function getToken() {
  return localStorage.getItem(TokenKey);
}

/**
 * 将token信息存入local storage
 * @param {string} token token值
 */
export function setToken(token) {
  return localStorage.setItem(TokenKey, token);
}

/**
 * 清除本地存储中的token信息
 */
export function removeToken() {
  return localStorage.removeItem(TokenKey);
}
