//create Object using constructor function

function Car(maker, model, year, color) {
    this.maker = maker
    this.model = model
    this.year = year
    this.color = color
}
let car1 = new Car('Mercedes', 'Maybach', 2023, 'Black')
let car2 = new Car('MazDa', 'CX- 8', 2023, 'White')
let car3 = new Car('HonDa', 'Civic', 2023, 'Red')
// debugger
console.log(car1);

car1.run = function(speed) {
    console.log(`T run at speed: ${speed} km/h`);
}
car1.run(234)

car1.describe = function() {
    console.log(`marker: ${this.maker}, 
                 model: ${this.model}, 
                 year: ${this.year}, 
                 color: ${this.year} 
                 `);
}
car1.describe()

car2.describe = car1.describe  //car2 tham chiếu đến car1
car2.describe()

car3.describe = car1.describe
car3.describe()


//xoá thuốc tính
console.log(car1);
delete car1.color;
console.log("After delete color");
console.log(car1);
