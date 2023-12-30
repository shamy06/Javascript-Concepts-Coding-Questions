//map :- it return new array
const number=[2,4,5,6,8];

const double= number.map((i)=>i*2);

console.log(double) // returns an array of double:-  [4, 8, 10, 12, 16]

//polyfill of a map
Array.prototype.ourMap=function(){
    const newArray=[]
    for(i=0;i<this.length;i++){
        newArray.push(this[i]*2);
    }
    return newArray;
}

const poylfillDouble=number.ourMap()
console.log(poylfillDouble) // returns an array of double:-  [4, 8, 10, 12, 16]