// function suanLength(s){

//     arr = s.split(' ')
//     // console.log(arr);

//     console.log(arr[arr.length-1].length)

// }

// s = "hello nowcoder"
// suanLength(s)


function sort(n,arr){
    let t = 0
    for(let i = 0;i < n;i++){
        for(let j = i+1;j < n;j++){
            if(arr[i] > arr[j]){
                t = arr[i]
                arr[i] = arr[j]
                arr[j] = t
            }
        }
    }
    console.log(arr.join(' '))
    return arr
}

arr = [2,9,1,8,3]
sort(5,arr)