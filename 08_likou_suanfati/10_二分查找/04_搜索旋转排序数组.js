// 整数数组 nums 按升序排列，数组中的值 互不相同 。

// 在传递给函数之前，nums 在预先未知的某个下标 k（0 <= k < nums.length）上进行了 旋转，使数组变为 [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]]（下标 从 0 开始 计数）。例如， [0,1,2,4,5,6,7] 在下标 3 处经旋转后可能变为 [4,5,6,7,0,1,2] 。

// 给你 旋转后 的数组 nums 和一个整数 target ，如果 nums 中存在这个目标值 target ，则返回它的下标，否则返回 -1 。

// 你必须设计一个时间复杂度为 O(log n) 的算法解决此问题。


// 示例 1：

// 输入：nums = [4,5,6,7,0,1,2], target = 0
// 输出：4
// 示例 2：

// 输入：nums = [4,5,6,7,0,1,2], target = 3
// 输出：-1

// 思路：1、只有在顺序区间内才能通过数组两端的数值判断 target 是否在其中
//      2、判断顺序区间还是乱序期间，只需要对比 left 和 right 是否相对顺序即可 （left <= right），顺序区间
//      3、每次二分至少存在一个顺序区间

var search = function(nums, target) {
    let left = 0
    let right = nums.length - 1

    if(!nums.length) return -1

    if(nums.length === 1){
        return nums[0] === target ? 0 : -1
    }

    while(left <= right){
        let mid = (right + left) >> 1 
        if(nums[mid] === target) return mid

        // 说明 left 到 mid 之间是顺序区间
        if(nums[left] <= nums[mid]){
            if(target >= nums[left] && target < nums[mid]){
                right = mid - 1
            }else{
                left = mid + 1
            }
        }else{
            // 说明 mid 到 right 之间是顺序区间,改变变化的
            if(target > nums[mid] && target <= nums[right]){
                left = mid + 1
            }else{
                right = mid - 1
            }
        }
    }
    return -1
}

const res = search([4,5,6,7,0,1,2],0)

console.log(res);