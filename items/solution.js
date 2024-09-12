
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

  function reduce(elements, cb, startingValue) {
    // Do NOT use .reduce to complete this function.
    // How reduce works: A reduce function combines all elements into a single value going from left to right.
    // Elements will be passed one by one into `cb` along with the `startingValue`.
    // `startingValue` should be the first argument passed to `cb` and the array element should be the second argument.
    // `startingValue` is the starting value.  If `startingValue` is undefined then make `elements[0]` the initial value.

    let acc;
    let startIndex;

    
    if (startingValue !== undefined) {
        acc = startingValue;
        startIndex = 0; // Start from the first element
    } else {
        acc = elements[0];
        startIndex = 1; // Start from the second element since the first is used as the initial value
    }

    // Iterate through the array, applying the callback and updating the accumulator
    for (let i = startIndex; i < elements.length; i++) {
        acc = cb(acc, elements[i]);
    }

    // Return the accumulated result
    return acc;
  }

  function find(elements, cb) {
    // Do NOT use .includes, to complete this function.
    // Look through each value in `elements` and pass each element to `cb`.
    // If `cb` returns `true` then return that element.
    // Return `undefined` if no elements pass the truth test.

    for(let index=0;index<elements.length;index++){
        if(cb(elements[index])){
            return elements[index];
        }
    }
    return undefined;
  }
  

  function filter(elements, cb) {
    // Do NOT use .filter, to complete this function.
    // Similar to `find` but you will return an array of all elements that passed the truth test
    // Return an empty array if no elements pass the truth test

    let result=[];
    for(let index=0;index<elements.length;index++){
        
        if(cb(elements[index])){
            result.push(elements[index]);
        }
      }
    return result;
  }
  

  export{each,map,reduce,find,filter}
