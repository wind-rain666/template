const RoleListKey = 'roleList';

/**
 * 从localStorage中获取RoleList
 */
export function getRoleList() {
  return localStorage.getItem(RoleListKey) ? JSON.parse(localStorage.getItem(RoleListKey)) : localStorage.getItem(RoleListKey);
}

/**
 * 将用户角色信息存入localStorage中
 * @param {string[]} roleList 用户角色列表
 */
export function setRoleList(roleList) {
  return localStorage.setItem(RoleListKey, JSON.stringify(roleList));
}

/**
 * 清除本地存储中的用户角色信息
 */
export function removeRoleList() {
  return localStorage.removeItem(RoleListKey);
}
