let sections = 6;
let bowlSize = 300;

let bowl;

function setup() {
	createCanvas(windowWidth, windowHeight-10);
	rectMode(CENTER);
	console.log(baseClrs)

	// call bowl setup in a function
	//
	bowl = new RamenBowl(random(0.4, 0.9));

}

function draw() {
	console.log(bowl.pixelSize);
	
	// call background in a function with canvas blended
	background(bgClrs[Math.floor(random()*bgClrs.length)]);

	bowl.display();

	// move to center
	translate(width / 2, height / 2);
	
	for (var i = 0; i < sections; i++) {
		push();
		fill(255 - i * 45);
		rotate(TWO_PI * i / sections); // each slice
		
		// x value determines distance from center
		rect(random(140), 0, 20, 20);
		pop();
	}
	
	noLoop();
}