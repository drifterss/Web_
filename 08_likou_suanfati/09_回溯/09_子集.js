// 给你一个整数数组 nums ，数组中的元素 互不相同 。返回该数组所有可能的子集（幂集）。

// 解集 不能 包含重复的子集。你可以按 任意顺序 返回解集

// 示例 1：

// 输入：nums = [1,2,3]
// 输出：[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
// 示例 2：

// 输入：nums = [0]
// 输出：[[],[0]]

var subsets = function (nums) {

    const result = []
    const path = []

    backtracking(0)

    return result

    function backtracking(startIndex) {

        result.push(Array.from(path))  // 收集所有的叶子节点，不需要终止条件

        for (let i = startIndex; i < nums.length; i++) {
            path.push(nums[i])

            backtracking(i+1)

            path.pop()
        }
    }

};

nums = [1,2,3]

res = subsets(nums)
console.log(res);