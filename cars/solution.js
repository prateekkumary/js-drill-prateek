import { inventory } from "./cars.js";


function findCarById(id){
    for (let i=0;i<inventory.length;i++){
        if(inventory[i].id===id){
            return (`Car ${id} is a ${inventory[i].car_year} ${inventory[i].car_make} ${inventory[i].car_model}`);
        }
    }
     return (`Car with id ${id} not found.`);
}

export {
    findCarById
}

function infForLastCar() {
    if (inventory.length===0){
       return "Inventry is Empty"; 
    }
    const lastCar=inventory[inventory.length-1];
    return (`Last car is a ${lastCar.car_make} ${lastCar.car_model}`);
    
}
export{
    infForLastCar
}

function sortCarModels() {
    const carModels = [];
    
    for (let i = 0; i < inventory.length; i++) {
      carModels.push(inventory[i].car_model);
    }
    

    carModels.sort();

    return carModels;
}
export{
    sortCarModels
}

function allCarYear(){
    const carYears = [];
  
  
  for (let i = 0; i < inventory.length; i++) {
    carYears.push(inventory[i].car_year);
  }
  
  //console.log(carYears);
  
  return carYears;
}

export{
    allCarYear
}

//problem 5

function getCarYears() {
    const carYears = [];
    
    for (let i = 0; i < inventory.length; i++) {
      carYears.push(inventory[i].car_year);
    }
    
    return carYears;
  }
  
  function carOlder2000(yearThreshold) {
    
    const carYears = getCarYears();
    
    const olderCars = [];
    
    for (let i = 0; i < carYears.length; i++) {
      if (carYears[i] < yearThreshold) {
        olderCars.push(carYears[i]);
      }
    }
    

    console.log(olderCars.length);
    
    // Return the array of older cars
    return olderCars;
}
export{
    carOlder2000
}

function arrayOfBmwAudi(){
    const bmwAndAudiCars = [];
  
    
    for (let i = 0; i < inventory.length; i++) {
      const car = inventory[i];
      

      if (car.car_make === "BMW" || car.car_make === "Audi") {
        bmwAndAudiCars.push(car);
      }
    }
     JSON.stringify(bmwAndAudiCars);
     console.log(bmwAndAudiCars)
    
     return bmwAndAudiCars;
}
export{
    arrayOfBmwAudi
}