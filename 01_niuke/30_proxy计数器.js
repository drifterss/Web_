// 请给参数对象添加拦截代理功能，并返回这个代理，
// 要求每当通过代理调用该对象拥有的属性时，"count"值加1，否则减1

let singer = {
    name: 'jj',
    age: 18
}

let count = 0
const _proxy = object => {
    //创建一个Proxy实例，该构造函数接收两个参数，第一个参数是被代理的对象，第二个参数是处理方法(对象)
    //在处理方法中设置“get”计算方法，该方法接收两个参数，第一个参数是被代理的对象，第二个参数是当前“get”读取的属性
    //当第二个参数在第一个参数中时，“count“加1，否则减1

    // 创建拦截代理器
    let prox = new Proxy(object, {
        get: function (object, prop) {
            if (prop in object) {
                count++
                return object.name
            } else {
                count--
            }
        }
    })

    return prox
}

prox = _proxy(singer)
console.log(prox.name);
console.log(count);