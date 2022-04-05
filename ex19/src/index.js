function myDoWhile(){
    var myNumbers = "";
    var i=0;
    do{
        if(i != 9){
            myNumbers += i;
            myNumbers += ", ";
        } else {
            myNumbers += i;
        }
        i++;

    } while(i <= 9);
    return myNumbers;
}
console.log(myDoWhile());
module.exports = myDoWhile;
