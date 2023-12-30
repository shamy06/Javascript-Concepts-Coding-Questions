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

const findValue = logicAlbums.find(greaterThan);
console.log(findValue); // retrun a  first element/object having rating above 4.5 or equal so 1 object returned

// polyfill of an find

Array.prototype.ourFind = function (callback) {
    console.log("Poylfill")
    for (var i = 0; i < this.length; i++) {
        if (callback(this[i])) {
            return this[i];
        }
    }
}

const polyfillfindValues = logicAlbums.ourFind(greaterThan);

console.log(polyfillfindValues) // retrun a  first element/object having rating above 4.5 or equal so 1 object returned