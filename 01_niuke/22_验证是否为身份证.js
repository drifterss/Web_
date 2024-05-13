// 要求以Boolean的形式返回字符串参数是否符合身份证标准。
// 注意：
// 1. 无需考虑地区信息、出生日期、顺序码与校验码的验证

const _isCard = number => {
    // 补全代码
    var regx = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/
    return regx.test(number)
}

console.log(_isCard('21062319980907888X'));