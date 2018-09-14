$( document ).ready(function() {
	let modules = [
	'EventController.js',
	'CalculateController.js',
	'Element.js'
	];

	modules.forEach(function(item){
	let js = document.createElement("script");

	js.type = "text/javascript";
	js.src = item;

	document.head.appendChild(js);
	});
});