function isBalanced(str){
    if(str = '' || str.length == 1){
        return false
    }

    arr = []

    for(let i = 0;i < str.length;i++){

        // 对于 (  进栈
        if(str[i] = '('){
            arr.push(str[i])
        }

        //  对于 ) 出栈
        if(str[i] = ')'){
            if(arr.length){
                arr.pop()
            }
        }
    }
    if(arr.length == 0){
        return true
    }else{
        return false
    }
}

console.log(isBalanced('(())()()'))     // true

console.log(NaN === NaN); // false

console.log(typeof(window) === typeof(null));