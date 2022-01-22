class Person{
    myProperty = "hello"
    
    printProp = () =>{
        console.log(this.myProperty);
    }
}

const obj = new Person();
obj.printProp();