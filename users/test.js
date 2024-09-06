import { userPlayingVideoGame } from "./solution.js";
import { users } from "./users.js";
import { allUsersInGermany } from "./solution.js";
import { allusersWithMaster } from "./solution.js";
import { gruopOfProgramming } from "./solution.js";

const testUserPlayingVideoGame=()=>{
    console.log(userPlayingVideoGame(users));
}

//Find all users staying in Germany.


const testAllUsersInGermany =()=>{
    console.log(allUsersInGermany(users));
}
// Find all users with masters Degree.
const testAllusersWithMaster =()=>{
    console.log(allusersWithMaster(users));
}

//Group users based on their Programming language mentioned in their designation.

const testGruopOfProgramming=()=>{
    console.log(gruopOfProgramming(users));
}

testUserPlayingVideoGame();
testAllUsersInGermany();
testAllusersWithMaster();
testGruopOfProgramming();