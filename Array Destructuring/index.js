let arr = ["shubham","25","10000",["Hyderabad","developer"]]

let [a,b,d,...c] =arr
// console.log(a,b,d,c)

// Nesting destructuring
let [x,y,z,[city,profession]]=arr
// console.log(x,y,z,city,profession)

//Default Value

let salArr=["shubham","24"]
let [p,q,sal="No Salary"] =salArr
// console.log(p,q,sal)

//arr to object
let arrObj = ["shubham","Yadav"];
let newArryObj = {...arrObj}
console.log(newArryObj)

//arr to objectlist
const list=[
    {id:1,name:"Shubham",age:"24"},
    {id:2,name:"Aman",age:"25"},
    {id:3,name:"Amit",age:"28"},
    {id:4,name:"Alex",age:"21"},
    {id:5,name:"Brandon",age:"22"}
]
let [, , {name}]=list;
console.log(name)

//swapping
let arrSwap=[10,20,30]
let [a1,b1,c1]=arrSwap
console.log(a1,b1,c1); // 10,20,30
[c1,a1]=[a1,c1]
console.log(a1,b1,c1) //30,20,10

