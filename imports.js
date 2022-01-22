const person = {
    name:"manish"
};

//default export
export default person;
import person from "./person";


//named export
export const clean = () =>{return;}
import {clean} from "./clean"


