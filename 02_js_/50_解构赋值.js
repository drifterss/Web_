// let obj = {
//   state: [
//     { name: "jj", age: 18 },
//     { name: "jay", age: 20 },
//     { name: "jue", age: 25 },
//   ],
//   car:[
//     {name:'小米',price:21}
//   ]
// };

// // 对象的解构
// let { state } = obj;
// console.log(state);

// let arr = [1,2,3,4]
// // reduce 接收两个参数，第一个是回调函数，第二个是初始值
// // 回调函数的参数分别是 初始值的大小、数组中的元素大小、数组索引及源数组
// const sum = arr.reduce((pre,num,index,arr)=>{
//     console.log(arr[index]);
//     return pre + num
// },0)
// console.log(sum);

// let person = {name:"张三",age:18}

// for(let key in person){
//   console.log('@@',typeof(key));
// }

const obj = [{name:'JJ',age:18}]
console.log(Object.assign({[...obj],name:'AAA'}));
// console.log(obj);



const obj2 = Object.assign({...obj[0],name:'Jay'});
// console.log(obj2);




