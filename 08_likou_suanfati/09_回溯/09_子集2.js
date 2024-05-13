// 给你一个整数数组 nums ，其中可能包含重复元素，请你返回该数组所有可能的子集（幂集）。

// 解集 不能 包含重复的子集。返回的解集中，子集可以按 任意顺序 排列。

// 示例 1：

// 输入：nums = [1,2,2]
// 输出：[[],[1],[1,2],[1,2,2],[2],[2,2]]
// 示例 2：

// 输入：nums = [0]
// 输出：[[],[0]]

var subsetsWithDup = function(nums) {
    const result = []
    const path = []
    used = new Array(nums.length).fill(0)

    nums.sort(function(a,b){
        return a-b
    })

    console.log(nums);

    backtracking(0)

    return result

    function backtracking(startIndex) {

        result.push(Array.from(path))  // 收集所有的叶子节点，不需要终止条件

        for (let i = startIndex; i < nums.length; i++) {
            if(i > 0 && nums[i-1] === nums[i] && used[i-1] == false){
                continue
            }

            path.push(nums[i])
            used[i] = true

            backtracking(i+1)

            path.pop()
            used[i] = false
        }
    }
};

nums = [1,2,2]


res = subsetsWithDup(nums)

console.log(res);
 