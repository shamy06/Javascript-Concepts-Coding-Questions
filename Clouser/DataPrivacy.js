//one of the useCases of clouser data privacy

function counter(){
    var count=0;
    return function (){
        count++;
        console.log(count);
    }
}

const counter = createCounter();
counter(); // Output: 1
counter(); // Output: 2