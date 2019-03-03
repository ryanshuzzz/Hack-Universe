Earth = new Planet(500, 500, 100, 10, 1);
Mercury = new Planet(500, 500, 200, 20, 2);
Venus = new Planet(500, 500, 300, 14, -3);
Sun = new Planet(500, 500, 0, 50, 0);







				 
function setup() {
	createCanvas(1300, 900);
}

function draw() {

	Earth.rotate();
	Mercury.rotate();
	Venus.rotate();
	Sun.rotate();
	
	background(0);
	
	Earth.draw();
	Mercury.draw();
	Venus.draw();
	Sun.draw();
}
