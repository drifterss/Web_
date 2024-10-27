function test(str1,str2){
    var flag = false
    var promise = new Promise((resolve,reject)=>{
        if(flag){
            // 成功时的回调，str1 相当于 value
            resolve(str1)
        }else{  
            // 失败时的回调，str2 相当于 reason
            reject(str2)
        }
    })
    return promise
}

test('成功',"失败").then((value)=>{

    console.log(value);
},(reason)=>{
    console.log(reason);
})