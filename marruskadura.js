var canvas = document.querySelector("canvas");
var c = canvas.getContext("2d");


var x = 100;
var y = 500;
var dx = 20;

function lurra(){
c.fillStyle = "#5FB404";
c.fillRect(0, 500, 1400, 130);
}

function pilota(){
c.beginPath();
c.arc(x,y,10,0,2*Math.PI);
c.stroke();
c.fillStyle = "#FFFFFF";
c.fill();
ctx.closePath();
}

function marruskadura(){
if (((x >= 500) && (x<=1000)) && (y ==500))
{
	if((x >= 500) && (x <=1000)){
	dx = dx * 0.888;
	}
}

}
function mugimendu(){
x += dx;
y = 500;
}

function draw(){
c.clearRect(0, 0, canvas.width, canvas.height);
lurra ();
marruskadura();
mugimendu();
pilota();
requestAnimationFrame(draw);
}

setInterval(draw, 100);

draw();
