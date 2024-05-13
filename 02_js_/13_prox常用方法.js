var singer = {
    name:'jj',
    age:18
}

// 为 singer 对象设置代理对象(拦截器)
var prox = new Proxy(singer,{
    get:function(target,prop){
        return target[prop]
    },

    // 通过 set 来拦截对象设置属性 
    set:function(target,prop,value){
        if(prop == 'age'){
            if(!Number.isInteger(value)){
                return '年龄必须为整数'
            }else if(value < 0 || value > 120){
                return '不合范围'
            }else{
                target[prop] = value
            }
        }
    }
})

console.log(prox);

prox.age = 20
console.log(prox);