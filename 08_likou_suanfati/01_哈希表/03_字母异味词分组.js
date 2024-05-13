// 给你一个字符串数组，请你将 字母异位词 组合在一起。可以按任意顺序返回结果列表。

// 字母异位词 是由重新排列源单词的所有字母得到的一个新单词。

// 示例 1:

// 输入: strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
// 输出: [["bat"],["nat","tan"],["ate","eat","tea"]]
// 示例 2:

// 输入: strs = [""]
// 输出: [[""]]

var groupAnagrams = function(strs) {
    const map = new Map()

    for(let i = 0;i < strs.length;i++){
        let array = Array.from(strs[i])
        // console.log(array);
        array.sort()
        // console.log(array);

        // 将数组转换为字符串, 此时已经排好序了
        let key = array.toString()
        // console.log(key);

        // 从 map 中取到相应的数组
        let list = map.get(key) ? map.get(key) : new Array()
        

        list.push(strs[i])
        // console.log(list);

        // console.log(map);

        map.set(key,list)
        // console.log(map);
    }
    // console.log(Array.from(map.values()));
    return Array.from(map.values())
};


strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
groupAnagrams(strs)