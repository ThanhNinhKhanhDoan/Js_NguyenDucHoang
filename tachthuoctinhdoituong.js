let point = {}
point.a = 1;
point.b = 5;
// console.log(`a = ${point.a}, b = ${point.b}`);
let {a, b} = point
a = 123
console.log(`a = ${a}, b = ${b}`);
console.log(point.a);
// point.a = 111
point['a'] = 222
console.log(point);
console.log(typeof point);
console.log(typeof point.b);

//object
const myDreamCar = {
    maker: 'Mercedes',
    model: 'G63',
    year: 2023
}

console.log(myDreamCar.color === undefined);
console.log(myDreamCar.model);
console.log(JSON.stringify(myDreamCar));


//For of và For in
for(let key in myDreamCar) {
    console.log(`key = ${key}`);
}
// debugger
for(let value of Object.values(myDreamCar)) {
    console.log(`value = ${value}`);
}


//... là Nhân bản
const myDreamCar2 = {...myDreamCar}

myDreamCar.year = 2022
console.log(myDreamCar);
console.log(myDreamCar2);


//create Object using constructor function

// function Car(maker, model, year, color) {
//     this.maker = maker
//     this.model = model
//     this.year = year
//     this.color = color
// }
// let car1 = new Car('Mercedes', 'Maybach', 2023, 'Black')
// let car2 = new Car('MazDa', 'CX-8', 2023, 'White')
// let car3 = new Car('HonDa', 'Civic', 2023, 'Red')
// console.log(car2);
// debugger