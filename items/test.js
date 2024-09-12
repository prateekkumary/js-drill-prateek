

import { items } from "./arrays.js";

import { each } from "./solution.js";



each(items,(element,index)=>{
    console.log(`Element: ${element}, Index: ${index}`);
})