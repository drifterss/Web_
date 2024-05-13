// 给你一个有序数组 nums ，请你 原地 删除重复出现的元素，使得出现次数超过两次的元素只出现两次 ，返回删除后数组的新长度。

// 不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成

var removeDuplicates = function(nums) {
    if(nums.length <= 2) return nums.length

    // 定义 fast 和 slow 两个指针，fast 表示已检查过的数组长度，slow 表示处理出的数组长度

    // 检查上上个被保留的元素 nums[slow - 2] 是否和待检查的元素 nums[fast] 相同

    let slow = 2
    let fast = 2

    while(fast < nums.length){
        if(nums[slow - 2] != nums[fast]){
            nums[slow] = nums[fast]
            ++slow
        }
        ++fast
    }
    return slow
};