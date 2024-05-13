// 请给参数对象添加拦截代理功能并返回这个代理。要求如下：
// 1. 该函数接收多个参数，首个参数为对象，从第二个参数（包括）往后皆是该对象的属性名
// 2. 通过该函数给首个参数对象添加拦截器功能，每当该对象访问到该函数第二个参数（包括）往后的属性时，返回"noright"字符串，表示无权限。

const _proxy = (object,...prototypes) => {
    // 补全代码
// 通过[...prototypes]获取从第二个参数开始往后的所有参数
// 创建一个Proxy实例并且返回，该构造函数接收两个参数，第一个参数是被代理的对象，第二个参数是处理方法
// 在处理方法中设置“get”计算方法，该方法接收两个参数，第一个参数是被代理的对象，第二个参数是当前“get”读取的属性
// 当获取某个实例属性时，如果这个属性在[...prototypes]数组中，则返回”noright“

    let protos = prototypes

    var prox = new Proxy(object,{
        get:function(object,prop){
            if(protos.includes(prop)){
                return 'noright'
            }
            return object[prop]
        }
        
    })
    return prox
}