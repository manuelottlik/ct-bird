function CtPipe () {
    this.x = canvasWidth;
    this.y = 0;
    this.gap = random(gapMargin, canvasHeight - pipeGap - gapMargin);

    //Röhre anzeigen
    this.show = function () {
        stroke(80,61,72);
        strokeWeight(3);
        fill(130,168,65);
        rect(this.x, this.y, pipeWidth, this.gap);
        rect(this.x,this.gap + pipeGap, pipeWidth, canvasHeight);
        
        //Röhre nach links bewegen
        this.x -= 2;
    }

    //Prüfung der Kollision der Röhre mit dem Vogel
    this.checkCollision = function(birdY) {

        //prüfe, ob der Vogel mit dem oberen Abschnitt der Röhre kollidiert
        if(collideRectCircle(this.x, this.y, pipeWidth, this.gap, birdX, birdY, birdSize)) {
            ctScore.gameOver();
        }

        //prüfe, ob der Vogel mit dem unteren Abschnitt der Röhre kollidiert
        if(collideRectCircle(this.x,this.gap + pipeGap, pipeWidth, canvasHeight, birdX, birdY, birdSize)) {
            ctScore.gameOver();
        }
    }
}
