const color=[ "#ecf542","#38d419","#19d4c1","#1929d4","#d42f19","#d419be"    
];
const container=document.querySelector(".container");
const btn=document.querySelector(".btn");
btn.addEventListener("click",randomColor);
const hexCode=document.querySelector(".hex-code");
function randomColor(){
    const random=Math.floor(Math.random()*color.length);
    const colorActive = color[random];
    hexCode.innerHTML=colorActive;
    container.style.backgroundColor=colorActive;

}