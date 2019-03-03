class star {
	constructor (x, y, size) {
		this.x = x;
		this.y = y;
		this.size = size;
		
		this.alpha = 200;
		this.alpha_min = 0;
		this.alpha_delta = (Math.floor(Math.random() * 3) + 1) / 2;
	}
	
	draw(s_width, s_height, dx, dy){
		noStroke();
		fill(this.alpha);
		square(this.x , this.y, this.size);

		this.x += dx;
		this.y += dy;

		
		this.alpha -= this.alpha_delta;
		if(this.alpha <= this.alpha_min || this.alpha >= 200){
			this.alpha_delta = -this.alpha_delta;
		}
	}
}

class starsystem {
	constructor() {
		this.s_width = 1920;
		this.s_height = 1920;
		this.buffer = [];
		this.max = 900;
		this.dx = 0;
		this.dy = 0;
		
		var i = 0;
		for(i = 0; i < this.max; i++){
			var x = Math.floor(Math.random() * this.s_width) + 1;
			var y = Math.floor(Math.random() * this.s_height) + 1;
			var size = Math.floor(Math.random() * 3) + 1;
			this.buffer.push(new star(x, y, size));
		}

	}
	setDelta(h,v){
		this.dx = h;
		this.dy = v;
	}
	
	
	// Draw all stars
	draw(){
		var canvas = document.getElementById('defaultCanvas0');
		
		var i = 0;
		for(i = 0; i < this.buffer.length; i++){
			this.buffer[i].draw(this.s_width, this.s_height, this.dx, this.dy);

		}
	}
}
