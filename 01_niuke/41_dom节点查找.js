// 描述
// 查找两个节点的最近的一个共同父节点，可以包括节点自身
// 输入描述：
// oNode1 和 oNode2 在同一文档中，且不会为相同的节点

function commonParentNode(oNode1, oNode2) {
    let parent1 = oNode1.parentNode
    let parent2 = oNode2.parentNode
    if(parent1 === parent2){
        return parent1
    }else{
        // 递归调用
        commonParentNode(parent1,parent2)
    }
}