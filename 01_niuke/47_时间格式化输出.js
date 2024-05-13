// 按所给的时间格式输出指定的时间
// 格式说明
// 对于 2014.09.05 13:14:20
// yyyy: 年份，2014
// yy: 年份，14
// MM: 月份，补满两位，09
// M: 月份, 9
// dd: 日期，补满两位，05
// d: 日期, 5
// HH: 24制小时，补满两位，13
// H: 24制小时，13
// hh: 12制小时，补满两位，01
// h: 12制小时，1
// mm: 分钟，补满两位，14
// m: 分钟，14
// ss: 秒，补满两位，20
// s: 秒，20
// w: 星期，为 ['日', '一', '二', '三', '四', '五', '六'] 中的某一个，本 demo 结果为 五

// 输入：
// formatDate(new Date(1409894060000), 'yyyy-MM-dd HH:mm:ss 星期w')
// 输出：
// 2014-09-05 13:14:20 星期五

function formatDate(time, str) {

    arr = ['日', '一', '二', '三', '四', '五', '六']

    // 获取年月日
    year = time.getFullYear()
    // console.log(typeof year)   // number

    // console.log(typeof str);
    if(str.indexOf('yyyy') != -1){
        year = year
       
    }else if(str.indexOf('yy') != -1){
        year = year % 100
    
    }

    month = time.getMonth() + 1
    if(str.indexOf('MM') != -1){
        month = month < 10 ? '0' + month:month
       
    }else if(str.indexOf('M') != -1){
        month = month
        
    }

    day = time.getDate()
    if(str.indexOf('dd') != -1){
        day = day < 10 ? '0' + day:day
       
    }else if(str.indexOf('d') != -1){
        day = day
        
    }

    // 获取时分秒
    hour = time.getHours()
    if(str.indexOf('HH') != -1){
        hour = hour < 10 ? '0' + hour:hour
       
    }else if(str.indexOf('H') != -1){
        hour = hour 
    }else if(str.indexOf('hh') != -1){
        hour = hour % 12
        hour = hour < 10 ? '0' + hour:hour
    }else if(str.indexOf('h') != -1){
        hour = hour % 12
    }

    minute = time.getMinutes()
    if(str.indexOf('mm') != -1){
        minute = minute < 10 ? '0' + minute:minute
        
    }else if(str.indexOf('m') != -1){
        minute = minute
     
    }

    second = time.getSeconds()
    if(str.indexOf('ss') != -1){
        second = second < 10 ? '0' + second:second
       
    }else if(str.indexOf('s') != -1){
        second = second
      
    }

    // 周几
    week = time.getDay()
    if(str.indexOf('w') != -1){
        w = week
    }


    now_time = year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second + ' 星期' + arr[w]

    console.log(now_time);

}

formatDate(new Date(1409894060000), 'yyyy-MM-dd HH:mm:ss 星期w')

formatDate(new Date(), 'yyyy-M-d hh:m:ss 星期w')

// var time = new Date()

// arr = ['日', '一', '二', '三', '四', '五', '六']

// // 获取年月日
// year = time.getFullYear()
// month = time.getMonth() + 1
// day = time.getDate()

// // 获取时分秒
// hour = time.getHours()
// minute = time.getMinutes()
// second = time.getSeconds()

// // 周几
// week = time.getDay()

// now_time = year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second + ' 星期' + arr[week]

// console.log(now_time);


// 方法二
// function formatDate_(date, format) {
//     let addZero = function (data) {
//         if (data < 10) {
//             return '0' + data
//         }
//         return data
//     }
//     let obj = {
//         'yyyy': date.getFullYear(),
//         'yy': date.getFullYear() % 100,
//         'MM': addZero(date.getMonth() + 1),
//         'M': date.getMonth() + 1,
//         'dd': addZero(date.getDate()),
//         'd': date.getDate(),
//         'HH': addZero(date.getHours()),
//         'H': date.getHours(),
//         'hh': addZero(date.getHours() % 12),
//         'h': date.getHours() % 12,
//         'mm': addZero(date.getMinutes()),
//         'm': date.getMinutes(),
//         'ss': addZero(date.getSeconds()),
//         's': date.getSeconds(),
//         'w': function () {
//             arr = ['日', '一', '二', '三', '四', '五', '六']
//             return arr[date.getDay()]
//         }()
//     }
//     for (let i in obj) {
//         format = format.replace(i, obj[i])
//     }
//     return format
// }