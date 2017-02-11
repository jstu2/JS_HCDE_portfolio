//Julie Stuart
//last edited February 10th, 2017
//this program shows Albuquerue, NM which has a mountainous desert terrain with a pueblo, tram, and hot air balloons over 
//the course of a 24 hour period. The background changes from day to night showing stars in the background. In this program, I 
//experimented with text, frameRate, modulo, altering colors inversely, and for loop used for adobe knobs
colorChange = 0 //how much the colors are added to/subtracted from over the course of the day
shapeX = 0 //balloon X
shapeY = 0 //balloon Y

jumpValueX =  0 //balloon X location
jumpValueY = 0 //balloon Y location
jumpDirX = .4  // ballon X direction and speed
jumpDirY = 1//speed and direction of balloons for Y

cloudValueX = 0 //cloud x movement
cloudValueY = 0 //cloud y movement
jumpDirCloudX = 1 //cloud direction X
jumpDirCloudY = 0 //cloud direction Y 


function setup() {
  createCanvas(800,600);
  background (174, 232, 249); // light blue
  }

function draw() {
  
  currentTime= abqTime()
  balloonX = 200 * cos((-currentTime*2*PI)/1000) //circular equation for balloon movement for X
  balloonY = 400 * sin((-currentTime*2*PI)/1000) //circular equation for ballon movement for Y
 
  if (currentTime > 800){ //if frame rate is greater than 800, make the balloons stop moving 
    balloonX = -400 //balloonX moves off the screen
    balloonY = 0 //balloonY movement
  }
  
  background (174 - colorChange, 232 - colorChange, 249 - colorChange); //background will be changed by variable colorChange
  if (currentTime < 1000 || currentTime > 1400){ //if frame count is less than 1000 and greater than 1400, make the tram move
    jumpValueX =  jumpValueX - jumpDirX;  //tram X movement
    jumpValueY = jumpValueY - jumpDirY; //tram Y movement
  }
  if (currentTime > 800){ //if frame rate is greater than 800, make the cloud move across the sky one time
    cloudValueX =  cloudValueX -  - jumpDirCloudX ; //cloud will move to the right straight across the picture

  }
  //makes the tram  move up
  if (jumpValueX < -100 || jumpValueX > 0) { //if the tram moves above 0 or below -100, change direction of the tram
    jumpDirX = - jumpDirX; //change the X direction
    jumpDirY = - jumpDirY; //change the Y direction
  }

  if (currentTime > 600 && currentTime < 1000){ //if frame count is greater than 600 and less than 1000, make the colorChange 
  //variable equal to current value plus .5 to make the color lighter
    colorChange =  colorChange + .5
  }
  if (currentTime > 1300){//if frame count is greater than 1300 make the colorChange 
  //variable equal to current value minus .5 to make the color darker
    colorChange = colorChange - .5
  }
  if (colorChange < 0){ //resets color change value when currentTime is back at zero
     colorChange =  0
  }
  
  // calls background stars with parameters for location
  stars(300,230);
  stars(280, 141);
  stars (10,333);
  stars(400, 400);
  stars(300,100);
  stars(700, 337);
  stars(300,30);
  stars(80, 255);
  stars (100,400);
  stars(300, 490);
  stars(500,290);
  stars(300,5);
  stars(280, 435);
  stars (150,10);
  stars(450, 400);
  stars(350,111);
  stars(750, 80);
  stars(350,530);
  stars(10, 149);
  stars (150,420);
  stars(50, 141);
  stars(550,233);
  
  // call balloon functions
  balloon(490 + balloonX, 560 + balloonY,200,0,100, 175, 7, 156, 255, 99, 166);
  balloon(430 + balloonX, 500 + balloonY, 90,10, 83, 19, 19, 104, 253, 255, 140);

  //tram line, 
  stroke(0,100); // gray
  strokeWeight(4); // thick line
  line(410,580,290,304); // tram line coordinates
  noStroke(); //stop outlines
  
  //land
  fill(255 - colorChange, 228 - colorChange, 168 - colorChange); //light orange
  rect(350, 580, 460, 23); //land 
 
 //mountains
  fill(40 - colorChange); // dark gray
  triangle(80, 600, 0, 600, 0, 150); // 1st mountain
  fill(50 - colorChange); // gray
  triangle(0,600, 160, 600, 80, 150); // 2nd mountain
  fill(100 - colorChange); // light gray
  triangle(100,600, 260, 600, 180, 150, 300); // 3rd mountain
  fill(150 - colorChange); // lightest gray
  triangle(200, 600, 360, 600, 280, 150); // 4th mountain
  
  //pueblo
  fill(163, 115, 11); // brown
  rect(555,520, 200, 70, 10); // outline of pueblo top
  rect(560, 470, 130, 70, 10); // outline of pueblo bottom
  fill(214, 166, 64); // yellow
  rect(560,520, 200, 70, 10); // pueblo top
  rect(565, 470, 130, 70, 10); //pueblo bottom
  fill(54, 214, 216); // turquoise
  rect(610,550, 20,40); // door
  
  //adobe knobs top
  for (i = 570; i < 695; i += 15){ //for loop for adobe knobs top, repeats a knob for every 15 x coordinates
    adobeKnobs(i, 485)
  }
  //adobe knobs bottom
  for ( i = 570; i < 760; i +=15){ //for loop for adobe knobs bottom
    adobeKnobs(i, 532)
  }

  // calls clouds
  cloud(-100 + cloudValueX,50 + cloudValueY); 
  cloud(-150 + cloudValueX,70 + cloudValueY);
  
  // calls tram
  tram(388 + jumpValueX, 545 + jumpValueY);
  
  // Albuquerque text
  fill(0,185,210); // makes text white
  textSize(24);//makes text size 24
  text("Albuquerque, New Mexico", 400, 60, 300, 300); // prints text in parenthesis at designated coordinates with text box

  fill(102, 175, 209); // blue
  arc(480, 580, 80, 80, 0, PI, OPEN); //arc for river
  }


