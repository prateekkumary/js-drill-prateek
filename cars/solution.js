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

