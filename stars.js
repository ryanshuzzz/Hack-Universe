class star {
	constructor (x, y, size) {
		this.x = x;
		this.y = y;
		this.size = size;
		
		this.alpha = 210;
		this.alpha_min = 0;
		this.alpha_delta = (Math.floor(Math.random() * 3) + 1) / 2;
		this.speedmod = Math.floor(Math.random() * 2)
	}
	
	draw(s_width, s_height, dx, dy, base_alpha){
		noStroke();
		fill(this.alpha - base_alpha);
		square(this.x , this.y, this.size);

		if(dx != 0){
			this.x += dx + Math.abs(this.speedmod);
		}
		
		if(dy != 0){
			this.y += dy + Math.abs(this.speedmod);
		}
		
		if(dx != 0 && dy != 0){
			this.y -= Math.abs(this.speedmod);
		}

		if(this.x > s_width){
			while(this.x > s_width){
				this.x -= s_width;
			}
			this.y = Math.floor(Math.random() * s_height);
		} else if(this.x < 0){
			while(this.x < 0){
				this.x += s_width;
			}
			this.y = Math.floor(Math.random() * s_height);
		}
		
		if(this.y < 0){
			this.x = Math.floor(Math.random() * s_width);
			while(this.y < 0){
				this.y += s_height;
			}
		} else if(this.y > s_height){
			this.x = Math.floor(Math.random() * s_width);
			
			while(this.y > s_height){
				this.y -= s_height;
			}
		}
		
		this.alpha -= this.alpha_delta;
		if(this.alpha <= this.alpha_min || this.alpha >= 200){
			this.alpha_delta = -this.alpha_delta;
		}
	}
}

class starsystem {
	constructor(speed, base_alpha=0) {
		this.s_width = 1920;
		this.s_height = 1080;
		this.buffer = [];
		this.max = 70;
		this.dx = 0;
		this.dy = 0;
		
		this.base_alpha = base_alpha;
		this.speed = speed;
		
		var i = 0;
		for(i = 0; i < this.max; i++){
			var x = Math.floor(Math.random() * this.s_width) + 1;
			var y = Math.floor(Math.random() * this.s_height) + 1;
			var size = Math.floor(Math.random() * 3) + 1;
			this.buffer.push(new star(x, y, size));
		}
	}
	
	setDelta(h,v){
		if(h != null)
			this.dx = h * this.speed;
		if(v != null)
			this.dy = v * this.speed;
	}
	
	
	// Draw all stars
	draw(){
		var canvas = document.getElementById('defaultCanvas0');
		
		var i = 0;
		for(i = 0; i < this.buffer.length; i++){
			//this.buffer[i].draw(this.s_width, this.s_height, this.dx, this.dy);
			this.buffer[i].draw(canvas.width, canvas.height, this.dx, this.dy, this.base_alpha);
		}
	}
}
