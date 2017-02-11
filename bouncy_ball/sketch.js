//Julie Stuart
// last edited February 10th, 2017
//program makes a ball bounce around screen and change to a random color when it hits an edge, when mouse is clicked, ball will change to
//a random size
//I implemented the random function for size and color and using mouseClicked as a function


var x = 25; // x coordinate for ball
var dir = 1.5; // x movement for ball
var y = 100 //y coordinate for ball
var dirY = 5 //y movement for ball
r = 0 // red variable, ball will start black
g = 0 // green variable, ball will start black
b = 0 // blue variable, ball will start black
radius = 50 // radius

function setup() {
  createCanvas(500, 500);
  background(45,200,335);
}

function draw() {
  x = x + dir; //x movement for ball
  y = y + dirY //y movement for ball
  
  background(45,200,335); // blue

  //ball  
  ball(x,y); // ball location


  if (x < 25 || x > 475) { // if the x for the ball is less than 25 or greater than 475, reverse the X direction and change the red,
    //green, and blue to random numbers for color creating a random color when the ball hits an edge
    dir = dir * -1; // reverse the X direction when the ball hits an edge
    r = random(255); // red
    b = random(255); // blue
    g = random(255); // green
  }
 
 if ( y < 25 || y > 475) {// if the y for the ball is less than 25 or greater than 475, reverse the y direction and change the red,
    //green, and blue to random numbers for color creating a random color when the ball hits an edge
   dirY = dirY * -1; //reverse the Y direction when the ball hits an edge
   r = random(255); // red
   b = random(255); // blue
   g = random(255); // green
 }
}
 //call ball function
function ball(x,y){ // ball cordinates
  fill(r,g,b); // give ball variables for red, green, and blue values
  ellipse(0 + x, y + 0, radius, radius); // coordiantes for ellipse and radius is the variable for the size of the ellipse
  
}

function mouseClicked() { //when mouse is clicked, randomly change the size of the ball
    radius = random(100,400) // radius is given a value between 100 and 400
}