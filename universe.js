class universe{
	// Init spawn solar systems
	spawn(){
		var i;
		for(i = 0; i < 1; i++){
			this.solar_systems.push(new solarsystem(0, 0, 1920, 1080));
			//this.solar_systems.push(new solarsystem(Math.floor(Math.random() * size), Math.floor(Math.random() * size), size, size));
		}
	}
	
	constructor(){
		this.cam_x = 0;
		this.cam_y = 0;
		this.cam_speed = 30;
		
		this.solar_systems = [];
		
		this.spawn();
	}
	
	distance(x1, y1, x2, y2){
		return Math.sqrt(Math.pow((x1-x2),2) + Math.pow((y1-y2),2));
	}
	
	// Check in vicinity of player to see if solar system should be spawned
	move_spawn(){
		//
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

			var xDiff = Math.abs(this.cam_x-sol_x);
			var yDiff = Math.abs(this.cam_y-sol_y);

			// Draw systems within distance
			var dist = this.distance(this.cam_x - canvas.width/2, this.cam_y - canvas.height/2, sol_x, sol_y);
			console.log(Math.abs(dist) + ", "+ canvas.width);
			if(Math.abs(dist) > canvas.width + rad){
				this.solar_systems[i].set_pos(this.cam_x, this.cam_y);
				this.solar_systems[i].rotatePlanets();
				this.solar_systems[i].drawPlanets();
			}
		}
	}
}
