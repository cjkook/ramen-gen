// creates bowl, chopsticks, and spoon
class RamenBowl {
  // constructor(size, broth, oil, protein, veg, extras) {
  // for (var prop in obj) {
  //   if (obj.hasOwnProperty(prop)) {
  //     this[prop] = obj[prop];
  //   }
  // }
  constructor(order) {
    console.log(order);
    for (let prop in order) {
      if (order.hasOwnProperty(prop)) {
        this[prop] = order[prop];
      }
    }

    this.pixelSize = order.size * (windowWidth * 0.65);
    this.sections = 8;
    //! add protein, veg, and extras together for sections
    console.log(this);
  }

  // display
  display() {
    noStroke();

    // edge
    fill(baseClrs[1]);
    ellipse(0, 0, this.pixelSize * 1.05);

    // bowl
    fill(baseClrs[0]);
    ellipse(0, 0, this.pixelSize);

    // broth
    fill(brothClrs[0]);
    ellipse(0, 0, this.pixelSize * 0.75);

    // oil

    // SECTIONS
    for (var i = 0; i < this.sections; i++) {
      push();
      fill(255 - i * 45);
      rotate((TWO_PI * i) / this.sections); // each slice

      // add proteins // use continue

      // add veggies // use continue

      // add extras // use continue

      // x value determines distance from center
      fnMushrooms(random(140), 0, 40, 8);
      rect(random(140), 0, 20, 20);
      pop();
    }
  }
}
