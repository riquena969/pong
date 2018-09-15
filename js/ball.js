class Ball {

	constructor(x, y, radius) {
		this.x = x;
		this.y = y;
		this.radius = radius;

		this.reverseX = round(random(0,1)) == 0 ? 1 : -1;
		this.reverseY = round(random(0,1)) == 0 ? 1 : -1;

		this.angle = round(random(5, 30));

		this.speed = this.radius/5;

		this.remove   = false;
		this.duplicate = false;
		this.difficult = 15;

		this.bg = {
		    r : random(255),
		    g : random(255),
		    b : random(255)
		}
	}

	update() {
		this.speed *= 1.002;

		this.x += round(this.reverseX * (cos(radians(this.angle)) * this.speed));
		this.y -= round(this.reverseY * (sin(radians(this.angle)) * this.speed));

		if (this.y < (0 + this.radius)) {
			this.y = (0 + this.radius);

			this.reverseY *= -1;
		}

		if (this.y > (height - this.radius)) {
			this.y = (height - this.radius);

			this.reverseY *= -1;
		}

		this.verifyColision();

		if (this.x > (width - this.radius)) {
			this.remove = true;
		}

		if (this.x < (0 + this.radius)) {
			this.remove = true;
		}
	}

	show() {
		fill(this.bg.r, this.bg.g, this.bg.b);
		stroke(this.bg.r, this.bg.g, this.bg.b);
		strokeWeight(1);

		ellipse(this.x, this.y, this.radius * 2);
	}

	verifyColision() {
		if (((this.y > barLeft.y && this.y < (barLeft.y + barLeft.h)) &&
					((this.x - this.radius) <= (barLeft.x + barLeft.w))) ||
			((dist(this.x, this.y, (barLeft.x + barLeft.w), barLeft.y) <= this.radius)) ||
			((dist(this.x, this.y, (barLeft.x + barLeft.w), (barLeft.y + barLeft.h)) <= this.radius))) {
			this.reverseX *= -1;
			this.x = barLeft.x + barLeft.w + this.radius;

			this.difficult++;
			this.duplicate = round(random(100)) <= this.difficult;
		}
		if (((this.y > barRight.y && this.y < (barRight.y + barRight.h)) &&
					((this.x + this.radius) >= (barRight.x))) ||
			((dist(this.x, this.y, (barRight.x), barRight.y) <= this.radius)) ||
			((dist(this.x, this.y, (barRight.x), (barRight.y + barRight.h)) <= this.radius))) {
			this.reverseX *= -1;
			this.x = barRight.x - this.radius;

			this.difficult++;
			this.duplicate = round(random(100)) <= this.difficult;
		}
	}
}