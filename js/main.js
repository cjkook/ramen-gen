let sections = 6;
let bowl;

function setup() {
	createCanvas(windowWidth, windowHeight-10);
	rectMode(CENTER);

	

}

function draw() {
	let order = makeOrder();
	// call background in a function with canvas blended
	background(bgClrs[Math.floor(random()*bgClrs.length)]);


	// call bowl setup in a function
	// (size, broth, oil, protein, veg, extras)
	bowl = new RamenBowl(order);

	// move to center
	translate(width / 2, height / 2);
	bowl.display();
	
	noLoop();
}