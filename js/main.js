let sections = 6;
let bowl;

function setup() {
	createCanvas(windowWidth, windowHeight-10);
	rectMode(CENTER);

	

}

function draw() {
	console.log(makeOrder());
	let order = makeOrder();
	// call background in a function with canvas blended
	background(bgClrs[Math.floor(random()*bgClrs.length)]);


	// call bowl setup in a function
	// (size, broth, oil, protein, veg, extras)
	bowl = new RamenBowl(order);
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