// Init
function setup() {
	canvas = createCanvas(windowWidth, windowHeight);
	
	window.addEventListener('resize', resizeCanvas, false);

	function resizeCanvas() {
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
	}
	
	resizeCanvas();
}

function get_canvas(){
	return canvas;
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}
