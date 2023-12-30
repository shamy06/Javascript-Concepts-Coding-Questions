//currying using bind method
function multiply(x,y){
    console.log(x*y)
}

const multiplyTwo=multiply.bind(this,2);
multiplyTwo(5) // output:10


// currying using clouser 
function Rectangle(length){
    return function (breadth){
        return function (width){
            console.log("volume of rectangel",length*breadth*width);
        }
    }
}

let calculateVolume=Rectangle(10);
calculateVolume(2)(3);