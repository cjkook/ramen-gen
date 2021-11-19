// creates bowl, chopsticks, and spoon
class RamenBowl {
  // constructor(size, broth, oil, protein, veg, extras) {
  // for (var prop in obj) {
  //   if (obj.hasOwnProperty(prop)) {
  //     this[prop] = obj[prop];
  //   }
  // }
  constructor(order) {
    for (let prop in order) {
      if (order.hasOwnProperty(prop)) {
        this[prop] = order[prop];
      }
    }

    this.pixelSize = order.size * (windowHeight * 0.65);
    // add veggies to sections
    this.sections = this.veg;
    this.placement = (this.pixelSize*this.size)*0.23;
    console.log(this)
  }

  // display
  display() {
    console.log(this.pixelSize)
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
    fnOil(this.pixelSize,brothClrs[1]);

    // SECTIONS
    for (var i = 0; i < this.sections.length; i++) {
      push();
      rotate((TWO_PI * i) / this.sections.length); // each slice

      // x value determines distance from center
      switch(this.sections[i]) {
        case "mushrooms":
          fnMushrooms(this.placement, 0, this.size, this.sections.length);
      }
      
      
      // rect(random(140), 0, 20, 20);
      pop();
    }
  }
}
