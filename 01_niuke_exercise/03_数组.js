var arr = new Array(3)

arr[0] = 1
arr.b = 2
console.log(arr.length); // 3

arr.forEach(value=>{
    console.log(value);     // 1
})

for(var i in arr){
    console.log(arr[i]);    // 1,2
}

var arr_ = []
arr_[3] = 5
console.log(arr_.length)  // 4