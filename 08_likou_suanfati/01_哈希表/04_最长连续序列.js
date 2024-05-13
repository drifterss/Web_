// 给定一个未排序的整数数组 nums ，找出数字连续的最长序列（不要求序列元素在原数组中连续）的长度。

// 请你设计并实现时间复杂度为 O(n) 的算法解决此问题。

// 示例 1：

// 输入：nums = [100,4,200,1,3,2]
// 输出：4
// 解释：最长数字连续序列是 [1, 2, 3, 4]。它的长度为 4

var longestConsecutive = function (nums) {
    // 把题目中数组的数字全部放入set中，一来去重，二来方便快速查找
    const set = new Set(nums);
    let max = 0;
    for (let [key,a] of set.entries()) {
      // 没有左邻居，是序列的起点
      if (!set.has(a - 1)) {
        let count = 1;
        let cur = a;
        // 有右邻居，看连续的右邻居有多少个
        while (set.has(cur + 1)) {
          cur++;
          count++;
        }
        // 存放最大的连续邻居的值
        max = Math.max(max, count);
      }
    }
    console.log(max);
    return max;
  };
  


longestConsecutive([100,4,200,1,3,2])