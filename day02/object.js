// object {}
var person={
    firstName:"Ozzi",
    surname:'Baho',
    age:29,
    city:'Stockholm',
    isEmployed: true
}
console.log(person)
console.log(typeof(person))
console.log(person.age)
console.log(person['city']);
console.log(person['isEmployed']);

// nested object


const person2={
    firstName:"Ozzi",
    surname:'Baho',
    age:29,
    city:'Stockholm',
    isEmployed: true,
    adress: {
        street: 'N.Torayev',
        town:'Denov',
        province: 'Lebap',
        hobbies:['archery,',"swim",'horse']
    } 

}
console.log(person2);
console.log(person2.adress.province);
console.log(person2.adress.hobbies);
