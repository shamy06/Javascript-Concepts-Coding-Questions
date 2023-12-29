let message = 'Hello';
function outerFunction() {
    let audience = 'World';
    console.log(message + ' ' + audience);
    function innerFunction(){
    console.log(message + 'inner ' + audience);
    }
    return innerFunction();
}

outerFunction()