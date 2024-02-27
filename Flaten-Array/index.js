let array= [1,2,4,5,[6,7],[9,0,54],[[[7]]],0,[10,20,[30,40]]] //data is array
// let arrayOfObjectList =[{name:"shubham"},[[{name:"doubleNested"}]],[{name:Nested}]] //we can use arrayOfObjects too

let newArray=[]
function flattenArray(data){
    data.map((item)=>{
    if(Array.isArray(item)){
    flattenArray(item)
    }else{
        newArray.push(item)
    }
    })
}
flattenArray(array)
console.log(newArray)