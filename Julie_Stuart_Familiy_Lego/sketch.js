//Julie Stuart, edited: January 28th, 2017
//Program moves four functions (Julie, Andrew, Knuffle, and Fred) from outer edges to center 

//Julie starting position
var Juliexpos = 10; 
var Julieypos = 10;
//Julie slope
var DirXJulie = 3;
var DirYJulie = 2;

//Fred starting position
var Fredxpos = 800;
var Fredypos = 40;
//Fred slope
var DirXFred = 3;
var DirYFred = 2;

//Knuffle starting position
var Knufflexpos = 30;
var Knuffleypos = 530;
//Knuffle slope
var DirXKnuffle = 3.5;
var DirYKnuffle = 2;

//Andrew starting position
var Andrewxpos = 800;
var Andrewypos = 400;
//Andrew slope
var DirXAndrew = 2.4;
var DirYAndrew = 1.6;

function setup() {
  createCanvas(900,600);
  background(130,200,10);
}

function draw() {
  background(130,200,10);
  
  Julie();
  Fred();
  Andrew();
  Knuffle();
  

  //Julie movement values
  //Julie X movement
  Juliexpos = Juliexpos + DirXJulie;
  
  //Julie Y pos
  Julieypos = Julieypos + DirYJulie; 
  
  //Julie stops when she is greater than 320
  if (Juliexpos > 320) {
    //change directions
    DirXJulie = 0; 
    DirYJulie = 0;}

  
  //Fred X pos
  Fredxpos = Fredxpos - DirXFred;
  
  //Fred Y pos
  Fredypos = Fredypos + DirYFred;
  
  //Fred stops when he is less than 430
  if (Fredxpos < 430 || Fredxpos < 0){
    DirXFred = 0;
    DirYFred = 0
    
  }
  
  //Knuffle X pos
  Knufflexpos = Knufflexpos + DirXKnuffle;
  
  //Knuffle Y pos
  Knuffleypos = Knuffleypos - DirYKnuffle;
  
  //Knuffle stops when she is greater than 370
  if (Knufflexpos > 370){
    DirXKnuffle = 0;
    DirYKnuffle = 0;
    
  }
    
  //Andrew X pos
  Andrewxpos = Andrewxpos - DirXAndrew;
  
  //Andrew Y pos
  Andrewypos = Andrewypos - DirYAndrew;
  
  //Andrew stops when he is less than 500
  if (Andrewxpos < 500){
    DirXAndrew = 0; 
    DirYAndrew = 0;
  }
}

//Julie upper right corner  
function Julie () {
  noStroke();
  fill(226, 218, 104);
  rect(Juliexpos, Julieypos, 40, 60);
  fill(252, 236, 201);
  ellipse(Juliexpos + 20, Julieypos + 23, 30, 30);
  fill(0);
  rect(Juliexpos, Julieypos + 60, 40, 40);
  fill(150, 2, 35);
  rect(Juliexpos, Julieypos + 100, 40, 60);
}

//Fred upper right corner
function Fred () {
  strokeWeight(1);
  fill(100,100,100);
  rect(Fredxpos, Fredypos, 40, 80);
  fill(255);
  rect(Fredxpos + 10, Fredypos + 30, 20, 40);
  stroke(100,100,100);
  fill(255);
  rect(Fredxpos, Fredypos + 80, 10, 10);
  rect(Fredxpos + 29, Fredypos + 80, 10, 10);
}

//Knuffle lower left corner
function Knuffle () {
  stroke(0);
  strokeWeight(6);
  fill(0);
  line(Knufflexpos + 20, Knuffleypos + 20, Knufflexpos + 60, Knuffleypos + 50);
  noStroke();
  fill(183, 170, 157);
  rect(Knufflexpos, Knuffleypos, 40, 40, 10);
  fill(104, 75, 65);
  rect(Knufflexpos, Knuffleypos - 25, 30, 30, 10);
}

//Andrew, lower right corner
function Andrew() {
  noStroke();
  fill(216, 213, 173);
  rect(Andrewxpos, Andrewypos, 40, 60);
  fill(252, 236, 201);
  rect(Andrewxpos, Andrewypos + 15, 40, 30);
  fill(17, 168, 198);
  rect(Andrewxpos, Andrewypos + 40, 40, 60);
  fill(94, 130, 97);
  rect(Andrewxpos, Andrewypos + 100, 40, 80);
}
