
import { testObject } from "./objects.js";


function keys(obj) {
     const arr=[];
    for(let key in obj){
        arr.push(key);
    }
    return arr;
}


function values(obj) {
    const arr=[];
    for(let key in obj){
        arr.push(obj[key]);
    }
    return arr;
}


export {keys,values}