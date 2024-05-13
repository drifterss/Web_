// 给你一个正整数 n ，生成一个包含 1 到 n的平方的 所有元素，且元素按顺时针顺序螺旋排列的 n x n 正方形矩阵 matrix 

var generateMatrix = function(n) {

    let startX = startY = 0  // 起始位置
    let loop = Math.floor(n/2) // 旋转轮数
    let mid = Math.floor(n/2)  // 如果是奇数则选择中间位置
    let offset = 1  // 控制每一层填充元素的个数
    let count = 1   // 控制填充的值的大小

    // 二维数组
    let res = new Array(n).fill(0).map(() => new Array(n).fill(0))
  
    console.log(res);
    

    while(loop--){
        let row = startX   
        let col = startY
        // 最上行
        for(;col < n - offset;col++){
            res[row][col] = count
            count++
        }

        // 最右行
        for(;row < n - offset;row++){
            res[row][col] = count
            count++
        }

         // 最下行
         for(;col > startX;col--){
            res[row][col] = count
            count++
        }

        // 最左列
        for(;row > startY;row--){
            res[row][col] = count
            count++
        }

        // 更新起始位置
        startX++
        startY++

        // 
        offset++
    }

    if(n % 2 === 1){
        res[mid][mid] = count
    }

    console.log(res);
    return res

}

generateMatrix(3)