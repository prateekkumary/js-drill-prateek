
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

function mapObject(obj, cb) {
    const result={};
   for(let key in obj){
    result[key]=cb(obj[key]);

   }
   return result;
  }


  function pairs(obj) {
    const result=[];
    for(let key in obj){
      if(obj.hasOwnProperty(key));
      result.push([key,obj[key]]);
    }
    return result;
  }

  function invert(obj) {
    const result={};
   for(let key in obj){
    if(obj.hasOwnProperty(key)){
        result[obj[key]]=key;
    }
   }
   return result;
  }
export {keys,values,mapObject,pairs,invert}