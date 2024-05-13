function count(arr, item) {
    var count = 0
    arr.forEach(value => {
        if(value == item){
            count++
        }
    })
    return count
}

arr = [1,1,1,2,1,3]

console.log(count(arr,1));