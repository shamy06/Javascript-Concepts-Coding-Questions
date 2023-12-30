const names=["Haryana","Goa","UP","MP"]

function consoleFunc(x) {
    console.log(x);
 }
 names.forEach(consoleFunc) // output: retrun an elemnt from array

 // polyfill of forEach

 Array.prototype.forEach= function(callback){ //Array.prototype.anyname can be taken even forEach also but it's better to avoid for readablilty
    console.log("Polyfill")
    for(i=0;i<this.length;i++){
        callback(this[i])
    }

 }

 names.forEach(consoleFunc);