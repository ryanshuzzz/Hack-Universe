class universe{
	// Init spawn solar systems

	
	constructor(){
		this.cam_x = 0;
		this.cam_y = 0;
		this.cam_speed = 100;
		
		this.solar_systems = [];

		this.solarsystemspawnx;
		this.solarsystemspawny;

		this.count = 0;
		this.cannotX = [];
		this.cannotY = [];
		
		this.spawn();

	}
	
	distance(x1, y1, x2, y2){
		return Math.sqrt(Math.pow((x2+x1),2) + Math.pow((y2+y1),2));
	}
	
	// Check in vicinity of player to see if solar system should be spawned

	spawn(){
		var spawnHere = true;
		var i;
		var k;
		var square = 1500;
			if(this.count == 0){
				this.cannotY.push(0);
				this.cannotX.push(0);
				(this.count)++;
				this.solar_systems[0] = (new solarsystem(0,0, 1920, 1080));
				console.log("new SS created.");
				spawnHere = false;
			} else {
				if (this.cam_x%square != 0 && this.cam_y%square!= 0){
				spawnHere = false;
				} else 
				if ((this.cannotX.indexOf(this.cam_x/square) != -1)  && (this.cannotY.indexOf(this.cam_y/square) != -1)){
				spawnHere = false;
				}
			}

				if(this.cam_x%square == 0 && spawnHere != false && (this.cannotX.indexOf(this.cam_x/square)) == -1){
					console.log(Math.floor(this.cam_x/square));
					this.cannotX.push(Math.floor(this.cam_x/square));
					this.solar_systems[this.count] = (new solarsystem(-this.cam_x*2,-this.cam_y*2, 1920, 1080));
					(this.count)++;
					console.log("new SS created, with x = " + this.cam_x);
					spawnHere = false;
				} else if (this.cam_y%square == 0 && spawnHere != false && (this.cannotY.indexOf(this.cam_y/square)) == -1){
					this.cannotY.push(Math.floor(this.cam_y/square));
					this.solar_systems[this.count] = (new solarsystem(-this.cam_x*2,-this.cam_y*2, 1920, 1080));
					(this.count)++;
					console.log("new SS created, with y = " + this.cam_y);
					spawnHere = false;
				}
	console.log(this.count);
	console.log(this.cam_x + ", " + this.cam_y);
	}
	
	// Move the camera
	move(v, h){
		this.cam_x += v * this.cam_speed;
		this.cam_y += h * this.cam_speed;
		var i;
		for(i = 0; i < this.solar_systems.length; i++){
			this.solar_systems[i].set_pos(this.cam_x, this.cam_y);
		}
		if(this.cam_x%1500 == 0 || this.cam_y%1500 == 0) {
		 	this.spawn();
		}
		this.update();

	}


	resetCam(){
		this.cam_x = 0;
		this.cam_y = 0;
	}

	// Onframe draw
	update(){
		var canvas = document.getElementById('defaultCanvas0');
		
		var i;
		for(i = 0; i < this.solar_systems.length; i++){
			var sol_x = this.solar_systems[i].getdata().x;
			var sol_y = this.solar_systems[i].getdata().y;
			var rad = this.solar_systems[i].getdata().radius;
			
			var dist = this.distance(this.cam_x, this.cam_y, sol_x, sol_y);
			//console.log(i + ": " + Math.abs(dist) + "..." + this.cam_y + "....." +sol_y);
			//console.log(Math.abs(dist));// + ", "+ canvas.width);
			if(Math.abs(dist) < this.distance(0,0,Math.abs(canvas.width),Math.abs(canvas.height)) + Math.abs(rad) + 50){
				this.solar_systems[i].rotatePlanets();
				this.solar_systems[i].drawPlanets();
			}
		}
	}
}
