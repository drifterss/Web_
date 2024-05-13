// // 使用 JSON.parse 和 JSON.stringfy 方法
// let userA = {
//     name:"张三",
//     age:20
// }

// // JSON.stringify: 将对象转换为 JSON 字符串
// // JSON.parse： 将JSON字符串转换为对象，在这个转换过程中，开辟了新的内存空间 
// let userB = JSON.parse(JSON.stringify(userA))

// userB.age = 18
// console.log(userA);



// 使用 递归的方法 实现深拷贝 
let obj = {
    name:'jj',
    age:'18',
    msg:{
        song:'幸存者'
    },
    color:['red','purple','yellow']
}

function deepCopy(newObj,oldObj){
    for(var key in oldObj){
        item = oldObj[key]

        // 1、判断该属性是否为数组
        if(Object.prototype.toString.call(item) === Array){
            newObj[key] = []
            deepCopy(newObj[key],item)
        }// 2、判断该属性是否为对象
        else if(Object.prototype.toString.call(item) === Object){
            newObj[key] = {}
            deepCopy(newObj[key],item)
        }
        
        else{
            // 3、该属性为基本数据类型
            newObj[key] = item
        }
    }
    return newObj
}  

let newObj = {}
newo = deepCopy(newObj,obj)
// console.log(newo);
newo.name = '林俊杰'

console.log(newo);
console.log(obj);

// // ③ 使用 Object.assign()
// let userA = {
//     name:'李四',
//     age:12
// }
// let userB = Object.assign({},userA)
// userB.age = 30
// console.log(userA);
// console.log(userB);