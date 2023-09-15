/**
 * 首字母大写转换
 * @param str 英文名称
 * @returns
 */
export function capitalizeFirstLetter(str: string) {
  return `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
}
