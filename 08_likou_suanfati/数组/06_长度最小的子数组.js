// 给定一个含有 n 个正整数的数组和一个正整数 target

// 找出该数组中满足其总和大于等于 target 的长度最小的连续子数组 [numsl, numsl+1, ..., numsr-1, numsr] ，
// 并返回其长度。如果不存在符合条件的子数组，返回 0 。

// 示例 1：

// 输入：target = 7, nums = [2,3,1,2,4,3]
// 输出：2
// 解释：子数组 [4,3] 是该条件下的长度最小的子数组。


// 双指针法
var minSubArrayLen = function(target, nums) {

    // 代表起始位置
    i = 0

    sum = 0

    result = Infinity

    for(let j = 0;j < nums.length;j++){
        sum += nums[j]

        while(sum >= target){

            sublen = j - i + 1
            result = Math.min(sublen,result)

            // 继续滑动
            sum = sum - nums[i]
            i++
        }
    }
    return result === Infinity ? 0 : result

};
target = 7
nums = [2,3,1,2,4,3]

res = minSubArrayLen(target,nums)
console.log(res);
