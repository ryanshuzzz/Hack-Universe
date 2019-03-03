uni = new universe();
stars = new starsystem();

function draw() {
	// Up
	stars.setDelta(0,0);
	
	if (keyIsDown(87)){
		uni.move(0, 1);
		stars.setDelta(0,5)
	}
	// Down
	if (keyIsDown(83)){
		uni.move(0, -1);
		stars.setDelta(0,-5);
	}
	// Left
	if (keyIsDown(68)){
		uni.move(-1, 0);
		stars.setDelta(-5,0);
	}
	// Right
	if (keyIsDown(65)){
		uni.move(1, 0);
		stars.setDelta(5,0);
	}
	
	background(0);
	stars.draw();
	uni.update();
}
