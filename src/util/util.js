// 获取路由参数
/**
 * 获取url 参数
 * @param name
 * @returns {*}
 */
// eslint-disable-next-line import/prefer-default-export
export function getParams(name) {
    if (name) {
        const reg = new RegExp(`(^|&)${name}=([^&]*)(&|$)`, 'i');
        const r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]);
        return null;
    }
    let queryStr = window.location.search;
    if (!queryStr) {
        return {};
    }
    queryStr = queryStr.substr(1);
    const temp = queryStr.split('&');
    const result = {};
    for (let i = 0; i < temp.length; i++) {
        result[temp[i].split('=')[0]] = temp[i].split('=')[1];
    }
    return result;

}
