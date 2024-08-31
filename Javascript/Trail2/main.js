const inputValue = document.getElementById("input-text");
const listening = ()=>{
console.log(inputValue.value);
}

const submit = document.getElementById("submit");
submit.addEventListener("click", listening)