function fn(x,y){
    console.log('往事的光圈每一瞬间都很绝！');
    console.log(this);

    console.log(x+y);
}

var o = {
    name:'jj'
}

// 1、普通调用,this 指向 windows 对象
fn()

// 2、call 来调用函数, 可以改变 this 指向，使得 this 指向 o 对象
fn.call(o,1,2)