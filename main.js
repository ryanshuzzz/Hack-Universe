Earth = new Planet(100, 100, 10);

function setup() {
	createCanvas(1280, 720);
}

function draw() {
	Earth.rotate();
	
	background(0);
	Earth.draw();
}
