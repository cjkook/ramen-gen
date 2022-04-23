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
  let veggies = [
    "mushrooms",
    "bamboo",
    "red pepper",
    "bok choy",
    "egg",
    "fishcake",
    "chili"
  ];
  shuffleArray(veggies);
  veggies = prepend("onions", veggies);
  let numVeg = Math.floor(random(2, veggies.length));
  veggies = veggies.slice(0, numVeg);
  shuffleArray(veggies);
  order.veg = veggies;

  // extras
  order.extras = "";

  order.sections = prepend(order.protein, order.veg);
  order.sections = prepend(order.extras, order.sections);

  // ? for testing
  

  // return order
  return order;
  // make menu description with palette
}

// make broth
function fnBroth(type, oil, size) {
  let color;
  const brothSize = size / 3;

  // select color
  switch (type) {
    case "chicken":
      color = brothClrs[0];
      break;
  }
  fill(color);
  ellipse(0, 0, size * 0.75);

  // texture
  for (let i = 0; i < random(1000, 2000); i++) {
    const w = random(2, 4);
    const h = random(2, 4);
    const x = random(-brothSize, brothSize)
    const y = random(-brothSize, brothSize)
    if(dist(x,y,0,0)<brothSize){
      fill(random(255),random(50),random(20), random(40));
    ellipse(x, y, w, h);
    }
    
  }

  // oil
  fnOil(oil, size);
}

// make oil
function fnOil(type, size) {
  let oilArray = [];
  let color;
  let attempts = 1000;
  let minRadius = 2;
  let maxRadius = 25;
  let stepRadius = 1;

  // select color
  switch (type) {
    case "black garlic":
      color = brothClrs[1];
      break;
  }

  // create oils
  for (let i = 0; i < attempts; i++) {
    const x = random(-size / 5, size / 5);
    const y = random(-size / 5, size / 5);
    for (let r = minRadius; r <= maxRadius; r += stepRadius) {
      const checkCol = (x, y, r) => {
        return oilArray.find((o) => dist(o.x, o.y, x, y) <= o.r + r);
      };
      let col = checkCol(x, y, r);
      if (col && r == minRadius) break;
      if (col) {
        r -= stepRadius;
        oilArray.push({ x, y, r });
        break;
      }
      if (!col && r == maxRadius) {
        oilArray.push({ x, y, r });
        break;
      }
    }
  }
  oilArray.forEach((o) => {
    let centerDist = dist(o.x, o.y, 0, 0);
    if (centerDist < size / 5) {
      let c = Math.ceil(random(10, 99));
      fill(color + c);
      ellipse(o.x, o.y, o.r * 2);
    }
  });
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

// make scallions
function fnScallions(x, y, size) {
  fill(ramenClrs[3]);
  for (let i = 0; i <= 200; i++) {
    let locx = random(-40, 40);
    let locy = random(-40, 40);

    push();
    translate(x + x, y);
    i % 2 === 0 ? rotate(random(i)) : rotate(random(-i));
    // rotate(random(i));
    shearX(10);
    rect(0 + locx, y + locy, 15, 17 / 3);
    fill(ramenClrs[2]);
    rect(0 + locx + 4, y + locy + random(4), 20, 17 / 3);
    pop();
  }
}

// make egg
function fnEgg(ax, ay, s = 100, opt = 2) {
  let points = [];
  fill(ramenClrs[1]);
  beginShape();
  for (let i = 0; i < 360 / opt; i += opt) {
    var x =
      ax +
      cos(radians(i * opt + 90)) *
        (s * map(abs(i * opt - 180), 0, 180, 1, 1.5));
    var y = ay + sin(radians(i * opt + 90)) * s * 1.5;
    x += ax * 0.9;
    vertex(x, y);
    points.push(createVector(x, y));
  }
  endShape(CLOSE);
  fill(ramenClrs[0]);
  ellipse(ax + ax * 0.9, ay + 10, 60);
}

// make fishcake
function fnFishcake(x, y, size) {
  for (let n = 1; n <= random(1, 5); n++) {
    let angle = random(1);
    let scalar = 1.5;
    let speed = 0.1;
    let place = random(100, x * 2);

    // base
    fill(ramenClrs[6] + "EE");
    ellipse(place, y + n * 30, size / 8);

    for (let i = 0; i <= 100 + random(40,120); i++) {
      let locx = place + cos(angle) * scalar;
      let locy = y + sin(angle) * scalar;
      angle += speed;
      scalar += speed;

      noStroke();
      fill(ramenClrs[7]);
      ellipse(locx, locy + n * 30, 2, 1);
      angle += speed / 10;
      scalar += speed;
    }
  }
}

// chili thread
function fnChiliThread(x,y,size) {

}

// menu desc & palette
function makeMenuPalette() {
  fill("#F4F1DE" + "B0");
  strokeWeight(5);
  stroke(0, 20);
  rect(width * 0.8, height * 0.8, 200, 100);
}

// make paper set
function fnPaper(gfx){
	let d = 10;
	let c = 30000;
	
	gfx.strokeWeight(0.8);
	
	for(let i = 0; i < c; i++){

		// let's do half horiz and half vert. Shouldn't be detectable
		let isVert = i >= c/2;
		
		let	r = random(-d, d);
		gfx.stroke(1,1);
		
		if(isVert){
			let x = randomGaussian()*width/4 + width/2;
			let y = randomGaussian()*height/4 + height/4;	
			gfx.line(x, y, x+r, y+ height/2);
		}
		else{
			let x = randomGaussian()*width/4 + width/4;
			let y = randomGaussian()*height/4 + height/2;
			gfx.push();
			// gfx.rotate(random(-0.91, 0.91));
			gfx.line(x, y, x+ width/2, y+r);
			gfx.pop();
		}
	}
}

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
