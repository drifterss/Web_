let num = (function(x){
    delete x
    return x
})(1)

console.log(num)