/**
 * 格式化错误信息，用于提示查看
 * @param {any} error 错误信息
 */
export function parseError(error) {
  return typeof error === 'string' || error instanceof String ? `${error}` : JSON.stringify(error) === '{}' ? error.toString() : JSON.stringify(error);
}
