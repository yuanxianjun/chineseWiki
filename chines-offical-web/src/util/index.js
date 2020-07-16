/**
 * @description 提取函数
 * @type {date} 2020-05-12 
 */
function extract(timeStr) {
    let resTime = {
        year: '',
        month: '',
        date: ''
    }
    let now = new Date(timeStr)
    resTime.year = now.getFullYear();
    resTime.month = now.getMonth() + 1;
    resTime.date = now.getDate();

    return resTime
}

// 加0函数
let formatNumber = function (n) {
    n = n.toString();
    return n[1] ? n : '0' + n
}

/**
 * @description 处理时间的函数
 * @type {date} 2020-05-12 
 * @type {time}  
 */
export function detailTime(itemString) {
    let getTime = extract(itemString)
    let res = getTime.year + "-" + formatNumber(getTime.month) + "-" + formatNumber(getTime.date);
    // 处理返回的日期 和 时间
    return res;
}

/**
 * @description 匹配英文的函数
 * @type {date} 返回的就是对应的英文月
 * @type {time}  
 */
export function EnMonth(itemString) {
    let en_mon = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Spt", "Oct", "Nov", "Dec"];
    let getTime = extract(itemString).month;
    return en_mon[getTime - 1]
}

/**
 * @description 返回单独的月份
 * @type {date} 
 * @type {time}  
 */
export function detailMonth(timeString) {
    var getTime = extract(timeString).month;
    return formatNumber(getTime)
}

/**
 * @description 返回单独的日
 * @type {date} 
 * @type {time}  
 */
export function detailDate(timeString) {
    var getTime = extract(timeString).date;
    return formatNumber(getTime)
}

/**
 * @description 返回单独的年
 * @type {date} 
 * @type {time}  
 */
export function detailYear(timeString) {
    var getTime = extract(timeString).year;
    return formatNumber(getTime)
}
