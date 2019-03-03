class chunk{
	constructor(pos, size){
		this.pos = pos;
		this.size = size;
		this.spawn_p = Math.floor(Math.random() * 2);
	}
	
	getpos(){
		return {x: this.pos[0], y: this.pos[1]};
	}
}

class chunks{
	constructor(){
		this.chunk_buffer = [];
		this.size = 3000;
	}
	
	// Check if new chunk needs to be created
	checkchunk(camx, camy){
		camx = -camx;
		camy = -camy;
		var spawn_chunk = true;
		var i;
		for(i = 0; i < this.chunk_buffer.length; i++){
			var cx = Math.round(camx / this.size);
			var cy = Math.round(camy / this.size);
			var ix = Math.round(this.chunk_buffer[i].getpos().x / this.size);
			var iy = Math.round(this.chunk_buffer[i].getpos().y / this.size);
			
			if(cx == ix && cy == iy)
				spawn_chunk = false;
		}
		
		if(spawn_chunk){
			var newchunk = new chunk([cx * this.size, cy * this.size], this.size);
			this.chunk_buffer.push(newchunk);
			return newchunk;
		}
		
		return null;
	}
	
	getsize(){
		return this.size;
	}
	
	draw(cx, cy){
		var i;
		for(i = 0; i < this.chunk_buffer.length; i++){
			noFill(255);
			stroke(255);
			square(this.chunk_buffer[i].getpos().x + cx, this.chunk_buffer[i].getpos().y + cy, this.size);
		}
	}
}
