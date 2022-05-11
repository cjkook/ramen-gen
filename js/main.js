let sections = 6;
let bowl;
let bg;
let textureGraphics;
let paperGfx;

function setup() {
  createCanvas(windowWidth, windowHeight + 10);
  rectMode(CENTER);
  imageMode(CENTER);
}

function draw() {
  let order = makeOrder();
  // call bowl setup in a function
  // (size, broth, oil, protein, veg, extras)
  bowl = new RamenBowl(order);

  // move to center
  translate(width / 2, height / 2);

  // call background in a function with canvas blended
  shuffleArray(bgClrs);
  background(bgClrs[0]);
  bg = createGraphics(width, height);
  bg.colorMode(HSB, 360, 100, 100, 100);
  drawNoiseBackground(10000, bg);
  image(bg, 0, 0);

  // make paper
  paperGfx = createGraphics(width*0.6, height * 0.6);
  fnPaper(paperGfx);
  image(paperGfx, 0, 0);

  // napkin, spoon, & sticks
  shuffleArray(napkinClrs);
  fnNapkin(napkinClrs[0]);
  fnChopsticks(0,0,random(400,500))
  fnSpoon(0,0,bowl.pixelSize)
  

  bowl.display();

  translate(-width / 2, -height / 2);
  makeMenuPalette(order);
  
  noLoop();
}
