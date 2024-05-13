let arr = [1,2,3]


arr.forEach((item,index)=>{   
        return arr[index] = item + 10   
})
console.log(arr)

let new_arr = arr.map((item)=>{
    return item * 10
})
console.log(new_arr);