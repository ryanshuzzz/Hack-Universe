class universe{
	// Init spawn solar systems

	
	constructor(){
		this.cam_x = 0;
		this.cam_y = 0;
		this.cam_speed = 30;
		
		this.solar_systems = [];

		this.solarsystemspawnx;
		this.solarsystemspawny;
		
		this.spawn();
	}
	
	distance(x1, y1, x2, y2){
		return Math.sqrt(Math.pow((x1-x2),2) + Math.pow((y1-y2),2));
	}
	
	// Check in vicinity of player to see if solar system should be spawned

	spawn(){
		var i;
		for(i = 0; i < 3; i++){
			this.solar_systems.push(new solarsystem(0, 0, 50, 50));

			//this.solar_systems.push(new solarsystem(Math.floor(Math.random() * size), Math.floor(Math.random() * size), size, size));
		}
	}
	
	// Move the camera
	move(v, h){
		this.cam_x += v * this.cam_speed;
		this.cam_y += h * this.cam_speed;
	}
	
	// Onframe draw
	update(){
		var canvas = document.getElementById('defaultCanvas0');
		
		var i;
		for(i = 0; i < this.solar_systems.length; i++){
			var sol_x = this.solar_systems[i].getdata().x;
			var sol_y = this.solar_systems[i].getdata().y;
			var rad = this.solar_systems[i].getdata().radius;
			
			var dist = this.distance(this.cam_x - canvas.width/2, this.cam_y - canvas.height/2, sol_x, sol_y);
			console.log(Math.abs(dist) + ", "+ canvas.width);
			if(Math.abs(dist) < canvas.width + rad){
				this.solar_systems[i].set_pos(this.cam_x, this.cam_y);
				this.solar_systems[i].rotatePlanets();
				this.solar_systems[i].drawPlanets();
			}
		}
	}
}
