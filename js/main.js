let sections = 6;
let bowl;
let bg;
let textureGraphics;

function setup() {
	createCanvas(windowWidth, windowHeight-10);
	rectMode(CENTER);

	

}

function draw() {
	let order = makeOrder();
	// call background in a function with canvas blended
	background(bgClrs[Math.floor(random()*bgClrs.length)]);
	bg = createGraphics(width, height);
    bg.colorMode(HSB, 360, 100, 100, 100);
	drawNoiseBackground(10000, bg);
	image(bg, 0, 0);



	// call bowl setup in a function
	// (size, broth, oil, protein, veg, extras)
	bowl = new RamenBowl(order);

	// move to center
	translate(width / 2, height / 2);
	bowl.display();
	
	noLoop();
}