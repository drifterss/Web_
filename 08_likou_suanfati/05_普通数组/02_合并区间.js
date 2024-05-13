// 以数组 intervals 表示若干个区间的集合，其中单个区间为 intervals[i] = [starti, endi] 。
// 请你合并所有重叠的区间，并返回 一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间 。

// 示例 1：

// 输入：intervals = [[1,3],[2,6],[8,10],[15,18]]
// 输出：[[1,6],[8,10],[15,18]]
// 解释：区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].

// 思想：1、先把子元素按 最左边节点进行排序
//       2、在比较 第一个节点的右边与第二个节点左边的大小，若 大于，则加入到数组；若小于，则进行更新

var merge = function(intervals) {

    intervals.sort(function(a,b){
        return a[0] - b[0]
    })

    let res = []
    prev = intervals[0]
    for(let i = 0;i < intervals.length;i++){
        cur = intervals[i]
        if(prev[1] >= cur[0]){
            // 此时符合要求，更新结果
            prev[1] = Math.max(prev[1],cur[1])
            
        }else{
            res.push(prev)
            prev = cur
        }
    }
    res.push(prev)
    return res

}

const res = merge([[1,3],[2,6],[8,10],[15,18]])
console.log(res);