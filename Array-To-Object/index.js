const arr=[1,2,4,5,67,80,24,56]
let evenOddObject= {}

const arrToObj =()=>{
    let even=0
    let odd=0
    arr.forEach((i)=>{
        if(i%2==0){
        even+=1
        }
        else{
            odd+=1
        }
    }
    )
    evenOddObject['even'] = even;
    evenOddObject['odd']= odd;
    return evenOddObject
}

let result = arrToObj();
console.log(JSON.stringify(result))