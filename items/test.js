

import { items } from "./arrays.js";

import { each ,map,reduce,find} from "./solution.js";


// #1
each(items,(element,index)=>{
    console.log(`Element: ${element}, Index: ${index}`);
})


//#2
map(items,(element)=> console.log(element*element));

//#3

console.log(reduce(items, (acc, element) => {
    return acc *= element;
}, 1));

console.log(find(items,(element)=>{
    return element%2===0;
}))
