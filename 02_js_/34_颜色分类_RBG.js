// 给定一个包含红色、白色和蓝色，一共 n 个元素的数组，原地对它们进行排序，使得相同颜色的元素相邻，并按照红色、白色、蓝色顺序排 列。 
// 此题中，我们使用整数 0、 1 和 2 分别表示红色、白色和蓝色

// 方法 1 ：基于选择排序
function swap(arr,a,b){
    let temp
    temp = arr[a]
    arr[a] = arr[b]
    arr[b] = temp 
}


function colorSort(arr){
    let curr = 0

    // 第一次遍历，将扫描到的 0 交换到数组头部
    for(let i = 0;i < arr.length;i++){
        if(arr[i] == 0){
            swap(arr,curr++,i)
        }
    }

    // 第二次遍历，将扫描到的 1 交换到数组头部
    for(let i = 0;i < arr.length;i++){
        if(arr[i] == 1){
            swap(arr,curr++,i)
        }
    }
}

const arr = [2,0,2,1,1,0]

colorSort(arr)
console.log(arr);
