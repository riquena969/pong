class Score {
	constructor() {
		this.left  = 0;
		this.right = 0;
	}

	show() {
		fill(100);
		noStroke();

		textSize(100);
		textAlign(CENTER);
		text(this.left, 0, height/2-50, width/2, height);

		textSize(100);
		textAlign(CENTER);
		text(this.right, width/2, height/2-50, width/2, height);
	}

	addLeft() {
		this.left++;
	}

	addRight() {
		this.right++;
	}
}