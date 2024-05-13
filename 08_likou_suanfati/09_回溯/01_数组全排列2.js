// 示例 1：

// 输入：nums = [1,1,2]
// 输出：
// [[1,1,2],
//  [1,2,1],
//  [2,1,1]]
// 示例 2：

// 输入：nums = [1,2,3]
// 输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

var permuteUnique = function(nums) {

    const result = []
    const path = []

    const used = new Array(nums.length).fill(0)

    // 先给数组排个序
    nums.sort((a, b) => {
        return a - b
    })

    backtracking()
    return result

    function backtracking(){

        if(path.length === nums.length){
            result.push(Array.from(path))

            return
        }

        for(let i = 0;i < nums.length;i++){

            if(used[i]) continue   // 如果该位置已取，继续取下一个

            // 去重
            if(i > 0 && nums[i-1] === nums[i] && used[i-1] === false) continue

            

            path.push(nums[i])
            used[i] = true

            backtracking(0)

            // 回溯
            path.pop()
            used[i] = false

        }
    }
};

nums = [1,2,3]

res = permuteUnique(nums)
console.log(res);
 