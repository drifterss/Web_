// 给定两个整数 n 和 k，返回范围 [1, n] 中所有可能的 k 个数的组合。

// 你可以按 任何顺序 返回答案。

// 示例 1：

// 输入：n = 4, k = 2
// 输出：
// [
//   [2,4],
//   [3,4],
//   [2,3],
//   [1,2],
//   [1,3],
//   [1,4],]
var combine = function(n, k) {

    const path = []
    const result = []

    backtreeing(n,k,1)

    return result

    function backtreeing(n,k,startIndex){
        if(path.length === k){
            result.push(Array.from(path))
            return
        }

        for(let i = startIndex;i <= n;i++){
            path.push(i)

            // 往下一层寻找
            backtreeing(n,k,i+1)

            // 回溯
            path.pop()
        }
    }

};

res = combine(4,2)
console.log(res);