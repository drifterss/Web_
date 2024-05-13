// 给你两个单链表的头节点 headA 和 headB ，请你找出并返回两个单链表相交的起始节点。如果两个链表不存在相交节点，返回 null 。

// 图示两个链表在节点 c1 开始相交

// 思路：求两个链表相较的 指针，交点不是数组相等，而是 指针相等
//       求出两个链表长度的差值，让 curA 移动到 curB 末尾对齐的位置
//       此时比较 curA 和 curB 是否相同，如果相同则找到交点，否则继续往后遍历

var getIntersectionNode = function(headA, headB) {
     let curA = headA
     let curB = headB
     let lenA = getListLength(curA);
     let lenB = getListLength(curB);

    //  把最长的链表赋值给 A
    if(lenA < lenB){
        // 交换变量注意加 “分号” ，两个数组交换变量在同一个作用域下时
        // 如果不加分号，下面两条代码等同于一条代码: [curA, curB] = [lenB, lenA]
        [curA,curB] = [curB,curA];
        [lenA,lenB] = [lenB,lenA];
    }

    // 求出两链表的长度之差
    let i = lenA - lenB
    // 把 curA 指向链表 B 的起始位置 
    while(i-- > 0){
        curA = curA.next
    }
    while(curA && curA !== curB){
        curA = curA.next
        curB = curB.next
    }
    return curA
}

// 求链表长度
function getListLength(head){
    let cur = head
    let length = 0
    while(cur){
        length++
        cur = cur.next
    }
    return length
}

getIntersectionNode(1,2)