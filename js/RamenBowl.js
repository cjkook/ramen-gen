// creates bowl, chopsticks, and spoon
class RamenBowl {
	// constructor(size, broth, oil, protein, veg, extras) {
    // for (var prop in obj) {
    //   if (obj.hasOwnProperty(prop)) {
    //     this[prop] = obj[prop];
    //   }
    // }
  constructor(order) {
    console.log(order)
    for (let prop in order) {
      if (order.hasOwnProperty(prop)) {
        this[prop] = order[prop]
      }
    }
    
		this.pixelSize = order.size * (windowWidth*.65);
    //! add protein, veg, and extras together
    console.log(this)
	}

	// display
	display() {
		noStroke();

		// edge
		fill(baseClrs[1]);
		ellipse(width / 2, height / 2, this.pixelSize * 1.05);

		// bowl
		fill(baseClrs[0]);
		ellipse(width / 2, height / 2, this.pixelSize);

		// broth
		fill(brothClrs[0]);
		ellipse(width / 2, height / 2, this.pixelSize * 0.75)

    // protein

    // veg

    // extra
	}
}

class Mushrooms {
	constructor(posX,posY,size) {
		this.posX = posX;
		this.repeats = 8 * this.size;
	}
	
	display() {
		
	}
}