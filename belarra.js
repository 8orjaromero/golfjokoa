//Belarra

var canvas = document.querySelector("canvas");
var c = canvas.getContext("2d");

var x = 30;
var y = 100;

var dx = 2; //abiadura
var dy = 3; //abiadura

var kont = 0 //erreboteak kontatzeko


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

function pelotarenMugimendua(){

	x+=dx;
	y+=dy;

}

function belarreanMugimendua(){
	if(((y>490)&&(y<500))&&(kont == 0))
	{
		dy=-dy*0.8;
		kont++;
	}

	if((y<500)&&((kont == 1)||(kont == 2)))
	{
		dy+=0.1;
	}

	if((dy>0)&&(kont == 1))
	{
		kont++;
	}

	if((kont==2)&&((y>490)&&(y<500)))
	{
		dx = dx * 0.97;
		dy = 0;
	}
}


function draw(){
	c.clearRect(0, 0, canvas.width, canvas.height);
	lurra ();
	pilota();
	console.log(kont);
	pelotarenMugimendua ();
	belarreanMugimendua();
	requestAnimationFrame(draw);
}
draw()
