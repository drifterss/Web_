// 给你两个按 非递减顺序 排列的整数数组 nums1 和 nums2，另有两个整数 m 和 n ，分别表示 nums1 和 nums2 中的元素数目。

// 请你 合并 nums2 到 nums1 中，使合并后的数组同样按 非递减顺序 排列。

// 注意：最终，合并后数组不应由函数返回，而是存储在数组 nums1 中。为了应对这种情况，nums1 的初始长度为 m + n，其中前 m 个元素表示应合并的元素，后 n 个元素为 0 ，应忽略。nums2 的长度为 n 。

 

// 示例 1：

// 输入：nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// 输出：[1,2,2,3,5,6]
// 解释：需要合并 [1,2,3] 和 [2,5,6] 。
// 合并结果是 [1,2,2,3,5,6] ，其中斜体加粗标注的为 nums1 中的元素。

// var merge = function(nums1, m, nums2, n) {

//     newnums1 = []
//     newnums2 = []

//     for(let i = 0; i < nums1.length;i++){
//         if(nums1[i] !== 0){
//             newnums1.push(nums1[i])
//         }
        
//     }

//     for(let i = 0; i < nums2.length;i++){
//         if(nums2[i] !== 0){
//             newnums2.push(nums2[i])
//         }
//     }

//     newnums1 = newnums1.concat(newnums2)

//     console.log(newnums1);

//     newnums1 = newnums1.sort(function(a,b){
//         return a - b
//     })

//     console.log(newnums1);

//     // return nums1
// };

// arr = [1,2,3,0]
// arr.splice(3,1)
// console.log(arr);


var merge = function(nums1, m, nums2, n) {

//   第二种解法，指针法

    let len = m + n - 1
    let i = m - 1
    let j = n - 1
    let cur

    while(i >=0 || j >= 0){
        if(i < 0){
            cur = nums1[i--]
        }else if(j < 0){
            cur = nums2[j--]
        }else{
            // 取最大的元素放到合并后的数组的最后面,放完之后 下标减 1
            cur = nums1[i] > nums2[j] ? nums1[i--] : nums2[j--]
            
        }
        // 放完之后 len 的下标减 1，继续放倒数第二个位置
        nums1[len--] = cur

    }
    console.log(nums1);
    
};

arr1 = [1,2,3,0,0]
arr2 = [2,5,6]
merge(arr1,3,arr2,3)