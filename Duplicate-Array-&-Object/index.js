let array = [1, 3, 2, 10, 20, 40, 10, 45, 20, 40, 60]

let uniqueArr = []

console.log("Set way", [...new Set(array)]) // using in-built set() method => Set way [ 1,  3,  2, 10, 20, 40, 45, 60 ]

const dup = (arr) => {
    arr.map((i) => {
        if (!(uniqueArr.includes(i))) uniqueArr.push(i)
    }
    )
}

dup(array)

console.log("loop-includes-way", uniqueArr) // loop-includes-way [ 1,  3,  2, 10, 20, 40, 45, 60 ]

// duplicate-Object
let arrObj = [{ name: "shubham" }, { name: "Rohit" }, { name: "shubham" }, { name: "Kamal" }, { name: "Rohit" }]

let uniqueObj = []

const dupObj = (arr) => {
    for (let index = 0; index < arrObj.length; index++) {
        if (uniqueObj.some((item) => item.name === arrObj[index].name) === false)
            uniqueObj.push(arrObj[index])
    }
}

dupObj(arrObj)

console.log("loop-some-way", uniqueObj) //loop-some-way [ { name: 'shubham' }, { name: 'Rohit' }, { name: 'Kamal' } ]
