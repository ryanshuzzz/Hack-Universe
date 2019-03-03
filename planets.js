var planetColors = ["#97979F", "#CECCD1", "#B5A7A7","#99857A", "#C67B5C",
					"#E27B58", "#FF9D6F", "#663926", "#8E6A5A", "#3B5D38",
					"#8CB1DE", "#945B47", "#927E77", "#3C4258", "#343E47",
					"#7B7869", "#A49B72", "#C5AB6E", "#C3A171"];

var sunColors = ["#FFE484", "#FFCC33", "#FC9601", "#D14009"];

class Planet {
	constructor(x, y, distance, size, speed) {
		this.cx = x;
		this.cy = y;
		
		this.x = 0;
		this.y = 0;
		
		this.size = size;
		this.color = "#FFFFFF";
		
		//rotation
		this.angle = Math.floor(Math.random() * 360);
		this.distance = distance;
		this.speed = speed / 10000;
		let color = planetColors[Math.floor(Math.random() * planetColors.length)];
		this.color = color;
	}
	
	rotate(){
		this.angle += this.speed;
		
		this.x = this.distance * Math.cos(this.angle) + this.cx;
		this.y = this.distance * Math.sin(this.angle) + this.cy;
	}
	
	isSun(){
		let color = sunColors[Math.floor(Math.random() * sunColors.length)];
		this.color = color;
	}
	
	getDistance(){
		return this.distance;
	}

	setCenter(cx, cy){
		this.cx = cx;
		this.cy = cy;
	}

	draw(cx, cy){
		stroke(120);
		circle(this.cx, this.cy, this.distance, this.distance);
		fill(this.color);
		noStroke();
		ellipse(this.x, this.y, this.size, this.size);
		
		noFill(this.color);
	}
}
