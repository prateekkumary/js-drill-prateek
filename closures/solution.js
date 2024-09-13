function counterFactory() {
    // Return an object that has two methods called `increment` and `decrement`.
    // `increment` should increment a counter variable in closure scope and return it.
    // `decrement` should decrement the counter variable and return it.

    let count=23;

    let obj={
        increament : function(){
            count++;
            return count;
        },
        decrement : function(){
            count--;
            return count;
        }
    };
    return obj;
  }

  function limitFunctionCallCount(cb, n) {
    let count=0;
        return function(...arr){
            if(count<n){
                count+=1;
                return cb(...arr);
            }
            else{
                return null;

            }
        }
  }

  export{counterFactory,limitFunctionCallCount}