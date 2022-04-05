function myForLoop1(){
    var evenNumbers = "";
    for(var i = 0; i<5; i++){
        if(i != 4){
            evenNumbers += i*2;
            evenNumbers += ", ";
        } else {
            evenNumbers += i*2;
        }
    }
    return evenNumbers;
}

function myForLoop2(){
    var evenInverseNumbers = "";
    for(var i = 4; i>=0;i--){
        if(i != 0){
            evenInverseNumbers += i*2;
            evenInverseNumbers += ", ";
        } else {
            evenInverseNumbers += i*2;
        }
    }
    return evenInverseNumbers;
}

console.log(myForLoop1());
console.log(myForLoop2());

module.exports = {
    myForLoop1,
    myForLoop2
};