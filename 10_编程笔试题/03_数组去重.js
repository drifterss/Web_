// 方法一：
let array = [1, 2, 2, 2, 4, 5];
// console.log(Array.from(new Set(array)));

// 方法二：使用 filter
let new_array = array.filter((item, index, array) => {
  return array.indexOf(item) == index;
});
console.log(new_array);

// 方法三：循环
let uniqueArray = [];

for (let i = 0; i < array.length; i++) {
  if (uniqueArray.indexOf(array[i]) === -1) {
    uniqueArray.push(array[i]);
  }
}

console.log(typeof(undefined)+'..');

