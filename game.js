//Objektvariablen
var ctBird = null;
var ctPipes = [];
var ctScore = null;

//Variablen für Abmessungen etc.
var canvasWidth = 1080/3;
var canvasHeight = 1920/3;
var birdSize = canvasHeight/15;
var birdX = canvasWidth/3;
var pipeWidth = canvasWidth/5;
var pipeGap = birdSize*4;
var gapMargin = canvasHeight/10;
var pipeDistance = pipeWidth * 2;
var scoreFont;

//vor Start des Programms wird die Schriftart geladen
function preload() {
 scoreFont = loadFont('./font.ttf');
}

function setup() {
 
 //die Leinwand wird erzeugt
 createCanvas(canvasWidth, canvasHeight);

 //Objekte des Vogels und des Scores werden erzeugt
 ctBird = new CtBird();
 ctScore = new CtScore();
}

function draw() {
 
 //Hintergrund
 background(79,191,203);

 //das Spiel hat noch nicht begonnen, der Spieler wird zum Starten aufgefordert
 if(ctScore.gameStatus == 0) {
  ctBird.show();
  ctScore.show("PRESS SPACE TO START");
 }

 //das Spiel läuft
 if(ctScore.gameStatus == 1) {
  ctBird.show();

  //neue Röhre erstellen
  if(ctPipes[ctPipes.length - 1].x < canvasWidth - pipeWidth - pipeDistance) {
   ctPipes.push(new CtPipe());
  }

  //durch alle Röhren iterieren
  for(var i = ctPipes.length - 1; i >= 0; i--) {
   
   //Röhre anzeigen
   ctPipes[i].show();
 
   //prüfen, ob der Vogel mit der Röhre kollidiert
   ctPipes[i].checkCollision(ctBird.y);

   //Score erhöhen
   if (ctPipes[i].x + pipeWidth/2 == birdX) {
    ctScore.increase();
   }

   //nicht mehr sichtbare Röhren entfernen
   if(ctPipes[i].x < -pipeWidth) {
    ctPipes.splice(i, 1);
   }
  }
 
  //Score anzeigen
  ctScore.show(ctScore.actScore);
 }

 //das Spiel ist beendet, der Score wird angezeigt
 if (ctScore.gameStatus == 2) {
  ctScore.show(ctScore.actScore + " / " + ctScore.highScore + "\n\nGAME OVER");
 }

}

//in dieser Funktion werden alle Tastendrücke abgefangen
function keyPressed() {
 
 //die Leertaste wird gedrückt
 if (keyCode == 32) {
  
  //wenn das Spiel noch nicht gestartet ist, sorgt Druck auf die Leertaste für den Start des Spiels
  if (ctScore.gameStatus == 0) {
   ctScore.gameStatus = 1;
   ctScore.actScore = 0;
   ctPipes = [new CtPipe()];
  }

  //wenn das Spiel läuft, sorgt der Druck auf die Leertaste für das Springen des Vogels
  if(ctScore.gameStatus == 1) {
   ctBird.jump();
  }

  //wenn das Spiel vorbei ist, sorgt der Druck auf die Leertaste für den Neustart des Spiels
  if(ctScore.gameStatus == 2) {
   ctScore.gameStatus = 0;
   ctBird = null;
   ctBird = new CtBird();
  }
 }
}
