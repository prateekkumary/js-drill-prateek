//import { arrayOfObjects } from "./persons"; 

import { arrayOfObjects } from "./persons.js";

//    Given the dataset of individuals, write a function that accesses and returns the email addresses of all individuals.

function emailOfPerson(data){
    if(!data || !Array.isArray(data)){
        console.log("Invalid Input");
        return [];
    }
    const emails=[];
    for(let i=0;i<data.length;i++){
        emails.push(data[i].email);
    }
    if (emails.length===0){
        console.log("Email not found");
    }
    console.log(emails);
    return 
}
export {
    emailOfPerson
};
//    Implement a function that retrieves and prints the hobbies of individuals with a specific age, say 30 years old.

function  hobbyAndAge(arr,age){

    if(!arr || !Array.isArray(arr)){
        console.log("Invalid Input");
        return [];
    }
    for(let i=0;i<arrayOfObjects.length;i++){
        const person=arrayOfObjects[i];
        if(person.age===age){
            console.log(`${person.name}:${person.hobbies.join(',')}`);
        }
    
    }
}
export{
    hobbyAndAge
};


//Create a function that extracts and displays the names of individuals who are students (`isStudent: true`) and live in Australia.

function personWhoIsStudent(data){

    if(!data ||!Array.isArray(data)){
        console.log("Invalid Input");
        return [];
    }

    const studentName=[];

    for(let i=0;i<data.length;i++){
       if(data[i].isStudent && data[i].country==='Australia'){
        studentName.push(data[i].name);
       }
    }
    if(studentName.length===0){
        console.log("Student not found");
    }
    else{
        console.log(studentName);
    }
    return studentName;

}
export {
    personWhoIsStudent
}


//    Write a function that accesses and logs the name and city of the individual at the index position 3 in the dataset.

function indexNo3(data,index){
    if(!data || !Array.isArray(data)){
        console.log("Invalid Input");
        return [];
    }
    const person=data[index];
    console.log(`Name: ${person.name}, City: ${person.city}`);
    return { name: person.name, city: person.city };

}
export {
    indexNo3
}

//    Implement a loop to access and print the ages of all individuals in the dataset.

function allPersonAge(data) {
    if (!data || !Array.isArray(data)) {
        console.log("Invalid Input");
        return;
    }

    for (let i = 0; i < data.length; i++) {
        console.log(`Age of ${data[i].name}: ${data[i].age}`);
    }
}

export { allPersonAge};

function  firstHobby(data){

    if(!data || !Array.isArray(data)){
        console.log("Invalid Input");
        return [];
    }
    for(let i=0;i<data.length;i++){
        
        const fHobby=data[i].hobbies && data[i].hobbies.length>0?data[i].hobbies[0]:"Hobby not found";
            console.log(`${data[i].name}:${fHobby}`);
        
    }
}

export {
    firstHobby
}

//Write a function that accesses and prints the names and email addresses of individuals aged 25.

function nameEmailOfAge25(data) {
    if(!data ||!Array.isArray(data)){
        console.log("Invalid Input");
        return ;
    }
    for(let i=0;i<data.length;i++){

        if(data[i].age===25){
            console.log(`${data[i].name}:${data[i].email}`);
        }
    }
    
}
export{
    nameEmailOfAge25
}

//Implement a loop to access and log the city and country of each individual in the dataset.

function cityAndCountry(data) {
    if(!data || !Array.isArray(data)){
        console.log("Invalid Input");
        return;
    }
    for(let i=0;i<data.length;i++){
        console.log(`${data[i].city},${data[i].country}`);
    }
}

export{
    cityAndCountry
}