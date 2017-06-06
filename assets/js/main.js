
var menu = document.getElementById("menu-title");
var desplegable = document.getElementById("drop-menu");
menu.addEventListener("click", function(e){
	e.preventDefault();
	desplegable.classList.toggle("hide");
})