// callback func exm
function A(name,callback){
    console.log('Hi'+' '+name);
    callback();
}
//callback function
function B(){
console.log('I am callback function');
}

A('Shubham',B)