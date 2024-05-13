// 给定一个二叉树 root ，返回其最大深度。

// 二叉树的 最大深度 是指从根节点到最远叶子节点的最长路径上的节点数

// 思想：先使用后序遍历求出二叉树的深度
//      1、先求左子树的深度，再求右子树的深度
//      2、最后 取出左子树和右子树的最大值再 加 1

var maxdepth = function(root) {
    //使用递归的方法 递归三部曲
    //1. 确定递归函数的参数和返回值
    const getdepth = function(node) {
    //2. 确定终止条件
        if(node === null) {
            return 0;
        }
    //3. 确定单层逻辑
        let leftdepth = getdepth(node.left);
        let rightdepth = getdepth(node.right);
        let depth = 1 + Math.max(leftdepth, rightdepth);
        return depth;
    }
    return getdepth(root);
};

