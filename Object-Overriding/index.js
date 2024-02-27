let personalData = {
    name: "Shubham",
    lastName: "Yadav",
    email: "shubham.yadav@gmail.com"
}
console.log("Before", personalData)
//override email to shubham@ymail.com
let result = { ...personalData, email: "shubham@ymail.com" }
console.log(result)