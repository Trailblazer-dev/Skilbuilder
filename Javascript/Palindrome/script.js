const textinput = document.getElementById('text-input');
const result = document.getElementById('result');
const resultSpan = document.getElementById('resultSpan');
const is = "is a palindrome";
const isnot = "is not a palindrome";


function display(span,text){
resultSpan.innerText = span;
result.innerText = text;
}

document.getElementById('check-btn').addEventListener('click',()=>{
    event.preventDefault();
    const inputvalue = textinput.value.trim();
if( inputvalue ===""){
    alert("Please input a value");
}
else{
    const reversedValue= inputvalue.split("").reverse().join("");

if( inputvalue === reversedValue ){
    display(inputvalue,is);
}
else{
    display(inputvalue,isnot);
}
}
}
);