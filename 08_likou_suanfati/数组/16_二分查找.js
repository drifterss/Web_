var findElement = function(nums,target) {
    // 左闭右闭区间

    let left = 0
    let right = nums.length - 1

    while(left <= right){
        // let mid = left + (right - left) / 2
        // 位运算，防止最大数溢出
        let mid = left + (right - left) >> 1
        // console.log(mid);

        if(nums[mid] > target){
            right = mid - 1
        }else if(nums[mid] < target){
            left = mid + 1
        }else{
            return mid
        } 
            
        
    }
    return -1
};

arr = [1,5,3,4,2,6]

id = findElement(arr,1)
console.log(id);