function burgerClick(){
	var elem = document.getElementById("mob-nav");
	var burgElem = document.getElementById("burger");
	var clasTag = document.getElementById("section");
	var avatarImg = document.getElementById("mob-avatar");
	burgElem.classList.toggle("open");
	elem.classList.toggle("open");
	clasTag.classList.toggle("close");
	avatarImg.classList.toggle("opacit");

} 