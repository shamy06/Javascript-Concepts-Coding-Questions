const logicAlbums = [
    {
        name: "Bobby Tarantino",
        rating: 5,
    },
    {
        name: "The Incredible True Story",
        rating: 4.5
    },
    {
        name: "Supermarket",
        rating: 4.9,
    },
    {
        name: "Neon",
        rating: 4.2,
    },
    {
        name: "Under Pressure",
        rating: 5
    },
];

function greaterThan(x) {
    return x.rating >= 4.5;
  }

const filterValue = logicAlbums.filter(greaterThan);
console.log(filterValue); // retrun an araay of an object having rating above 4.5 or equal so 4 objects returned

// polyfill of an filter

Array.prototype.ourFilter = function (callback) {
    const newFilterArray = []
    console.log("Poylfill")
    for (var i = 0; i < this.length; i++) {
        if (callback(this[i])) {
            newFilterArray.push(this[i])
        }
    }
    return newFilterArray

}

const polyfillfilterValues = logicAlbums.ourFilter(greaterThan);

console.log(polyfillfilterValues) // retrun object having rating above 4.5 or equal so 4 objects returned