uni = new universe();
stars = new starsystem(10);
stars2 = new starsystem(5, 150);

function draw() {
	stars.setDelta(0,0);
	stars2.setDelta(0,0);
	
	// Up
	if (keyIsDown(87)){
		uni.move(0, 1);
		stars.setDelta(null,1)
		stars2.setDelta(null,1);
	}
	
	// Down
	if (keyIsDown(83)){
		uni.move(0, -1);
		stars.setDelta(null,-1);
		stars2.setDelta(null,-1);
	}
	// Left
	if (keyIsDown(68)){
		uni.move(-1, 0);
		stars.setDelta(-1,null);
		stars2.setDelta(-1,null);
	}
	// Right
	if (keyIsDown(65)){
		uni.move(1, 0);
		stars.setDelta(1,null);
		stars2.setDelta(1,null);
	}
	//Reset with Space
	if (keyIsDown(32)){
		uni.resetCam();
		uni.move(1,1);
	}
	//Mobile touch
  
	background(0);
	stars.draw();
	stars2.draw();
	uni.update();
}
