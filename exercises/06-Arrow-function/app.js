var dollarToEuro = function(dollarValue){
	return dollarValue * 0.89;
}
var euroToYen = function(euroValue){
	return euroValue * 124.15;
}
//***** YOUR CODE BELOW ↓ ******///

const multy = (a,b) => {
    return a*b;
}

console.log(dollarToEuro(1, 1) + euroToYen(1, 1) * 137)