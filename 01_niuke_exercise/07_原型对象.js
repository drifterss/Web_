function Father(age) { //此时Father.prototype = { constructor： function Father(){}}
    this.age = age
}
function Son(age) { //此时Son.prototype = { constructor： function Son(){}}
    Father.call(this);
}

Son.prototype = Father.prototype;
//此时Son.prototype = { constructor： function Father(){}}   
//此时Father.prototype = { constructor： function Father(){}}
//现在，Son和Father的prototype指向同一个对象，也就是指向堆里的同一个地址


Father.prototype.getAge = function () { console.log(40) },//堆里加一个getAge属性
//此时：
// Father.prototype = {
//     constructor： function Father(){}
//     getAge: function(){console.log(40);}
// }
//特别注意，因为Son和Father的prototype指向同一个对象（堆里同一个地址），所以
// Son.prototype = {
//     constructor： function Father(){}
//     getAge: function(){console.log(40);}
// }

Son.prototype.getAge = function () { console.log(18) };
//此时：
// Son.prototype = {
//     constructor： function Father(){}
//     getAge: function(){console.log(18);}
// }
//因为Son和Father的prototype指向同一个对象（堆里同一个地址），所以
// Father.prototype = {
//     constructor： function Father(){}
//     getAge: function(){console.log(18);}
// }


var father = new Father(40); // father = { age: 40 } 
var son = new Son(18); //如果构造函数Son里没有Father.call(this);  那么此时 son = {}
//但是，构造函数Son里有Father.call(this);  然后 son = { age: undefined } (暂时不太明白这是为什么)

//以上结束后father = { age: 40 } 
//以上结束后son = { age: undefined } 


father.getAge(); //father里只有一个age,没有getAge方法，去原型Father.prototype里找， 执行函数console.log(18)
son.getAge();//son里只有一个age,没有getAge方法，去原型Son.prototype里找， 执行函数console.log(18)

//本题跟传入的age没有关系，因为getAge方法里没有任何对age的处理，只是执行一个console.log()