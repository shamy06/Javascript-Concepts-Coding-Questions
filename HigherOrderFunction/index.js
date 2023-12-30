const radius=[2,3,4,5]

const area =function(radius){
    return "Area "+Math.PI * radius*radius;
}

const cicumference = function(radius){
    return "Cicuference " +2*Math.PI*radius;
}

const calculate = function(radius,logic){
    for(var i=0;i<radius.length;i++){
        console.log(logic(radius[i]  ));
    }
}

calculate(radius,area);
calculate(radius,cicumference);

// map(), filter, reduce, object.enteries etc are higher order functions