function abqTime(){
  return frameCount % 1800 // modulo loops frameCount at 1800 by returning remainder after dividing by 1800
  }

//adobe knobs
function adobeKnobs(knobX, knobY){ //knobs x and y
  fill(135, 102, 32) // brown
  ellipse(knobX, knobY, 5,5); // knobs location defined in parameter and size
  }
/// stars
function stars (starsX,starsY){ //x and y
  fill(174 + .5 * colorChange, 232 + .5 * colorChange, 249 + .5 * colorChange, 250); // stars get lighter as sky gets darker and reverse
  rect(starsX,starsY,5,5); //location and size of stars
  }  


function tram (a,b){ //tram location
  fill(200 - colorChange,0,0); // red
  rect(a,b, 50, 35); // tram rectangle
  fill(255 - colorChange); //white
  rect(a, b +20, 50, 10);// tram white rectangle
  fill(100 - colorChange,230-colorChange,240-colorChange);//aqua
  rect(a, b +5, 50, 10); // aqua tram rectangle
  fill(255, 253, 239 - colorChange);//yellow light
  ellipse(a,b, 5,5); //yellow light circle
  fill(255, 253, 239, 50); //transparent light
  ellipse(a,b,15, 15); //transparent light circle
}
//clouds
function cloud(c,d){ //cloud x and y coordinates
  fill(255 - colorChange); //white - gray
  rect(c,d,100,40,200); //cloud shape
}

//balloons
function balloon(shapeX,shapeY,color1,color2,color3, color4, color5, color6, color7, color8, color9){ //ballon x,y, and all colors
  fill(255, 129, 50); // orange
  ellipse(shapeX + 10,shapeY - 3,10,20) //orange fire for balloon
  stroke(0); //outline
  strokeWeight(2); //thicker outline
  fill(color4, color5, color6); // first ballon colors
  ellipse(shapeX-1, shapeY + -50, 50,60) //left outer balloon area
  ellipse(shapeX+20, shapeY + -50, 50,60) //right outer balloon area
  fill(color1, color2, color3); // colors for second balloon
  ellipse(shapeX + 10, shapeY + -50, 50, 70)
  rect(shapeX,shapeY - 22, 20,10); //inner ballon
  fill(color6, color7, color8); //lime green center
  ellipse(shapeX + 10, shapeY -50, 14,70); //lime green ellipse
  noStroke(); //no outline
  fill(250, 190, 30); //orange
  rect(shapeX, shapeY, 20, 20); // orange baskets
}
