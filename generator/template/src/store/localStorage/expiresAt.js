
const ExpiresAtKey = 'expires_at';

/**
 * 从LocalStorage中获取token过期时间
 */
export function getExpiresAt() {
  return localStorage.getItem(ExpiresAtKey) ? parseInt(localStorage.getItem(ExpiresAtKey)) : null;
}

/**
 * 将token过期时间存入localStorage
 * @param {number} expiresIn token过期时间，精确到毫秒
 */
export function setExpiresAt(expiresAt) {
  return localStorage.setItem(ExpiresAtKey, expiresAt);
}

/**
 * 清除localStorage中的token过期时间
 */
export function removeExpiresAt() {
  return localStorage.removeItem(ExpiresAtKey);
}
