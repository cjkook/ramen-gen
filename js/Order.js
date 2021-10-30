// creates a ramen order
class Order {
	constructor(size, broth, protein, veg, extras) {
		this.size = size;
		this.pixelSize = size * 700;
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