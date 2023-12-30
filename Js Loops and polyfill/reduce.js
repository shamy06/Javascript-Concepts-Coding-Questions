// reduce function works where we take all array and comes with single value as 

const arr =[1,2,23,42,5]

const output = arr.reduce(function(acum,cur){
    acum=acum<cur? cur : acum;
    return acum;
},0);

console.log(output)


//polyfill of reduce

function additionFunction(accumulator, current) {
    accumulator = accumulator + current;
    return accumulator;
  }
  
Array.prototype.ourReduce=function(callback,initalValue){
    var accumulator = initalValue ===undefined ?undefined :initalValue;
    for(var i=0;i<this.length;i++){
        if(accumulator!==undefined){
            accumulator=callback.call(undefined,accumulator,this[i],i,this);
        }else{
            accumulator = this[i];
        }
        return accumulator;
    }
}

console.log(arr.ourReduce(additionFunction))