
const ExpiresInKey = 'expires_in';

/**
 * 从LocalStorage中获取token有效期
 */
export function getExpiresIn() {
  return localStorage.getItem(ExpiresInKey) ? parseInt(localStorage.getItem(ExpiresInKey)) : null;
}

/**
 * 将token有效期存入localStorage
 * @param {number} expiresIn token有效期，单位：毫秒
 */
export function setExpiresIn(expiresIn) {
  return localStorage.setItem(ExpiresInKey, expiresIn);
}

/**
 * 清除localStorage中的token有效期
 */
export function removeExpiresIn() {
  return localStorage.removeItem(ExpiresInKey);
}
