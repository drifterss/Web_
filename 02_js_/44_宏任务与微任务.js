console.log(1) // 同步
setTimeout(() => {
  console.log(2) // 异步：宏任务 setTimeout1
  Promise.resolve().then(() => { // 异步：微任务 then1
    console.log(3)
  })
});
console.log(4) // 同步
new Promise((resolve,reject) => {
  console.log(5) // 同步
  resolve()
}).then(() => { // 异步：微任务 then2
  console.log(6)
  setTimeout(() => {
    console.log(7) // 异步：宏任务 setTimeout2
  })
})
console.log(8) // 同步

// 步骤：先同步，再异步（先微任务，再宏任务）  1、4、5、8、6、2、3、7
// 首先执行                 产生任务                             剩余任务
// 1，4，5，8           宏：setTimeout1                         宏：setTimeout1
//                      微：.then                               微：.then

//     6                宏：setTimeout2                         宏：setTimeout1 
//                                                              宏：setTimeout2

//     2                微：.then                                微：.then
//                                                              宏：setTimeout2

//     3                                                        宏：setTimeout2
//     7