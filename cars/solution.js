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