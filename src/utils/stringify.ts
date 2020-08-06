/**
 * 拼接对象为请求字符串
 * @param {Object} obj - 待拼接的对象
 * @returns {string} - 拼接成的请求字符串
 */
export default function stringify(obj: object) {
    let params = [];
    Object.keys(obj).forEach(key => {
        let value = obj[key];
        if (value === null) return;
        params.push([key, encodeURIComponent(value)].join('='));
    });
    return params.join('&');
}