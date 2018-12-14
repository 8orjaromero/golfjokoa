var canvas = document.querySelector("canvas");
var c = canvas.getContext("2d");

var konbertsioa = 12.6;

//denbora eta lurraren altuera
var t = 0;
var altuera = 580;

//pilotaren hasierako parametroak
var x = 100;
var y = altuera;
var y0 = altuera;

//pilotaren azelerazioa(grabitatorioa) eta abiadura totala
var v;
var ay = 9.8*konbertsioa;

//golflariaren irudia
var img = document.getElementById("golflaria");


//Elementuak jokoan
function pilota(){

c.beginPath();
c.arc(x,y,5,0,2*Math.PI);
c.stroke();
c.fillStyle = "#FFFFFF";
c.fill();

}

function draw(){
	c.drawImage(img, x-105, 440);
	pilota();
}

//animazioa gelditu
function gelditu(){
	 if (y > altuera){
 	cancelAnimationFrame(parabolaReq);
 	y = altuera;
 	}
}

//Parabolaren funtzioa
function parabola(v, gradu){

var dx = v*Math.cos(gradu)*konbertsioa;
var dy = v*Math.sin(gradu)*konbertsioa;

y=y0+dy*t+(ay*t*t)/2;
t+=1/60;
console.log(y);

x-=dx*1/60;

c.clearRect(0,0,innerWidth,innerHeight);
draw();
}

//Makil motak parabolari aplikaturik
function putter(){
parabola(-10, 1*Math.PI/18);
gelditu();
var parabolaReq = requestAnimationFrame(putter);
}

function iron(){
parabola(-20, Math.PI/4);
gelditu();
var parabolaReq = requestAnimationFrame(iron);
}

function driver(){
parabola(-25, 7*Math.PI/18);
gelditu();
var parabolaReq = requestAnimationFrame(driver);
}


//----------------------------------------JOKOAREN FUNTZIONAMENDUAREN HASIERA--------------------------------------------------------------------------------------


draw();

window.addEventListener("keydown", tekla, false);

function tekla(e) {
   //p tekla
    if (e.keyCode == "80") {
        y0 = altuera;
        t = 0;
        putter();
    }
    //i tekla
     if (e.keyCode == "73") {
        y0 = altuera;
        t = 0;
        iron();
    }
    //d tekla
     if (e.keyCode == "68") {
        y0 = altuera;
        t = 0;
        driver();
    }
}
