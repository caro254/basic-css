




function changeColor(){
 var text =document.getElementById("para").style.color="yellow";  
}

function backToNormal(){
    var text =document.getElementById("para").style.color=""; 
}
    


function changeColor(){
var text = document.getElementById("blocks").style.color="red";
}
function backToNormal(){
var text = document.getElementById("blocks").style.color ="";
}

var a = document.createElement('a');
var linkText = document.createTextNode("About mario");
a.appendChild(linkText);
a.title = "my title text";
a.href = "History.html";
document.body.appendChild(a);
document.body.prepend(a);

let sub = document.querySelector(".submit");
sub.style.backgroundColor = "Black";
sub.style.color = "white";
sub.style.fontSize = "3em";

var btn = document.createElement("BUTTON");   // Create a <button> element
btn.innerHTML = "CLICK ME";                   // Insert text
document.body.appendChild(btn);


const text = document.querySelector(".title");
const changeColor= document.querySelector(".changeColor");

text.style.backgroundColor= "white";