class Planet {
	constructor(x, y, distance, size, speed) {
		this.cx = x;
		this.cy = y;
		
		this.x = 0;
		this.y = 0;
		
		this.size = size;
		this.color = "#FFFFFF";
		
		//rotation
		this.angle = -1;
		this.distance = distance;
		this.speed = speed / 100;
	}
	
	rotate(){
		this.angle += this.speed;
		
		this.x = this.distance * Math.cos(this.angle) + this.cx;
		this.y = this.distance * Math.sin(this.angle) + this.cy;
	}

	setcolor(color){
		this.color = color;
	}

	draw(){
		fill(this.color);
		ellipse(this.x, this.y, this.size, this.size);
		
		noFill(this.color);
		stroke(this.color);
		circle(this.cx, this.cy, this.distance, this.distance);
	}
}
