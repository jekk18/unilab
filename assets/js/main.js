
var burgerLines = document.getElementById("burger-lines");


burgerLines.addEventListener("click", function(){
    document.getElementById('burger-menu').classList.toggle("open");
  });
  burgerLines.addEventListener("click", function(){
    document.getElementById('burger-lines').classList.toggle("fixed");
  });

