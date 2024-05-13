// 请补全JavaScript代码，该函数接受两个参数分别为数组、索引值，
// 要求在不改变原数组的情况下返回删除了索引项的新数组。

const _delete = (array, index) => {

    if (index < 0) {
        return array
    }
    // 补全代码
    if (index < 0) return array;
    return array.filter((v, i) => i != index);
}

array = [1, 2, 3, 4, 5]

console.log(_delete(array, 1))