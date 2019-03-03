class universe{
	// Init spawn solar systems
	constructor(){
		this.cam_x = 0;
		this.cam_y = 0;
		this.cam_speed = 20;
		
		this.solar_systems = [];
		
		this.chunk_buf = new chunks();
		this.chunk_buf.checkchunk(this.cam_x, this.cam_y);
	}
	
	distance(x1, y1, x2, y2){
		return Math.sqrt(Math.pow((x2+x1),2) + Math.pow((y2+y1),2));
	}
	
	// Move the camera
	move(v, h){
		this.cam_x += v * this.cam_speed;
		this.cam_y += h * this.cam_speed;
		
		var spawn_new = this.chunk_buf.checkchunk(this.cam_x, this.cam_y);
		
		if(spawn_new != null){
			this.solar_systems.push(new solarsystem(spawn_new.getpos().x, spawn_new.getpos().y, this.chunk_buf.getsize(), this.chunk_buf.getsize()));
			console.log("Generated " + generateName() + " System.");
		}
		
		var i;
		for(i = 0; i < this.solar_systems.length; i++){
			this.solar_systems[i].set_pos(this.cam_x, this.cam_y);
		}
	}

	resetCam(){
		this.cam_x = 0;
		this.cam_y = 0;
	}

	// Onframe draw
	update(){
		//this.chunk_buf.draw(this.cam_x, this.cam_y);
		
		var i;
		for(i = 0; i < this.solar_systems.length; i++){
			var sol_x = this.solar_systems[i].getdata().x;
			var sol_y = this.solar_systems[i].getdata().y;
			var rad = this.solar_systems[i].getdata().radius;
			
			var dist = this.distance(this.cam_x, this.cam_y, sol_x, sol_y);
			
			// Draw solar system if on canvas
			if(Math.abs(dist) < this.distance(0,0,Math.abs(canvas.width),Math.abs(canvas.height)) + Math.abs(rad) + 50){
				this.solar_systems[i].rotatePlanets();
				this.solar_systems[i].drawPlanets(this.cam_x, this.cam_y);
			}
		}
	}
}
