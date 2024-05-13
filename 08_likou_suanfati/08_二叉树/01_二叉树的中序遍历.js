// 给定一个二叉树的根节点 root ，返回 它的 中序 遍历 ：左、根、右

var inorderTraversal = function(root) {
    let res = []
    const dfs = function(root){
        if(root == null){
            return
        }
        dfs(root.left)
        res.push(root.val)
        dfs(root.right)
    }
    dfs(root)
    return res
};