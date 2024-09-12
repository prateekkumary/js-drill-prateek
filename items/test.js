

import { items } from "./arrays.js";

import { each ,map} from "./solution.js";



each(items,(element,index)=>{
    console.log(`Element: ${element}, Index: ${index}`);
})



 map(items,(element)=> console.log(element*element));

