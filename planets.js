class Planet {
	constructor(x, y, size) {
		this.cx = x;
		this.cy = y;
		
		this.x = 0;
		this.y = 0;
		
		this.size = size;
		this.color = "#FFFFFF";
		
		//rotation
		this.angle = -1;
		this.distance = 100;
		this.speed = 0.01;
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
		ellipse(this.x, this.y, this.size, this.size);
	}
}
