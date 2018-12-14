//URA + PUNTUAZIO MARKAGAILUA

var canvas = document.querySelector("canvas");
var c = canvas.getContext("2d");

var x = 30;
var y = 100;

var dx = 2; //abiadura
var dy = 3; //abiadura

var puntuazioa = 0 //Puntuazioa aldatzen joango da

var x1Helmuga = 1 //zuloaren kokapena
var x2Helmuga = 1

function lurra(){
c.fillStyle = "blue";
c.fillRect(0, 500, 1400, 130);
}

function pilota(){

	c.beginPath();
	c.arc(x,y,10,0,2*Math.PI);
	c.stroke();
	c.fillStyle = "#FFFFFF";
	c.fill();
}

function puntuazioaMarkagailua() {
    c.font = "24px Arial";
    c.fillStyle = "black";

	/*puntuazioaren aldaketa

	if(((x>x1Helmuga)&&(x<x2Helmuga))&&((y>485)&&(y<515)))
	{
		puntuazia+=10;
	}*/

    c.fillText("Puntuazioa = "+puntuazioa, 1130, 40);
}

function pelotarenMugimendua(){

	x+=dx;
	y+=dy;

}

function uretanMugimendua(){
	if((y>550)&&(y<590))
	{
		dy=-dy;
	}
	if((dy<0)&&((y>480)&&(y<500)))
	{
		dy=0;
		dx=0;
	}
}

function draw(){
	c.clearRect(0, 0, canvas.width, canvas.height);
	puntuazioaMarkagailua();
	pilota();
	lurra ();
	pelotarenMugimendua ();
	uretanMugimendua();
	requestAnimationFrame(draw);
}
draw()
