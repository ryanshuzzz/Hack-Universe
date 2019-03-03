class star {
	constructor (x, y, size) {
		this.x = x;
		this.y = y;
		this.size = size;
		
		this.alpha = 200;
		this.alpha_min = 0;
		this.alpha_delta = (Math.floor(Math.random() * 3) + 1) / 2;
	}
	
	draw(s_width, s_height){
		noStroke();
		fill(this.alpha);
		square(this.x , this.y, this.size);
		
		/*this.x -= 10;
		
		if(this.x < 0){
			this.x = s_width;
		}*/
		
		this.alpha -= this.alpha_delta;
		if(this.alpha <= this.alpha_min || this.alpha >= 200){
			this.alpha_delta = -this.alpha_delta;
		}
	}
}

class starsystem {
	init(){
		this.buffer = [];
		this.max = 300;
		
		var i = 0;
		for(i = 0; i < this.max; i++){
			var x = Math.floor(Math.random() * this.s_width) + 1;
			var y = Math.floor(Math.random() * this.s_height) + 1;
			var size = Math.floor(Math.random() * 3) + 1;
			this.buffer.push(new star(x, y, size));
		}
	}
	
	constructor() {
		this.s_width = 1920;
		this.s_height = 1920;
		
		this.init();
	}
	
	
	// Draw all stars
	draw(){
		var canvas = document.getElementById('defaultCanvas0');
		
		var i = 0;
		for(i = 0; i < this.buffer.length; i++){
			this.buffer[i].draw(this.s_width);
		}
	}
}
