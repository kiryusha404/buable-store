var images = ["Img/News/Slayder/1s.jpg","Img/News/Slayder/2s.jpg","Img/News/Slayder/3s.jpg","Img/News/Slayder/4s.jpg"];

function A() {
	var slider = document.getElementById("slider");
	document.getElementById('radio1').style.background = "#274D7E";
	document.getElementById('radio2').style.background = "white";
	document.getElementById('radio3').style.background = "white";
	document.getElementById('radio4').style.background = "white";
	slider.src = images[0];
}
function B() {
	var slider = document.getElementById("slider");
	document.getElementById('radio1').style.background = "white";
	document.getElementById('radio2').style.background = "#274D7E";
	document.getElementById('radio3').style.background = "white";
	document.getElementById('radio4').style.background = "white";
	slider.src = images[1];
}
function C() {
	var slider = document.getElementById("slider");
	document.getElementById('radio1').style.background = "white";
	document.getElementById('radio2').style.background = "white";
	document.getElementById('radio3').style.background = "#274D7E";
	document.getElementById('radio4').style.background = "white";
	slider.src = images[2];
}
function D() {
	var slider = document.getElementById("slider");
	document.getElementById('radio1').style.background = "white";
	document.getElementById('radio2').style.background = "white";
	document.getElementById('radio3').style.background = "white";
	document.getElementById('radio4').style.background = "#274D7E";
	slider.src = images[3];
}
