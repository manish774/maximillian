class Human{
    constructor(){
        this.age = 22;
    }

    getAge = () => this.age;
}

class Person extends Human{
    constructor(){
        super();
        this.name = "Manish"
    }

    getName = ()  => this.name
}

const person = new Person();
console.log(person.getName()); 
console.log(person.getAge()); 