//  ARRAY

var friendList=['Jey','Numan','T','Baho']
var friendList2=new Array ('JeyLo','Numanke','Teyo','BahoBali')
console.log(friendList2[0]);
console.log(friendList);
console.log(friendList.length);

console.log(friendList[1,2,3]); //baho

friendList[3]="Bahobaliii"
console.log(friendList);


friendList2[8]="Bahobaliiii"
console.log(friendList2);

//Array ekleme ve silme

//push Arrayin sonuna data ekler
friendList2.push('Selcuk')
console.log(friendList2);

// unpush aArray onune ekler

friendList2.unshift(1618)
console.log(friendList2)

//pop son datayi siler

friendList.pop()
console.log(friendList);

// shift( ilk datayi siler)
friendList.shift()
console.log(friendList);

// indexof 

console.log(friendList2.indexOf('Teyo'));
console.log(friendList2.indexOf('Teyo',4)); //return -12 olursa sonuc yok demek

//lastindexof
console.log(friendList2.lastIndexOf('Selcuk'));

//includes

console.log(friendList2.includes('Teyo'));
console.log(friendList2.includes('y'));

//splice() yeni data ekleme kaldirma degistirme yapilabilir

const months=['January','March','April','June','July']
console.log(months);

months.splice(1,0,'February')
//1: 1.indexe ekle
//0:  hicbirsey silme
// 'FEbruary': ekleyecegimiz
console.log(months);

months.splice(4,0,'May')
console.log(months);


months.splice(7,0,'August','Septebmer','October','November','December')
console.log(months);

//-1 son index

months.splice(-1)
console.log(months);

//-2 sondan 2. index
months.splice(-2)
console.log(months);

//
months.splice(1,3,'Ay')
console.log(months);

//slice() - verilen indexten sonrakileri getir
console.log(months.slice(2));
console.log(months);
console.log(months.slice(2,));
console.log(months);
// concat(): Arraylari birlestir

var drinks= ['juice','water','ayran','fanta']
var meats=['kebap','cagkebap','pilav','soup']

var basket=drinks.concat(meats)

console.log(basket);

//reverse ters cevirme

var numbers=[1,2,3,4,5,6,7,8,9,-10,-8,-7]
console.log(numbers.reverse());

//sort
console.log(numbers.sort());

// loops

// for loop
for(let i=0; i<=8;i++){
    console.log(i);
}

// for of loop
const iterable=[1,2,3,4,5,6,7,8,9,10]
for (let x of iterable) {
    console.log(x);
    
}


const toDo=[
    {
id:1,
task:'meeting',
isComplate:true

},
{
    id:2,
    task:'shopping',
    isComplate:false
},
{
    id:3,
    task:"walking",
    isComplate:true
}
]

for (let i = 0; i < toDo.length; i++) {
    console.log(toDo[i].id);
    console.log(toDo[i].task)
    console.log(toDo[i].isComplate);
    
}

// for each

toDo.forEach(e => {
    console.log(e );
});

// arrow

toDo.forEach(e=>console.log(e))
