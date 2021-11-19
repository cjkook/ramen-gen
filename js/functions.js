// make an order
function makeOrder() {
  let order = {};
  // size
  order.size = random(0.6, 0.9);
  let sizeText = "";
  if (order.size <= 0.65) {
    sizeText = "small";
  } else if (order.size >= 0.8) {
    sizeText = "large";
  } else {
    sizeText = "medium";
  }

  // broth
  order.broth = "chicken";

  // oil
  order.oil = "black garlic";

  // protein
  order.protein = "tan tan";

  // veg
  let veggies = ["mushrooms", "bamboo", "red pepper", "bok choy", "egg"];
  shuffleArray(veggies);
  veggies = prepend("onions", veggies);
  let numVeg = Math.floor(random(2, veggies.length));
  veggies = veggies.slice(0, numVeg);
  console.log(numVeg, veggies);
  order.veg = veggies;

  // extras
  order.extras = "";

  order.sections = prepend(order.protein, order.veg);
  order.sections = prepend(order.extras, order.sections);
  return order;
  // make menu description with palette
}

// make broth // textures
function fnBroth() {}

// make oil
function fnOil(size, color) {
  for (let i = 0; i <= (Math.ceil(size)%36)+5; i++) {
    let c = Math.ceil(random(10,99));
    fill(color+c);
    // let x = random(-size/4,size/4);
    // let y = random(-size/4,size/4);
    let x = randomGaussian()*(size/9)
    let y = randomGaussian()*(size/9)
    ellipse(x, y, random(10,50));
  }
}

// make mushrooms
// x, y are location
// size and sections define amount of mush
function fnMushrooms(locX, locY, size, sections) {
  let density = random(1, 4);
  for (let i = 0; i <= density; i++) {
    let zoff = random(3);
    // outside shape
    strokeWeight(4);
    stroke(ramenClrs[5]);
    fill(ramenClrs[4]);
    push();
    beginShape();
    translate(locX - i * 10, locY + i * 40);
    for (let a = 0; a < TWO_PI; a += 0.2) {
      let xoff = map(cos(a), -2, 1, 0, 2);
      let yoff = map(sin(a), -1, 1, 0, 2);
      const r = map(noise(xoff, yoff, zoff), 0, 1, 40, size * 110);
      let x = r * cos(a);
      let y = r * sin(a);
      vertex(x + locX, y);
    }
    endShape(CLOSE);
    pop();
    // lines

    strokeWeight(1);
    push();
    beginShape();
    translate(locX - i * 10, locY + i * 40);
    for (let a = 0; a < TWO_PI; a += 0.1) {
      let xoff = map(cos(a), -2, 1, 0, 2);
      let yoff = map(sin(a), -1, 1, 0, 2);
      const r = map(noise(xoff, yoff, zoff), 0, 1, 40, size * 110);
      let x = r * cos(a);
      let y = r * sin(a);
      line(locX, locY, x + locX, y + locY);
    }
    endShape(CLOSE);
    pop();

    // stem
    push();
    fill(ramenClrs[5]);
    beginShape();
    translate(locX - i * 10, locY + i * 40);
    for (let a = 0; a < TWO_PI; a += 0.2) {
      zoff += 0.01;
      let xoff = map(cos(a), -2, 1, 0, 2);
      let yoff = map(sin(a), -1, 1, 0, 2);
      const r = map(noise(xoff, yoff, zoff), 0, 1, 1, size * 50);
      let x = r * cos(a);
      let y = r * sin(a);
      vertex(x + locX, y);
    }
    endShape(CLOSE);
    pop();
  }
}

// make egg
function fnEgg(ax, ay, s = 100, opt = 2) {
	let points = [];
  fill(ramenClrs[1])
	beginShape();
	for (let i = 0; i < 360 / opt; i += opt) {
		var x = ax + cos(radians((i * opt) + 90)) * (s * map(abs((i * opt) - 180), 0, 180, 1, 1.5));
		var y = ay + sin(radians((i * opt) + 90)) * s * 1.5;
    x += ax*.9;
		vertex(x, y);
		points.push(createVector(x, y));
	}
	endShape(CLOSE);
  fill(ramenClrs[0])
  ellipse(ax+(ax*.9),ay+10,60)
}

// menu desc & palette
function makeMenuPalette() {}

// background noise function
function drawNoiseBackground(_n, _graphics) {
  for (let i = 0; i < _n; i++) {
    let x = sqrt(random(1)) * width;
    let y = sqrt(random(1)) * height;
    let w = random(1, 4);
    let h = random(1, 4);
    _graphics.noStroke();
    _graphics.fill(random(255), random(40));
    _graphics.ellipse(x, y, w, h);
  }
}

// shuffle
/* Randomize array in-place using Durstenfeld shuffle algorithm */
function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

// prepend values to array
function prepend(value, array) {
  var newArray = array.slice();
  newArray.unshift(value);
  return newArray;
}
