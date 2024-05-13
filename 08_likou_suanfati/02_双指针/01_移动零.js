// 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。

// 请注意 ，必须在不复制数组的情况下原地对数组进行操作。

// 示例 1:

// 输入: nums = [0,1,0,3,12]
// 输出: [1,3,12,0,0]

var moveZeroes = function(nums) {

    if(nums.length === null) return 

    let j = 0
    // 参考了快速排序的思想,相当于把 非 0 的数都放在左边，零的数放在右边
    for(let i = 0;i < nums.length;i++){
        if(nums[i] !== 0){
            let temp = nums[i]
            nums[i] = nums[j]
            nums[j] = temp
            j++
        }
    }
    // console.log(nums);
    return nums
};

const res = moveZeroes([0,1,0,3,12])
console.log(res);