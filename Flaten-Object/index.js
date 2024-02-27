let array = {
    name: "shubham", 
    age: 25, 
    address: { road: "abc", city: "xyz" }, 
    designation: {
        position: "developer", salary: "10000", 
        hobbies: {
            drink: "tea", 
            food: {
                continental: "chinese",
                maincourse: { food: "briyani" }
            }
        }
    }
}

let newObject = {}
function flatObject(data) {
    for (const key in data) {
        if (typeof data[key] == "object") {
            flatObject(data[key])
        }
        else {
            newObject[key] = data[key]
        }
    }
}

flatObject(array)
console.log(array, newObject)