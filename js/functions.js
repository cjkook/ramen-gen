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
      const r = map(noise(xoff, yoff, zoff), 0, 1, 40, size * 140);
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
      const r = map(noise(xoff, yoff, zoff), 0, 1, 40, size * 140);
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

// menu desc & palette
function makeMenuPalette() {}

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
