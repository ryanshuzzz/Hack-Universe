uni = new universe();

function draw() {
	// Up
	if (keyIsDown(87))
		uni.move(0, 1);
		
	// Down
	if (keyIsDown(83))
		uni.move(0, -1);
	
	// Left
	if (keyIsDown(68))
		uni.move(-1, 0);
	
	// Right
	if (keyIsDown(65))
		uni.move(1, 0);
	
	background(0);
	uni.update();
}
