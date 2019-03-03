class solarsystem {
	constructor(){
		this.system = [];
		this.randomHeight = Math.floor(Math.random() * 721); //random location y 0-720
		this.randomWidth = Math.floor(Math.random() * 1281); //random location x 0-1280
		this.max = Math.floor(Math.random() * 9) + 1; //max amount of planets are 1-9
		this.sunSize = Math.floor(Math.random() *51) + 50 //50-100

		var i;
		var spd = Math.floor(Math.random()* 50) + 10;
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
				this.system[i] = (new Planet(this.randomWidth,this.randomHeight, 0, psize, spd));
				this.system[i].isSun();
			} else {
				this.system[i] = (new Planet(this.randomWidth,this.randomHeight, dist, psize, spd));
			}
		}

	} // end of constructor

	rotatePlanets(){
	var p;
	for (p = 0; p<this.system.length;p++){
	this.system[p].rotate();
	}
	}

	drawPlanets(){
	var k;
	for (k = 0; k<this.system.length;k++){
	this.system[k].draw();
	}
	}

}
