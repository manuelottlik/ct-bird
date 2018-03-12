function CtScore(score) {
    this.gameStatus = 0;
    this.actScore = 0;
    this.highScore = 0;

    //Scoretext anzeigen
    this.show = function(scoreText) {
        textFont(scoreFont);
        textSize(canvasHeight/10);
        textAlign(CENTER);
        textStyle(BOLD);
        fill(255);
        stroke(0);
        strokeWeight(10);

        text(scoreText, 0, canvasHeight/10, canvasWidth, canvasHeight);
    }

    //Score erhöhen
    this.increase = function() {
        this.actScore++;
    }

    //der Vogel ist gestorben, das Spiel soll beendet werden
    this.gameOver = function() {
        this.gameStatus = 2;

        //neuer Highscore
        if (this.actScore > this.highScore) {
            this.highScore = this.actScore;
        }
    }
}
