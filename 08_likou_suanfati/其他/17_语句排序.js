function arrangeWords( text ) {
    // write code here

    const new_arr = []

    text_arr = text.split(' ')

    // console.log(text_arr);
    let t = ''

    for(let i = 0;i < text_arr.length;i++){
        for(let j = i+1;j < text_arr.length;j++){
            if(text_arr[i].length > text_arr[j].length){
                t = text_arr[i]
                text_arr[i] = text_arr[j]
                text_arr[j] = t
            }
        }
    }

    // console.log(text_arr.join(' '));
    return text_arr.join(' ')

   
    text_arr.join(' ')

    text_arr[0] = text_arr[0].split('')

    text_arr[0] = text_arr[0].subString(0,1,'T')

    
    // text_arr[0] = text_arr[0].join()
    console.log(text_arr[0]);
    console.log(text_arr.join(' '));

    

}

function sortdesc(nums){
    let t = 0
    for(let i = 0;i < nums.length;i++){
        for(let j = i+1;j < nums.length;j++){
            if(nums[i] > nums[j]){
                t = nums[i]
                nums[i] = nums[j]
                nums[j] = t
            }
        }
    }
    console.log(nums);
    return nums
}

// arr = [4,1,2,6,3]
// sortdesc(arr)

text = "Welcome to join the HundSun family"

arrangeWords(text)