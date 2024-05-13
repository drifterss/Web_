// 给定一个候选人编号的集合 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。

// candidates 中的每个数字在每个组合中只能使用 一次 。

// 注意：解集不能包含重复的组合。 

// 示例 1:

// 输入: candidates = [10,1,2,7,6,1,5], target = 8,
// 输出:
// [
// [1,1,6],
// [1,2,5],
// [1,7],
// [2,6]
// ]

var combinationSum2 = function(candidates, target) {

    let result = []
    let path = []

    let sum = 0

    used = new Array(candidates.length).fill(0)

    candidates.sort(function(a,b){
        return a-b
    })

    console.log(candidates);

    backtracking(sum,0,used)

    return result

    function backtracking(startIndex){
        if(sum > target) return

        if(sum === target){
            result.push(Array.from(path))
            return
        }


        for(let i = startIndex;i < candidates.length;i++){

            // 树层去重
            if( (i>0 && candidates[i-1] === candidates[i] && used[i-1]==false)){
                continue    // 直接使用下一个数
            }

            path.push(candidates[i])
            sum += candidates[i]
            used[i] = true

            backtracking(i+1)

            path.pop()
            sum -= candidates[i]
            used[i] = false

        }
    }

};

candidates = [10,1,2,7,6,1,5]
target = 8

res = combinationSum2(candidates,target)

console.log(res);