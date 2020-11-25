/**
 * 验证登录表单
 * @param {object} formData 登录表单信息
 */
export function validateForm(formData) {
  if (!formData.identity) return '请输入用户名、手机号码或邮箱';
  if (formData.identity.length < 2) return '用户名不得小于2位';
  if (!formData.password || formData.password.length < 6) return '用户名或密码错误';
}
