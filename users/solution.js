

//Q1 Find all users who are interested in playing video games.
import { users } from "./users.js";



const userPlayingVideoGame =() =>{
    
        const result = [];
        const videoGamesRegex = /Playing Video Games/i; 
    
        for (const user in users) {
            if (users[user].interests) {
                let interests = users[user].interests;
                let i = 0;
                while (i < interests.length) {
                    if (videoGamesRegex.test(interests[i])) {
                        result[result.length] = user; 
                        break; 
                    }
                    i++;
                }
            }
        }
        return result;
    
};

const allUsersInGermany=()=>{
    const result = [];
    for (const user in users) {
        if (users[user].nationality === "Germany") {
            result.push(user);
        }
    }
    return result;
}

const allusersWithMaster = () => {
    const result = [];
    for (const user in users) {
        let qualification = users[user].qualification;
        if (qualification.includes("Masters")) {
            result.push(user);
        }
    }
    return result;
};


const gruopOfProgramming=()=>{
    let userGolang = [];
    let userJavascript = [];
    let userPython = [];
    for (let i in users) {
        const desgination = users[i].desgination;
        if(desgination.includes("Golang")){
            userGolang.push(i);
        }
        else if(desgination.includes("Javascript")){
            userJavascript.push(i);
        }
        else if(desgination.includes("Python")){
            userPython.push(i);
        }
    }

    return [userGolang , userJavascript , userPython];

};

export{
    userPlayingVideoGame,allUsersInGermany,allusersWithMaster,gruopOfProgramming
}