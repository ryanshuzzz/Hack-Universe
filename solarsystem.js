class solarsystem {
	constructor(x, y, w, h){
		this.system = [];
		this.x = Math.floor(Math.random() * w) * x + w; //random location x 0-1280
		this.y = Math.floor(Math.random() * h) * y + h; //random location y 0-720
		this.max = Math.floor(Math.random() * 9) + 1; //max amount of planets are 1-9
		this.sunSize = Math.floor(Math.random() * 200) + 50 //50-100

		var i;
		var spd = Math.floor(Math.random()* 100) + 10;
		var dist = this.sunSize;
		
		// Generate planets
		for(i = 0; i < this.max; i++){
			spd -= Math.floor(Math.random()* 100) + 1; //random speed
			
			if (spd <= 0)
				spd = 1;
			
			var psize = Math.floor(Math.random() * 30) + 10; // random sun size
			dist += Math.floor(Math.random() * 40) + psize + 10; // random distance from sun

			//sun 
			if(i == 0){
				psize = this.sunSize;
				this.system[i] = (new Planet(this.x,this.y, 0, psize, spd));
				this.system[i].isSun();
			} else {
				this.system[i] = (new Planet(this.x,this.y, dist, psize, spd));
			}
		}
	}

	// Rotate all planets in solar system
	rotatePlanets(){
		var p;
		for (p = 0; p<this.system.length;p++){
			this.system[p].rotate();
		}
	}

	// Draw all planets in solar system
	drawPlanets(){
		var k;
		for (k = 0; k<this.system.length;k++){
			this.system[k].draw();
		}
	}
	
	set_pos(x, y){
		var k;
		for (k = 0; k<this.system.length;k++){
			this.system[k].setCenter(x + this.x, y + this.y);
		}
	}
	
	getdata(){
		return {x: this.x, y: this.y, radius: this.system[this.system.length-1].getDistance()};
	}

}
