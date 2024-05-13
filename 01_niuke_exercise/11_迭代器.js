// 迭代器是一个对象，需要满足：对象内部有方法next，next方法要求返回对象{done: true或false, value:值 }

const arr = ["a","b"]
// 数组默认是一个可迭代对象，就好比题目中的对象x
const iterator = arr[Symbol.iterator]() // 拿到迭代器
console.log(iterator.next());
console.log(iterator.next());
// { value: 'a', done: false }
// { value: 'b', done: false }
// { value: undefined, done: true }