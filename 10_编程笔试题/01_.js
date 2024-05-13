// var name1 = {
//     name:'jj'
// }
// (function (name1){
//     console.log(name1.name);
//     name1.name = 'zz'
//     var name1 = {name:'Jay'}
//     console.log(name1.name);
// }(name1))

// // aa(name1)
// console.log(name1);

var foo = {n:1};
(function(foo){
    console.log(foo.n);
    foo.n = 3;
    var foo = {n:2};
    console.log(foo.n);
})(foo);
console.log(foo.n);  // 1 2 3


function aa(){
     a = 1
}
aa()
console.log(a); // 报错