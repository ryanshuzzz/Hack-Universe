const config = {
	type: Phaser.AUTO,
	width: 800,
	height: 600,
	backgroundColor: "#222222",
	parent: "game-canvas",
	scene: {
		preload: preload,
		create: create,
		update: update
	}
};

const game = new Phaser.Game(config);

function preload() {
  // Preload Resources
}

function create() {
	//Init 
}

function update(time, delta) {
	//Update
}
