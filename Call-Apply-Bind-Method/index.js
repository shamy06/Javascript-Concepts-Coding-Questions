let name={
    firstname:"shubham",
    lastname:"yadav",
}

let printFullName= function(city,state){
    console.log(this.firstname+" "+this.lastname);
}

printFullName.call(name,"Dehradun","Uttarakhand");

let name2={
    firstname:"Abcd",
    lastname:"Xyz",
}
//function borrowing
printFullName.call(name2,"Lucknow","UP");

printFullName.apply(name2,["mumbai","Goa"]);

//bind method
let printMYName=printFullName.bind(name2,"Mumbai","Maharashtra"); //retruns a method instead of calling directly like call and apply
console.log(printMYName);
printMYName();