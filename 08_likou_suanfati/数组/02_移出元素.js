// 给你一个数组 nums 和一个值 val，你需要 原地 移除所有数值等于 val 的元素，并返回移除后数组的新长度。

// 不要使用额外的数组空间，你必须仅使用 O(1) 额外空间并 原地 修改输入数组。

// 元素的顺序可以改变。你不需要考虑数组中超出新长度后面的元素

var removeElement = function(nums, val) {
    // 用 filter
    // const newnum = nums.filter((item) => {
    //     return item !== val
    // })
    // return newnum


    // 第二种写法
    var index = 0
    while(index<nums.length){
        if(nums[index] === val){
            nums.splice(index, 1)
        } else {
            index++
        }
    }
    return nums.length


    // 第三种写法:双指针写法
    // let k = 0;
    // for(let i = 0;i < nums.length;i++){
    //     if(nums[i] != val){
    //         nums[k++] = nums[i]
    //     }
    // }
    
    // console.log(nums);
    // return nums.length
};

nums = [1,2,5,3,6,3]

newnum = removeElement(nums,3)
console.log(newnum);