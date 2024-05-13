// 给你一个按照非递减顺序排列的整数数组 nums，和一个目标值 target。请你找出给定目标值在数组中的开始位置和结束位置。

// 如果数组中不存在目标值 target，返回 [-1, -1]。

// 你必须设计并实现时间复杂度为 O(log n) 的算法解决此问题。

// 示例 1：

// 输入：nums = [5,7,7,8,8,10], target = 8
// 输出：[3,4]
// 示例 2：

// 输入：nums = [5,7,7,8,8,10], target = 6
// 输出：[-1,-1]

var searchRange = function(nums, target) {
    let left = -1
    let right = -1
    for(let i = 0;i < nums.length;i++){
        if(nums[i] === target){
            left = i
            console.log(left);
            break
        }
        
    }

    for(let i = nums.length - 1;i >= 0;i--){
        if(nums[i] === target){
            right = i
            break
        }
        
    }

    const arr = [left,right]
    return arr
}

const res = searchRange([5,7,7,8,8,10],8)
console.log(res);