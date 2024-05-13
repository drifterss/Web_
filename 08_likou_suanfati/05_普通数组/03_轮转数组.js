// 给定一个整数数组 nums，将数组中的元素向右轮转 k 个位置，其中 k 是非负数。

// 输入: nums = [1,2,3,4,5,6,7], k = 3
// 输出: [5,6,7,1,2,3,4]
// 解释:
// 向右轮转 1 步: [7,1,2,3,4,5,6]
// 向右轮转 2 步: [6,7,1,2,3,4,5]
// 向右轮转 3 步: [5,6,7,1,2,3,4]

var rotate = function(nums, k) {
    // 方法一
    // const pop_arr = []
    // for(let i = 0;i < k;i++){
    //     num = nums.pop()
    //     pop_arr.push(num)
    //     // console.log(pop_arr);
    // }
    // const new_num = pop_arr.reverse().concat(nums)
    // // console.log(new_num);
    // return new_num


    // 方法二：翻转
    // 原数组翻转 ---> （0，k-1）个翻转 ---> (k,n-1)个翻转
    const n = nums.length

    if ((k %= n) === 0) return 

    reverse(nums,0,n-1)
    reverse(nums,0,k-1)
    reverse(nums,k,n-1)

    // console.log(nums)
}

const reverse = function(nums,l,r,t){

    while(l < r){
        t = nums[l]
        nums[l] = nums[r]
        nums[r] = t
        l++
        r--
    }

    // console.log(nums);
    // return nums

}

const arr = [1,2,3,4,5,6,7]
// rotate(arr,3)

// const arr_ = [-1]
// rotate(arr_,2)

reverse(arr,0,6)
console.log(arr);