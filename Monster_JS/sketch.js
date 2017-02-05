// Julie Stuart, last edited February 4th, 2017
// Program makes a drawing of a monster move up and down or look left and right when user clicks

page = 0 //sets page variable equal to 0
eyeDirection = 4 //changes how far the eyes move
center = 380 //sets center of page for eye direction movement
jumpValue = -50 //Y value of George's jump
jumpDir = 2 //speed and direction

function setup() {
  createCanvas(800, 600);
}
function draw(){
   
  // if statement makes it so that if the page = 0, the background is purple and the monster's eyes will move left and right
  if (page == 0) { //if page is = 0
    background(100,100,200); //set background to purple
    if (mouseX < center){ //if mouse is less than center (380)
      eyeDirection = -4 //eyes go four to the left
    } else { //otherwise
      eyeDirection = 4 //eyes go four to the right
    }
  } else { //dictates that if page is anything other than 0, the monster should move up and down
    background(200,200,100); //yellow background
    eyeDirection = 0; //stop eyes from moving
    jumpValue =  jumpValue - jumpDir; //makes the monster move up
    if (jumpValue < -100 || jumpValue > 0) { //if the monster moves above 0 or below -100, change direction of the monster
        jumpDir = - jumpDir; //change the direction
    }
}
 // show coordinates of mouse as X and Y values, show page number
  fill(255); //make text white
  text("X: " + mouseX, 0, 5, 300, 300); // print x coordinate in upper left corner
  text("Y: " + mouseY, 0, 20, 300, 300); // print y coordinate in upper left corner, under x coordinate
  text("page " + page, 0, 35, 300, 300); // print what page the function is on
  
  
 
  // Calling George
  George(0 + jumpValue);  // Movement of entirety of George except eyes
  
  //Calling both big eyes
  bigEyes(350, 400 + jumpValue, eyeDirection); // x of eyes, y and big eyes jump, eye direction movement
  bigEyes(410, 400 + jumpValue, eyeDirection);
  
  //Calling each individual small eye as function
  smallEye(400, 200 + jumpValue, eyeDirection); // coordinate of eye, Y of eyes "jump", eye direction movement
  smallEye(360, 200 + jumpValue, eyeDirection);
  smallEye(380, 120 + jumpValue, eyeDirection);
  smallEye(380, 160 + jumpValue, eyeDirection);
  smallEye(380, 240 + jumpValue, eyeDirection);
  smallEye(340, 250 + jumpValue, eyeDirection);
  smallEye(420, 250 + jumpValue, eyeDirection);
  smallEye(380, 280 + jumpValue, eyeDirection);
  smallEye(380, 320 + jumpValue, eyeDirection);
  smallEye(330, 300 + jumpValue, eyeDirection);
  smallEye(430, 300 + jumpValue, eyeDirection)
}

// George
function George(y){ // function of George with parameter of y for movement
  noStroke(); //not outline
  fill("#A73E5C"); //fill purple
  ellipse(365, 400 + y, 200, 200);// purple outline
  triangle(265.8, 394 + y, 480, 401 + y, 380, 67 + y); // purple outline 
  fill("#EC4863"); //fill pink
  ellipse(center, 400 + y, 200, 200); // pink circle of George
  triangle(279.8, 394 +y, 480, 401 + y, 380, 67 + y); // pink triangle
  
  //mouth
  fill("#5C2849"); // purple 
  arc(380, 440 + y, 80, 80, 0, PI, OPEN); //mouth arc
  
  // feet
  stroke("#EC4863"); //pink
  strokeWeight(10); //thick stroke
  line(360, 490 + y, 360, 560 + y); // left foot
  line(410, 490 + y, 410, 560 + y); // right foot
  
  //arms
  stroke("#EC4863"); //pink
  strokeWeight(10); //make feet thicker
  line(195, 400 + y, 285, 430 + y); //left arm
  line(555, 400 + y, 470, 430 + y); //right arm
  
  noStroke()
  //socks
  fill("#1FCECB"); //fill blue
  rect(330, 560 + y, 40, 20, 50); // top sock
  rect(350, 530 + y, 20, 40, 50); // bottom sock
  rect(400, 560 + y, 40, 20, 50); // top sock
  rect(400, 530 + y, 20, 40, 50); // bottom sock
}

//big eyes
function bigEyes(x, y, pupil){ //parameters for X, Y, and movement of pupil
  noStroke(); //remove outline
  fill("#A73E5C"); // purple
  ellipse(x, y, 40, 40); //  big eye purple circles
  fill(255);//white area
  ellipse(x, y, 30, 30); // big eye white circles
  fill(0); // black
  ellipse(x + pupil, y, 10, 10); // pupils
}

//small eyes
function smallEye(x,y, pupil){ // x & y coordinates, pupil 
  noStroke(); //no outline
  fill("#A73E5C"); // purple 
  ellipse(x, y, 20, 20); // purple ellipse
  fill(255); // white
  ellipse(x, y, 15, 10); // white ellipse
  fill(0); //black
  ellipse(x + pupil, y, 5, 5); // black pupil
}
 
function mousePressed (){ // when mouse is pressed
  page = 1 - page; // make page one minus page
}