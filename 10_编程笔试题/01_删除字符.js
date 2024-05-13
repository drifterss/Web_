// 实例
// console.log('stre'.split('t').join(''))  // sre

var source = "They are students"
var remove = "aeiou"

function removeCharacters( source ,  remove ) {
    // write code here

    if(remove.length < 1){
        return
    }

    for(let i = 0;i < remove.length;i++){
        source = source.split(remove[i]).join('')
    }

    return source
}

console.log(removeCharacters(source,remove));

