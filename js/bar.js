class Bar {

	constructor(x, y, w, h) {
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
		this.speed = this.h * 0.12;
	}

	update() {
		fill(200);
		stroke(200);
		strokeWeight(1);

		rect(this.x, this.y, this.w, this.h);
	}

	up() {
		this.y -= this.speed;

		if (this.y < 4) {
			this.y = 4;
		}
	}

	down() {
		this.y += this.speed;

		if (this.y > height - this.h - 4) {
			this.y = height - this.h - 4;
		}
	}
}