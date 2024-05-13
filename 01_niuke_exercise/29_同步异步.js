function a(){
    setTimeout(function(){
        console.log(1)
    },1)

    setTimeout(function(){
        console.log(2)
    },0)

    console.log(3)
}

a()         // 3 1 2 