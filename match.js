
var smileyTop = [];
var smileyLeft = [];
var screenSizeX = 800;
var screenSizeY = 500;
var finished = false;
var removed = false;
var score = 0;
var scoreIncreaser = 100;

function createSmiley(top,left)
{
	var smiley = document.createElement("div");
	smiley.setAttribute("id","smile");
	var mouth = document.createElement("div");
	mouth.setAttribute("id","mouth");
	var eye1 = document.createElement("div");
	mouth.setAttribute("id","eye1");
	var eye2 = document.createElement("div");
	mouth.setAttribute("id","eye2");

	smiley.appendChild(mouth);
	smiley.appendChild(eye1);
	smiley.appendChild(eye2);

	smiley.style.position = "absolute";
	smiley.style.top = top+"px";
	smiley.style.left = left+"px";
	smiley.style.width = "100px";
	smiley.style.height = "100px";
	smiley.style.border = "5px solid black";
	smiley.style.background = "yellow";
	smiley.style.borderRadius = "100px";
	smiley.style.margin = "0px";



	eye1.style.position = "absolute";
	eye1.style.width = "20px";
	eye1.style.height = "30px";
	eye1.style.top = "20px";
	eye1.style.left = "20px";
	eye1.style.background = "black";
	eye1.style.borderRadius = "100px";
	

	eye2.style.position = "absolute";
	eye2.style.width = "20px";
	eye2.style.height = "30px";
	eye2.style.top = "20px";
	eye2.style.left = "60px";
	eye2.style.background = "black";
	eye2.style.borderRadius = "100px";


	mouth.style.position = "absolute";
	mouth.style.width = "70px";
	mouth.style.height = "70px";
	mouth.style.top = "15px";
	mouth.style.left = "15px";
	mouth.style.background = "yellow";
	mouth.style.borderBottom = "8px solid black"
	mouth.style.borderRadius = "50px";

	


	var node = document.getElementById("BODY");
	node.appendChild(smiley);
	return smiley;


}
function getLeftPositionForNewSmiley()
{
	var x = Math.floor(Math.random()*screenSizeX/2);
	//while(smileyLeft.indexOf(x) != -1)
	//	x = Math.floor(Math.random()*screenSizeX/2);
	return x;
}

function getTopPositionForNewSmiley(x)
{
	if(smileyLeft.indexOf(x) == -1){
		var y = Math.floor(Math.random()*screenSizeY);
		return y;
	}
	var y = Math.floor(Math.random()*screenSizeY);
	while(smileyTop.indexOf(y) != -1)
		y = Math.floor(Math.random()*screenSizeY);
	return y;
}
function create5smiley()
{
	for(var i = 1 ; i <= 5 ; i++)
	{
		var x = getLeftPositionForNewSmiley();

		var y = getTopPositionForNewSmiley(x);

		smileyLeft.push(x);
		smileyTop.push(y);
		createSmiley(y,x+10);
		createSmiley(y,x+610);
		console.log(x+" "+y);

	}
}
function drive()
{
	var divide = document.createElement("div");
	divide.setAttribute("id","divide");


	divide.style.position = "absolute";
	divide.style.left = "600px";
	divide.style.width = "10px";
	divide.style.height = (screenSizeY+100)+"px";
	divide.style.background = "red";
	divide.style.border = "2px solid black";

	var node = document.getElementById("BODY");
	node.appendChild(divide);

	/*create5smiley();
	var x = getLeftPositionForNewSmiley();
	var y = getTopPositionForNewSmiley();

	var extraSmiley = createSmiley(y,x);
	extraSmiley.onclick = function(){

		node.removeChild(node.lastChild);
		smileyTop.length = smileyTop.length-1;
		smileyLeft.length = smileyLeft.length-1;
		removed = true;
		console.log(smileyLeft);
		console.log(smileyTop);
		}	
		*/
		createSmileysAndHandle();
	
}
function createSmileysAndHandle()
{
	create5smiley();
	var x = getLeftPositionForNewSmiley();
	var y = getTopPositionForNewSmiley();

	var extraSmiley = createSmiley(y,x);
	extraSmiley.onclick = function(){
		var node = document.getElementById("BODY");
		node.removeChild(node.lastChild);
		smileyTop.length = smileyTop.length-1;
		smileyLeft.length = smileyLeft.length-1;
		removed = true;
		console.log(smileyLeft);
		console.log(smileyTop);
		}	
}
function check(e)
{
	if(!removed)
	{
		alert("game over\n Your Score : " + score);
		var node = document.getElementById("BODY");
		while(node.firstChild)
			node.removeChild(node.firstChild);
	}
	else{
		removed = false;
		score += scoreIncreaser;
		scoreIncreaser += 100;
		createSmileysAndHandle();
	}
	//alert(e.pageX + " " + e.pageY);
	/*var top = e.clientY;
	var left = e.clientY;

	var startY = smileyTop[smileyTop.length-1];
	var endY = startY + 110;
	var startX = smileyLeft[smileyLeft.length-1];
	var endX = startX + 110;

	if(top >= startY && top <= endY &&
		left >= startX && left <= endX)
		alert(startX + " " + endX + "," + startY + " " + endY);
		*/
}