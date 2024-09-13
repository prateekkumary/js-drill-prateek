import { counterFactory ,limitFunctionCallCount} from "./solution.js";


console.log(counterFactory().decrement());
console.log(counterFactory().increament());


const limitedFunction = limitFunctionCallCount((msg) => `Message: ${msg}`, 3);
console.log(limitedFunction('Hello')); // Output: Message: Hello
console.log(limitedFunction('World')); // Output: Message: World
console.log(limitedFunction('Again')); // Output: Message: Again
console.log(limitedFunction('Not Called')); // Output: null"