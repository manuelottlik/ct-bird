function CtBird() {
    this.x = birdX;
    this.y = canvasHeight / 2;
    this.speed = 0;
    this.acceleration = 0.4;

    this.show = function () {
        //wenn das Spiel läuft, soll der Vogel fallen
        if (ctScore.gameStatus == 1) {

            //die Fallgeschwindigkeit wird erhöht, allerdings gibt es aufgrund der Spielbarkeit eine Beschränkung
            if (this.speed < 10) {
                this.speed += this.acceleration;
            }

            //falls der Vogel nicht tot ist, die Position wird verändert
            if (this.y < canvasHeight) {
                this.y += this.speed;
            } else {
                ctScore.gameOver();
            }
        }

        //Vogel zeichnen
        stroke(35, 75, 89);
        strokeWeight(2);
        fill(247, 183, 49);
        arc(this.x, this.y, birdSize, birdSize, this.speed / 10 + QUARTER_PI / 1.5, this.speed / 10 - QUARTER_PI / 1.5, PIE);
    }

    this.jump = function () {
        //wenn das Spiel läuft und sich der Vogel im Bild befindet, darf gesprungen werden
        if (ctScore.gameStatus == 1 && this.y > 0) {
            this.speed = -7.5;
        }
    }
}