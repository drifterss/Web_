// function objMethod(str){
//     var obj={};
//     for(var i=0; i<str.length;i++){
//         // charAt(int index): 返回指定索引下的 char 值
//         var char=str.charAt(i);
//         if(obj[char]){
//             obj[char]++;
//         }else{
//             obj[char]=1;
//         }
//     }
//     console.log(obj);
//     var max=0;
//     for(var key in obj){
//         if(max<obj[key]){
//             max=obj[key];
//         }
//     }
//     for(var key in obj){
//         if(max==obj[key]){
//             console.log(key+":"+max);
//         }
//     }
// }
// objMethod("asddddasaassf");


// 版本二 

function charNum(str){
    let obj = {}

    for(let i = 0;i < str.length;i++){
        char = str.charAt(i)
        if(obj[char]){
            obj[char]++
        }else{
            obj[char] = 1
        }
    }

    console.log(obj);
    let max = 0
    maxIt = ''

    // 遍历对象 
    for(let key in obj){
        if(obj[key] > max || obj[key] == max){
            max = obj[key]
            maxIt = key
        }
    }
    console.log('最多的字符串是' + maxIt + '，个数为' + max);
}

str = "howareyou"

charNum(str)