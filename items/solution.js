
import {items} from "./arrays.js";

function each(elements, cb) {
    // Do NOT use forEach to complete this function.
    // Iterates over a list of elements, yielding each in turn to the `cb` function.
    // This only needs to work with arrays.
    // You should also pass the index into `cb` as the second argument
    // based off http://underscorejs.org/#each
    for(let index=0;index<elements.length;index++){
        cb(elements[index],index)
    }
}
  

function map(elements, cb) {
    // Do NOT use .map, to complete this function.
    // How map works: Map calls a provided callback function once for each element in an array, in order, and functionructs a new array from the res .
    // Produces a new array of values by mapping each value in list through a transformation function (iteratee).
    // Return the new array.

    const result=[];
    for(let index=0;index<elements.length;index++){
        result.push(cb(elements[index],index));
    }
  }
  

  export{each,map}
