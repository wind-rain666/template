const UserDataKey = 'user_data';

/**
 * 从本地缓存中获取用户信息
 */
export function getUserData() {
  return localStorage.getItem(UserDataKey) ? JSON.parse(localStorage.getItem(UserDataKey)) : localStorage.getItem(UserDataKey);
}

/**
 * 将用户信息存进本地缓存中
 * @param {object} userData 用户信息
 */
export function setUserData(userData) {
  return localStorage.setItem(UserDataKey, JSON.stringify(userData));
}

/**
 * 清除本地缓存中的用户信息
 */
export function removeUserData() {
  return localStorage.removeItem(UserDataKey);
}
