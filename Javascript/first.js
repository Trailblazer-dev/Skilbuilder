/*
let sep='Hello';
sep="NO"
console.log(sep);
let numeric=[11,23,"orange","apple"];
console.log(numeric.length)
numeric[numeric.length-1] ="mango";
console.log(numeric);
let pushed = numeric.push(4);
console.log(pushed);*/
function isValid(str){
    const regex=/[+-<>=]/g;
    return str.match(regex);
}
let reg=[];
reg.push(isValid("+oaw<dkjie"));
console.log(reg.length);
let strNum=