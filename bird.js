function CtBird() {
 this.x = birdX;
 this.y = canvasHeight / 2;
 this.speed = 0;
 this.acceleration = 0.4;

 this.show = function () {

  if(ctScore.gameStatus == 1) {

   if(this.speed < 10) {
    this.speed += this.acceleration;
   }

   if(this.y < canvasHeight) {
    this.y += this.speed;
   } else {
    ctScore.gameOver();
   }
  }

  stroke(35,75,89);
  strokeWeight(2);
  fill(247,183,49);
  arc(this.x, this.y, birdSize, birdSize, this.speed/10 + QUARTER_PI/1.5, this.speed/10 - QUARTER_PI/1.5, PIE);
 }

 this.jump = function() {
  if (ctScore.gameStatus == 1 && this.y > 0) {
   this.speed = -7.5;
  }
 }
}
