const character="#";
const count=8;
const rows=[];
for(let i=0;i<count;i++){
    let row=[];
    for(let j=0;j<count;j++){
        row.push(character);
    }
    rows.push(row.join(""));
}
console.log(rows.join("\n"));