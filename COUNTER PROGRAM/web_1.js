const h1 = document.getElementById("h1");

const button1 = document.getElementById("INCREASE");

const button2 = document.getElementById("RESET");

const button3 = document.getElementById("DECREASE");

let num1 = 0;

button1.onclick = function(){

    num1++;

    h1.textContent = num1;

}

button2.onclick = function(){ 

    num1 = 0;

    h1.textContent = num1;

}

button3.onclick = function(){

    num1--;

    h1.textContent = num1;

}