//functions

//1. parametresiz fonksiyon


function greet(){
    console.log("Hello World")
}
greet()

//parametreli function

function greetpeople(namePeople){
console.log('Hi '+namePeople)
}
greetpeople('Rozi')
greetpeople(29)
greetpeople('Rosi')

function ageName(age,name){
    console.log(age+name)
}
ageName(29, ' Rosi')

function information(location,price,rating){
    console.log(location+price+rating)
}
information('Stockholm ',1000 , ' 5star')
//toplama func

function sum(){
    var num1=10
    
    var num2=20
    
    var num3=30
    var total=num1+num2+num3
    
    return total
    }
    console.log(sum()); 

    const mySum=sum()+150
    console.log(mySum);

    //fonksiyon tnimlama
    //1,direkt tanimlama
    //2, fon degisken ile tanimlayip cagirabilme

    function square(num){
    return num*num
    }
    console.log(square(15));

    const numSq=function num1(num){
        return num*num
    }
    console.log(numSq(11));

    //isimsiz function
let anonymousFunction=function(a,b,c){
    return a+b+c
}
console.log(anonymousFunction(5,6,7));
anonymousFunction(0,1,2)

// ARROW function
//() sil tek parametre var ise
//isim ve function kelimelerini sil
// atama isminden sonra => isareti koy

 const arrow= x => x+100
console.log(arrow(111));
//
const arrow1= (x1,z) => x1+z
console.log(arrow1(50,53));

// prizma hacim

const prisma=(l,w,h)=> l*h*w
console.log(prisma(2,3,5));