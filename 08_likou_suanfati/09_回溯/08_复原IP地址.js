// 有效 IP 地址 正好由四个整数（每个整数位于 0 到 255 之间组成，且不能含有前导 0），整数之间用 '.' 分隔。

// 例如："0.1.2.201" 和 "192.168.1.1" 是 有效 IP 地址，但是 "0.011.255.245"、"192.168.1.312" 和 "192.168@1.1" 是 无效 IP 地址。
// 给定一个只包含数字的字符串 s ，用以表示一个 IP 地址，返回所有可能的有效 IP 地址，这些地址可以通过在 s 中插入 '.' 来形成。你 不能 重新排序或删除 s 中的任何数字。你可以按 任何 顺序返回答案。

// 示例 1：

// 输入：s = "25525511135"
// 输出：["255.255.11.135","255.255.111.35"]

var restoreIpAddresses = function (s) {
    const res = [], path = [];
    backtracking(0)
    return res;
    function backtracking(i) {
        const len = path.length;
        if (len > 4) return;
        if (len === 4 && i === s.length) {
            res.push(path.join("."));
            return;
        }
        for (let j = i; j < s.length; j++) {
            const str = s.slice(i, j + 1);
            if (str.length > 3 || +str > 255) break;
            if (str.length > 1 && str[0] === "0") break;
            path.push(str);
            backtracking(j + 1);
            path.pop()
        }
    }

}


// 判断截取的字符串是否合法

function isValid(str, start, end) {
    if (start > end) {
        return false
    }

    // 以 0 开头的不合法
    if (str[0] == '0' && start != end) {
        return false
    }

    // 大于 255 的不合法
    let num = 0

    for (let i = start; i <= end; i++) {
        if (str[i] < '0' || str[i] > '9') return false

        num = num * 10 + (str[i] - '0')

        if (str[i] > 255) return false
    }
    return true
}



    


s = "25525511135"

res = restoreIpAddresses(s)

console.log(res);