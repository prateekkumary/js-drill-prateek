import { findCarById } from "./solution.js";
import { inventory } from "./cars.js";
import {infForLastCar} from "./solution.js";



// ==== Problem #1 ====
// The dealer can't recall the information for a car with an id of 33 on his lot. Help the dealer find out which car has an id of 33 by calling a function that will return the data for that car. Then log the car's year, make, and model in the console log in the format of:
//("Car 33 is a *car year goes here* *car make goes here* *car model goes here*");


const testFindCarBYId=()=>{
    console.log(findCarById(33));
}

testFindCarBYId();

// ==== Problem #2 ====
// The dealer needs the information on the last car in their inventory. Execute a function to find what the make and model of the last car in the inventory is?  Log the make and model into the console in the format of:
//"Last car is a *car make goes here* *car model goes here*");

const testInfoLastCar=()=>{
    console.log (infForLastCar());
    
}

testInfoLastCar();
