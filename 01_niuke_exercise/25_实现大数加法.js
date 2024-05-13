function add(str1,str2){
    num1 = parseInt(str1)
    num2 = parseInt(str2)

    sum = num1 + num2

    return sum.toString()
}

str1 = '13254'
str2 = '4354325'

var sum = add(str1,str2)

console.log(sum)