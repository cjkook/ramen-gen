// creates bowl, chopsticks, and spoon
class RamenBowl {
	constructor(size) {
		this.size = size;
		this.pixelSize = size * (windowWidth/2);
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