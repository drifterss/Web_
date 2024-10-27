

// 执行成功时的回调
// test().then((value) => {
//   console.log(value);
// });

let p1 = new Promise((resolve, reject) => {
  resolve("我是周杰伦");
});
// console.log(p1);

let p2 = new Promise((resolve, reject) => {
  resolve("歌名兰亭序");
});

let p3 = new Promise((resolve, reject) => {
  resolve("你好啊");
});

// await 接收一个 Promise 对象，必须放在 async 函数当中

async function test() {
    let data1 = await p1
    let data2 = await p2
    let data3 = await p3
    console.log(data1 + data2 + data3);
  }
test()