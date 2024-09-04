//import { arrayOfObjects } from "./persons"; 

function emailOfPerson(data){
    const emails=[];
    for(let i=0;i<data.length;i++){
        emails.push(data[i].email);
    }
    console.log(emails);
    return 
}
export {
    emailOfPerson
};
