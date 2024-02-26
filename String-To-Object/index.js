let data="This is my house"
let obj={}

const setObject=(data2)=>{
for(let i=0; i<data2.length; i++){
    obj[data2[i]]=data2[i].length
}
return obj;
    
}
let data2 = data.split(' ')
let result = setObject(data2)
console.log(JSON.stringify(result))