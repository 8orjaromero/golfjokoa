//HAIZEA + HAIZEAREN MARKAGAILUA

var canvas = document.querySelector("canvas");
var c = canvas.getContext("2d");

var x = 30;
var y = 100;

var dx = 2; //abiadura
var dy = 3; //abiadura

var haizea = randomNumber(1,19); //randomNumber funtzioak bueltatu duena
var haizeIndarra = haizea/10;
var haizeMarkagailua= haizea - 10; //Markagailuan agertuko den zifra
var geziak = [" ","-->","<--"];
var zeinGezi = 0;//gezia aukeratzen duena
var haizeak = Math.abs(haizeMarkagailua); //pantailaratukodena


function randomNumber(min, max) {
	return Math.round(Math.random() * (max - min) + min);
}


function pilota(){

	c.beginPath();
	c.arc(x,y,10,0,2*Math.PI);
	c.stroke();
	c.fillStyle = "#FFFFFF";
	c.fill();
}

function haizeaMarkagailua() {
    c.font = "24px Arial";
    c.fillStyle = "black";

	if (haizea < 10)
	{
		zeinGezi = 2;
	}
	if (haizea > 10)
	{
		zeinGezi = 1;
	}

    c.fillText("Haizea = "+haizeak+" km/h "+geziak[zeinGezi], 30, 40);
}

function pelotarenMugimendua(){

	x+=dx*haizeIndarra;
	y+=dy;

}

function draw(){
	c.clearRect(0, 0, canvas.width, canvas.height);
	haizeaMarkagailua();
	pilota();
	pelotarenMugimendua ();
	requestAnimationFrame(draw);
}
draw()
