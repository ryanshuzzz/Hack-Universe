milky = new solarsystem();
stars = new starsystem();

function draw() {
	scale(1);
	milky.rotatePlanets();
	background(0);
	stars.draw();
	milky.drawPlanets();
}
