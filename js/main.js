var barLeft, barRight;
var barWidth   = 10;
var ballRadius = 15;
var balls      = [];
var score;

function setup() {
    createCanvas(920, 480);
    createBall();

    barLeft  = new Bar(4, height * 0.26, barWidth, height * 0.26);
    barRight = new Bar(width - 4 - barWidth, height * 0.26, barWidth, height * 0.26);
    score    = new Score();
}

function draw() {
	background(51);

	score.show();

	stroke(80);
	strokeWeight(6);
	line(width/2, 0, width/2, height);

	if (keyIsDown(UP_ARROW))   barRight.up();
	if (keyIsDown(DOWN_ARROW)) barRight.down();
	if (keyIsDown(87))         barLeft.up();
	if (keyIsDown(83))         barLeft.down();

	for (var i = 0; i < balls.length; i++) {
		balls[i].update();
		balls[i].show();

		if (balls[i].remove) {
			if (balls[i].x >= width/2) {
				score.addLeft();
			} else {
				score.addRight();
			}

			balls.splice(i, 1);
		} else if (balls[i].duplicate) {
			balls.push(new Ball(balls[i].x, balls[i].y, ballRadius));
			balls[i].duplicate = false;
		}
	}

	barLeft.update();
	barRight.update();
}

function createBall() {
	balls.push(new Ball(width / 2, height / 2, ballRadius));
}