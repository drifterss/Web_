// 给定长度 > 1 的数组，数组中的每个元素都为 其余元素的乘积

//  方法一
function produceExceprSelf(num){
    temp = 1

    for(let i = 0;i < num.length;i++){
        temp = temp * num[i]
    }

    var arr = []
    for(let i = 0;i < num.length;i++){
        arr[i] = temp / num[i]
    }

    return arr
}


// 方法二
function productExceptSelf(numArray) {
	let tempArray = [];
	numArray.forEach(item1 => {
		let num = 1;
		numArray.forEach(item2 => {
			if (item1 != item2) {
				num = num * item2;
			}
		});
		tempArray.push(num);
	});
	return tempArray;
}


num = [2,3,4,5]

x = produceExceprSelf(num)
console.log(x);