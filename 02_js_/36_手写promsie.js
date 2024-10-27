//  ① Promise是异步编程的一种解决方案，new Promise是一个对象，可以获取异步操作的消息，避免了地狱回调
//  ② Promise有三种状态，pending(等待)、fulfilled(成功)、rejected(失败)
//  ③ Promise拥有一个then方法，用于resolved和rejected状态下的值
//  ④ then方法接收两个函数作为参数，第一个是成功时的回调，第二个是失败时的回调
//  ⑤ then 方法返回一个新的Promise对象，因此可以通过链式调用then方法


// promise解决方式
function fn(str) {
    var promise = new Promise(function (resolve, reject) { //resolve 是成功的方法  reject处理失败，Promise中包裹异步任务
        //处理异步任务
        var flag = true;
        setTimeout(function () {
            if (flag) {
                resolve(str)
            }
            else {
                reject('失败')
            }
        })
    })
    return promise;
}
 
fn('张三')
    .then((res) => { // then方法中，第一个是成功，第二个是失败。 返回的还是一个promise对象
        console.log(res);//打印张三  res是执行
        return fn('李四');
    },()=>{
        console.log('失败');
    })
    .then((res) => {
        console.log(res);
        return fn('王五')
    })
    .then((res) => {
        console.log(res);
    })
    .catch((res) => { //catch是失败执行的方法
        console.log(res);
    })