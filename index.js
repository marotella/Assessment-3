console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('You form has been submitted.');
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);