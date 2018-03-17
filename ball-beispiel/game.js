//Objektvariablen
var ctBall;

//Variablen für Abmessungen etc.
var canvasWidth = 1080/3;
var canvasHeight = 1920/3;
var ballSize = canvasHeight/15;

//diese p5.js-Standardfunktion wird zum Start einmal ausgeführt
function setup() {
    //die Leinwand wird erzeugt
    createCanvas(canvasWidth, canvasHeight);

    //Objekt des Balls wird erzeugt
    ctBall = new CtBall();
}

//diese p5.js-Standardfunktion wird Frame für Frame erneut ausgeführt
function draw() {
    //Hintergrund
    background(0,136,255);

    //Ball wird angezeigt
    ctBall.show();
}

//die Klasse des Balls
function CtBall() {
    //Objektvariablen
    this.x = canvasWidth / 2;
    this.y = canvasHeight / 2;
    this.speed = 0;
    this.acceleration = 1;

    this.show = function () {
        //Berechnung der Geschwindigkeit & Veränderung der Position
        this.speed += this.acceleration;
        this.y += this.speed;

        //Ball kommt auf dem Boden auf und prallt ab
        if(this.y > (canvasHeight - ballSize/2) && this.speed > 0) {
            this.jump();
        }

        //Darstellung des Balls
        fill(252,233,3);
        noStroke();
        ellipse(this.x, this.y, ballSize, ballSize);
    }

    //Ball wechselt mit 90% der Energie die Richtung
    this.jump = function() {
        this.speed = this.speed * -0.9;
    }
}
