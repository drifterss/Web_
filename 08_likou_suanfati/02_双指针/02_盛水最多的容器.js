// 给定一个长度为 n 的整数数组 height 。有 n 条垂线，第 i 条线的两个端点是 (i, 0) 和 (i, height[i]) 。

// 找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。

// 返回容器可以储存的最大水量。

// 说明：你不能倾斜容器。

// 输入：[1,8,6,2,5,4,8,3,7]
// 输出：49 
// 解释：图中垂直线代表输入数组 [1,8,6,2,5,4,8,3,7]。在此情况下，容器能够容纳水（表示为蓝色部分）的最大值为 49。


// 设两指针 i,j 分别指向水槽的高度为 h[i],h[j]
// 则 面积的计算公式为 S = (j-i)*min(h[i],h[j])

// 在每个状态下，无论长板或短板向中间收缩一格，底边水槽 宽度都会 减 1
// ① 若短板收缩，则面积可能增大
// ② 若长板收缩，则面积必然缩小
// 因此，初始化双指针分别位于水槽两端，循环每轮将短板向内移动一格，并更新面积最大值，直至两指针相遇时跳出

// 算法流程：
// 1. 初始化: i,j 指针分别指向数组的两端
// 2. 循环收缩(短板向中间收缩),直到两指针相遇时跳出,更新面积
// 3. 返回最大面积值

var maxArea = function(height) {
    let j = height.length - 1
    let res = 0
    for(let i = 0;i < height.length;i++){

        while(i < j){
            if(height[i] < height[j]){
                res = Math.max(res,(j-i)*height[i])
                i++
            }else{
                res = Math.max(res,(j-i)*height[j])
                j--
            }
        }
    }

    // console.log(res);
    return res
};

maxArea([1,8,6,2,5,4,8,3,7])