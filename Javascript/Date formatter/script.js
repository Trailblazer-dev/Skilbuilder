const dropdownDate = document.getElementById("date-options");
const currentDate = document.getElementById("current-date");
const  date = new Date();
const year = date.getFullYear();
const month = date.getMonth()+1;
const day = date.getDate();
const hour = date.getHours();
const minutes = date.getMinutes();

const dateFormatter = `${day}-${month}-${year}`;

currentDate.textContent = dateFormatter;
dropdownDate.addEventListener("change",()=>{



switch (dropdownDate.value){
    case "yyyy-mm-dd":
        currentDate.textContent = dateFormatter.split("-").reverse().join("-");
        break;
    case "mm-dd-yyyy-h-mm":
        currentDate.textContent = `${month}-${day}-${year}-${hour} Hour ${minutes} minutes`;
        break;
    default:
        currentDate.textContent = dateFormatter;
        break;
}

})