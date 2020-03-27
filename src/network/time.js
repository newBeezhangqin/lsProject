//传入一个数字返回日期  
export function numTime(dayNumber) {
    var day1 = new Date();
    day1.setTime(day1.getTime() - 24 * 60 * 60 * 1000 * dayNumber);

    function conver(s) {
        return s < 10 ? '0' + s : s;
    }
    var s1 = day1.getFullYear() + "-" + conver((day1.getMonth() + 1)) + "-" + conver(day1.getDate());
    return s1;
}
// 传入日期返回月份的数组
export function monthTime(dayNumber) {
    var day1 = new Date();
    day1.setTime(day1.getTime() - 24 * 60 * 60 * 1000 * (dayNumber + 30));

    function conver(s) {
        return s < 10 ? '0' + s : s;
    }
    var time1 = day1.getFullYear() + "-" + conver((day1.getMonth() + 1)) + '-' + '01'
    var time2 = day1.getFullYear() + "-" + conver((day1.getMonth() + 1)) + '-' + '31'
    return [time1, time2];
}
//传入一个时间的数组 
export function changeTime(newData) {
    var one = newData[0];
    var two = newData[1];
    var now = new Date(); // 设置现在的时间
    one = new Date(one.replace(/-/g, "/")); //转换第一次的时间
    two = new Date(two.replace(/-/g, "/")); //转换第二次的时间
    var getdays1 = now - one; // 
    var getdays2 = now - two;
    var time1 = parseInt(getdays1 / (1000 * 60 * 60 * 24)); // 得到第一天相隔的时间
    var time2 = parseInt(getdays2 / (1000 * 60 * 60 * 24)); //得到第二天相隔的时间  
    return [time1, time2];
}