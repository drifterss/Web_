// 给你一个 非严格递增排列 的数组 nums ，请你 原地 删除重复出现的元素，使每个元素 只出现一次 ，返回删除后数组的新长度。
// 元素的 相对顺序 应该保持 一致 。然后返回 nums 中唯一元素的个数

var removeDuplicates = function (nums) {

    // 第一种方法：单循环 + indexOf
    //   let arr = []
    //   arr.push(nums[0])

    //   for(let i = 0;i < nums.length;i++){

    //     // indexOf : 如果找不到指定的元素，返回值为 -1
    //     if(arr.indexOf(nums[i]) === -1 ){
    //         arr.push(nums[i])
    //     }
    //   }
    //   console.log(arr);
    //   return arr


    // 第二种方法 :把数组转换为集合
    // var set = new Set(nums)
    // console.log(set)
    // newarr = Array.from(set)
    // console.log(newarr);

    // 第三种方法：最优解法
    // 创建一个慢指针 i，指向数组第一位数字，再创建一个快指针 j，指向数组第二位。
    // 若 nums[j] 和 nums[i] 不等，则先将 i 递增 1，然后把 nums[i] 改为 nums[j]
    // 因为最初 iii 等于 000 时的数字未统计，所以最终返回结果需要 +1+1+1

    if (!nums.length) return 0;
    let i = 0;
    for (let j = 1; j < nums.length; j++) {
        if (nums[j] !== nums[i]) {
            i++;
            nums[i] = nums[j];
        }
    }
    console.log(nums);
    return i + 1;

};

arr = [1, 2, 3, 6, 3]
removeDuplicates(arr)
