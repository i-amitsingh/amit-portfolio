var menuBtn = document.getElementById("menuBtn");
var sideNav = document.getElementById("sideNav");
sideNav.style.right = "-250px";
menuBtn.onclick = function () {
  if (sideNav.style.right == "-250px") {
    sideNav.style.right = 0;
    menuBtn.src = "images/menubtncross.png";
    
  } else {
    sideNav.style.right = "-250px";
    menuBtn.src = "images/menu.png";
    menuBtn.style.mixBlendMode = multiply;
  }
};
var scroll = new SmoothScroll('a[href*="#"]' ,{
  speed : 1000,
  speedAsDuration :true

});


