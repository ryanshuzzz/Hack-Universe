milky = new solarsystem();
stars = new starsystem();

function draw() {
	milky.rotatePlanets();
	background(0);
	stars.draw();
	milky.drawPlanets();
}
