const GuardListKey = 'guardList';

/** 从localStorage中获取用户权限列表 */
export function getGuardList() {
  return localStorage.getItem(GuardListKey) ? JSON.parse(localStorage.getItem(GuardListKey)) : localStorage.getItem(GuardListKey);
}

/**
 * 将用户权限列表存入localStorage中
 * @param {string[]} guardList 用户权限列表
 */
export function setGuardList(guardList) {
  return localStorage.setItem(GuardListKey, JSON.stringify(guardList));
}

/** 清除本地存储中的用户权限信息 */
export function removeGuardList() {
  return localStorage.removeItem(GuardListKey);
}
