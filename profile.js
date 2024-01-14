const colorBtn = document.querySelector("#color");
const placeBtn = document.querySelector("#place");
const ritualBtn = document.querySelector("#ritual");

function favColor (evt){
    evt.preventDefault();
    alert("My favorite color is black.");
}

function favPlace (evt){
    evt.preventDefault();
    alert("My favorite place is home.");
}

function favRitual (evt){
    evt.preventDefault();
    alert("My favorite ritual is dinner and jeopordy.")
}


colorBtn.addEventListener("click", favColor);
placeBtn.addEventListener("click", favPlace);
ritualBtn.addEventListener("click", favRitual);

