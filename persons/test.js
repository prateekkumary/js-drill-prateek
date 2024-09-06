
import { arrayOfObjects } from "./persons.js";
import {emailOfPerson } from "./solution.js"
import { hobbyAndAge } from "./solution.js"
import { personWhoIsStudent} from "./solution.js"
import { indexNo3} from "./solution.js";
import { allPersonAge } from "./solution.js";
import { firstHobby } from "./solution.js";
import { nameEmailOfAge25 } from "./solution.js";
import { cityAndCountry } from "./solution.js";

emailOfPerson(arrayOfObjects);
emailOfPerson();
emailOfPerson(null);
emailOfPerson(undefined)


hobbyAndAge(arrayOfObjects,30);
hobbyAndAge();
hobbyAndAge(arrayOfObjects,45);
hobbyAndAge(arrayOfObjects,35);

personWhoIsStudent(arrayOfObjects);

indexNo3(arrayOfObjects,3 );
allPersonAge(arrayOfObjects);
firstHobby(arrayOfObjects);

nameEmailOfAge25(arrayOfObjects);

cityAndCountry(arrayOfObjects);