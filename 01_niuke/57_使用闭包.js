// 实现函数 makeClosures，调用之后满足如下条件：
// 1、返回一个函数数组 result，长度与 arr 相同
// 2、运行 result 中第 i 个函数，即 result[i]()，结果与 fn(arr[i]) 相同


function makeClosures(arr, fn) {
    // 方法一
    // let result = []
    // for(var i = 0;i < arr.length;i++){
    //     result.push(fn.bind(this,arr[i]))
    // }
    // return result

    // 方法二
    let result = new Array(arr.length)
    for(let i = 0;i < arr.length;i++){      // 必须使用 let 声明
        result[i] = function(){
            return fn(arr[i])
        }
    }
    return result
}

var arr = [1,2,3]
var fn = function(x){
    return x * x
}

var result = makeClosures(arr,fn)

console.log(result);

console.log(result[2]())

console.log(fn(arr[2]))