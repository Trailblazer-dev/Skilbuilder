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

let movies =["Atlas","King kong","Runner"];
let series = ["Manifest","The 100","Gotham"];//this is spread which allow to copy all element from one array to another"..."
let entertainment = [...movies,...series];
console.log(entertainment.length);
const position=[2,4,6,8,10];
let finalPosition = position.map(point=>point*2);
//console.log(finalPosition);
let arr=movies.join(' ');
//console.log(arr);
let bestmovie = series.find((movie)=>{
    movie =="Gotham";
    return movie;
});
//console.log(bestmovie);
const names = ["Tom", "Jessica", "Quincy", "Naomi"];
console.log(names.sort(() => Math.random() - 0.5));
//learning about the date object
/*
const date = new Date()
const day = date.getDate();
const month = date.getMonth()+1;
const year = date.getFullYear();
console.log(`Today is on ${day} /month ${month} /year ${year}`);
const hours = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();
console.log(`The time is ${hours}:${minutes}:${seconds}`);
*/
//learning about destructuring objects
const Team= {
    HeadCoach:"Fernades",
    Manager:"Ronaldo",
    Players:["Messi","Ronaldo","Neymar"]
}

const {Manager,Players} =Team;
console.log(Manager);
