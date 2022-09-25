// Map

var array=[2,4,6,8,10]
function double(num) {
    return num*2+1+'+1 oldu'
}
console.log(array);
console.log(double(10));

//const array2= array.map(double)
console.log(array.map(double));

//filtrele
var number=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,89]

console.log(number.filter(e=>e>1));

//tek sayilar

console.log(number.filter(e=>e%2!==0));

// cift sayilar
console.log(number.filter(e=>e%2==0));


//filter() arrays


var people= [{
    id:1,
    gender:'FileSystemHandle',
    age:25,

},
{
    id:2,
    gender:"male",
    age:26
},
{
    id:3,
    gender:'Female',
    age:27
}
]
console.log(people.filter(x=>x.age<22));