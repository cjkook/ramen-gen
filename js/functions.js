function makeOrder() {
  let order = {};
  // size
  order.size = random(0.5, 0.9);
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
  veggies = prepend("onions", veggies);
  let numVeg = Math.floor(random(1, veggies.length));
  console.log(numVeg);
  // ! use numVeg to cut off
  order.veg = veggies;

  // extras
  order.extras = "";

  return order;
  // make menu description with palette
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
