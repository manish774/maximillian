console.clear();
// Spread
const oldArray = [2, 3, 4, 7, 36, 'yu'];

console.log(oldArray);

const newArray = [22,...oldArray, 99]
console.log(newArray);

const copyarr  = {...oldArray};

copyarr[0] = "222";

console.log(oldArray);

// Rest
console.log("==========================");
myFunc = (...arg) =>{
    console.log(arg[0],arg[1]);
}

myFunc(11,"manish");