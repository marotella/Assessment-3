console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('You form has been submitted.');
}

let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

let welcomeImage = document.querySelector("#welcome");

function mouseoverCompliment(evt){
	evt.preventDefault();
	alert("You are the best!")
}

welcomeImage.addEventListener("mouseover", mouseoverCompliment)