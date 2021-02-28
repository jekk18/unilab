function burgerClick(){
	var elem = document.getElementById("mob-nav");
	var burgElem = document.getElementById("burger");
	var clasTag = document.getElementById("section");
	burgElem.classList.toggle("open");
	elem.classList.toggle("open");
	clasTag.classList.toggle("close");


} 