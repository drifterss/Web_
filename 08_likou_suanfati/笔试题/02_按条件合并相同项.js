function adjoin(arr, condition) {
    const result = []
    let temp = []
  
    for (const item of arr) {
      if (condition(item)) {
        // 如果满足条件，将当前项放入临时数组中
        temp.push(item)
      } else {
        if (temp.length > 0) {
          // 如果临时数组有内容，将其作为一个整体放入结果数组中
          result.push(temp)
          temp = []
        }
        result.push(item); // 将不满足条件的项直接放入结果数组中
      }
    }
  
    if (temp.length > 0) {
      // 处理末尾还未放入结果数组的临时数组内容
      result.push(temp)
    }
  
    return result
  }
  
  // 示例
  const result1 = adjoin([1, 2, 3, 4, 5], item => item !== 3);
  console.log(result1); // [[1, 2], 3, [4, 5]]
  
  const result2 = adjoin([1, 2, 3, 4], item => item < 3);
  console.log(result2); // [[1, 2], 3, 4]
  