class Star {
	constructor (x, y, size) {
		this.x = x;
		this.y = y;
		this.size = size;
		
		this.alpha = 255;
		this.alpha_min = 0;
		this.alpha_delta = (Math.floor(Math.random() * 3) + 1) / 10;
	}
	
	draw(){
		noStroke();
		fill(this.alpha);
		square(this.x, this.y, this.size);
		
		this.alpha -= this.alpha_delta;
		if(this.alpha <= this.alpha_min || this.alpha >= 255){
			this.alpha_delta = -this.alpha_delta;
		}
		
		//this.x += 1 * this.alpha_delta;
		if(this.x > 1300){
			this.x = 0;
		}
	}
}

class Stars {
	constructor() {
		this.buffer = [];
		this.max = 500;
		
		var i = 0;
		for(i = 0; i < this.max; i++){
			var x = Math.floor(Math.random() * 1300) + 1;
			var y = Math.floor(Math.random() * 900) + 1;
			var size = Math.floor(Math.random() * 3) + 1;
			this.buffer.push(new Star(x, y, size));
		}
	}
	
	// Draw all stars
	draw(){
		var i = 0;
		for(i = 0; i < this.buffer.length; i++){
			this.buffer[i].draw();
		}
	}
}
