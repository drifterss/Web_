function shulie(str, n) {
    let flag = 1
    if (n <= 2) {
        console.log('sorted')
    } else {
        if (Number(str[0]) < Number(str[1])) {
            for (let i = 1; i < n - 1; i++) {
                if (Number(str[i]) > Number(str[i + 1])) {
                    console.log('unsorted');
                    flag = 0
                    break
                }
            }
        // } else {
        //     for (let i = 1; i < str.length - 1; i++) {
        //         if (Number(str[i]) < Number(str[i + 1])) {
        //             console.log('sorted');
        //             flag = 0
        //             break
        //         }
        //     }
        } if (flag) {
            console.log('sort');
        }
    }

}

shulie('12354',5)