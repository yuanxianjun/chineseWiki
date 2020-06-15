/**
 * @description 处理时间的函数
 * @type {date} 2020-05-12 
 * @type {time}  
 */
export function detailTime(itemString) {
    let formatNumber = function (n) {
        n = n.toString();
        return n[1] ? n : '0' + n
    }
    let now = new Date(itemString)
    let year = now.getFullYear();
    let month = now.getMonth() + 1;
    let date = now.getDate();
    let res = year + "-" + formatNumber(month) + "-" + formatNumber(date);

    // 处理返回的日期 和 时间
    return res;
}