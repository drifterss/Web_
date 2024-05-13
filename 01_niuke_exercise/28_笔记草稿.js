// 题目描述：
// 薯队长写了一篇笔记草稿，请你帮忙输出最后内容。

// 输入字符包括，"(" , “)” 和 "<"和其他字符。
// 其他字符表示笔记内容。
// ()之间表示注释内容，任何字符都无效。 括号保证成对出现。
// "<“表示退格, 删去前面一个笔记内容字符。括号不受”<"影响 。
// Input：一行字符串。长度<=10000.
// Output：一行字符串，表示最终的笔记内容。

function biJi(str){
    
    arr = str.split('')
    let new_arr = []
    let flag = false

    arr.forEach(element => {
        if(element == '('){
            flag = true
            return true
        }
        if(flag){
            if(element == ')'){
                flag = false
            }
            return true
        }
        if(element == '<'){
            new_arr.pop()
        }else{
            new_arr.push(element)
        }
    })
    console.log(new_arr.join(''));
    return new_arr.join('')
}


biJi('Corona(Trump)USA<<<Virus')
