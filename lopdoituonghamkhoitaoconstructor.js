class Emloyee {
    //default constructor
    /*
    constructor() {
        this.name = ''
        this.departmentName = 'No department'
    }
    */

    //constructor with arguments
    constructor(name, department) {
        this.name = name ?? ''  //2 dấu hỏi có nghĩa là giá trị mặc định hay còn gọi là defaul value
        this.departmentName = department ?? 'No department'
    }
}
let employeeA = new Emloyee('Khánh Đoan')
console.log(`employeeA: ${JSON.stringify(employeeA)}`);

let employeeB = new Emloyee('NTN', 'IT')
console.log(employeeB); 



/* ----------------Tính Kế Thừa---------------- */

console.log("------Dưới này là tính kế thừa---------");


class Person {
    constructor(name, email, age) {
        this.name = name ?? ''
        this.email = email ?? ''
        this.age  = age || 18
    }
}

class Kethua extends Person {
    constructor(name, email, age, department) {
        super(name, email, age)  //super là cha
        this.departmentName = department ?? 'No department'
    }
}

class KethuaTieptuc extends Person {
    constructor(name, email, age, job) {
        super(name, email, age)
        this.congviec = job ?? ''
    }
}

let kethuaA = new Kethua('Khánh Đoan', 'phamkhanhdoan24@gmail.com', 22, 'Người yêu NTN')
console.log(`kethuaA = ${JSON.stringify(kethuaA)}`);

let kethuaB = new KethuaTieptuc('Phạm Khánh Đoan', 'phamkhanhdoan240901@gmail.com', 22, 'bà chủ xinh đẹp')
console.log(`kethuaB = ${JSON.stringify(kethuaB)}`);


//chúng ta sẽ định nghĩa một cái lớp (một cái đối tượng được sinh ra từ lớp con)
let personC = new Person('TNKD', 'ntnpkd24090510@gmail.com', 22)
console.log(`personC = ${JSON.stringify(personC)}`);
// debugger