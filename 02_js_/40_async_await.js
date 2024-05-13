async function test(){
    return Promise.resolve("专心学习")
}

// 执行成功时的回调
test().then((value) => {
    console.log(value);
})