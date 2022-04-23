// creates bowl, chopsticks, and spoon
class RamenBowl {
  constructor(order) {
    for (let prop in order) {
      if (order.hasOwnProperty(prop)) {
        this[prop] = order[prop];
      }
    }

    this.pixelSize = order.size * (windowHeight * 0.65);
    // add veggies to sections
    this.sections = this.veg;
    this.placement = this.pixelSize * this.size * 0.23;
    console.log(this);
  }

  // display
  display() {
    // edge
    stroke(40)
    strokeWeight(4)
    fill(baseClrs[1]);
    ellipse(0, 0, this.pixelSize * 1.05);

    // bowl
    noStroke();
    fill(baseClrs[0]);
    ellipse(0, 0, this.pixelSize);

    // broth
    fnBroth(this.broth, this.oil, this.pixelSize);

    // SECTIONS
    for (var i = 0; i < this.sections.length; i++) {
      push();
      rotate((TWO_PI * i) / this.sections.length); // each slice

      // x value determines distance from center
      switch (this.sections[i]) {
        case "mushrooms":
          fnMushrooms(this.placement, 0, this.size, this.sections.length);
          break;
        case "egg":
          fnEgg(this.placement, 0, 45, 2);
          break;
        case "onions":
          fnScallions(this.placement, 0, 20);
          break;
        case "fishcake":
          fnFishcake(this.placement,0,this.pixelSize);
          break;
        case "chili":
          fnChiliThread(this.placement,0,this.pixelSize);
          break;
      }

      // rect(random(140), 0, 20, 20);
      pop();
    }
  }
}
