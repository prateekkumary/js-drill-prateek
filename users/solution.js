

//Q1 Find all users who are interested in playing video games.
import { users } from "./users.js";



const userPlayingVideoGame =(data) =>{
    
    for (const user in data){
        if (data[user].interests && data[user].interests.includes("Playing Video Games")){
            return (`${user}:${data[user].interests}`);
        }
    }
};

export{
    userPlayingVideoGame
}