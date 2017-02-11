page = 0
colorChange = 0
x = 0
y = 0
w = 490
z = 540
jumpValue = -50
jumpValueX =  0
jumpValueY = 0
jumpDirX = .4 
jumpDirY = 1//speed and direction of ballons
cloudValueX = 0
cloudValueY = 0
jumpDirCloudX = 1
jumpDirCloudY = 0


function setup() {
  createCanvas(800,600);
  background (174, 232, 249);
  
  
}

function draw() {
  
  
  currentTime= abqTime()
 
  
  balloonX = 200 * cos((-currentTime*2*PI)/1000)
  balloonY = 400 * sin((-currentTime*2*PI)/1000)
  //balloonX = 200 *cos((2*PI) + currentTime/100) 
 // balloonY = 200 *sin((2*PI) + currentTime/100) 
 
 if (currentTime > 800){
   balloonX = -300
   balloonY = 0
 }
  
  background (174 - colorChange, 232 - colorChange, 249 - colorChange);
 if (currentTime < 1000 || currentTime > 1400){
  jumpValueX =  jumpValueX - jumpDirX;
  jumpValueY = jumpValueY - jumpDirY;
  
 }
  if (currentTime > 800){
  cloudValueX =  cloudValueX -  - jumpDirCloudX ;

  }
  //makes the tram  move up
    if (jumpValueX < -100 || jumpValueX > 0) { //if the tram moves above 0 or below -100, change direction of the tram
        jumpDirX = - jumpDirX; //change the direction
        jumpDirY = - jumpDirY;
    }

  if (currentTime > 600 && currentTime < 1000){
    colorChange =  colorChange + .5
    
  }
  
    
  
  if (currentTime > 1300){
    colorChange = colorChange - .5
  }
  
  if (colorChange < 0){
     colorChange =  0
  }
  
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
  balloon(490 + balloonX, 560 + balloonY,200,0,100, 175, 7, 156, 255, 99, 166);
  balloon(430 + balloonX, 500 + balloonY, 90,10, 83, 19, 19, 104, 253, 255, 140);

 stroke(0,100);
  strokeWeight(4);
  line(410,580,290,304);
  noStroke();
  fill(255 - colorChange, 228 - colorChange, 168 - colorChange);
  rect(350, 580, 460, 23);
 
  fill(40 - colorChange);
  triangle(80, 600, 0, 600, 0, 150);
  
  fill(50 - colorChange);
  triangle(0,600, 160, 600, 80, 150);
  fill(100 - colorChange);
  triangle(100,600, 260, 600, 180, 150, 300);
  fill(150 - colorChange);
  triangle(200, 600, 360, 600, 280, 150);
  fill(163, 115, 11);
  rect(555,520, 200, 70, 10);
  rect(560, 470, 130, 70, 10);
  fill(214, 166, 64);
  rect(560,520, 200, 70, 10);
  rect(565, 470, 130, 70, 10);
  fill(54, 214, 216);
  rect(610,550, 20,40);
  
  
  adobeKnobs(570,532);
  adobeKnobs(585,532);
  adobeKnobs(600,532);
  adobeKnobs(615,532);
  adobeKnobs(630,532);
  adobeKnobs(645,532);
  adobeKnobs(660,532);
  adobeKnobs(675,532);
  adobeKnobs(690,532);
  adobeKnobs(705,532);
  adobeKnobs(720,532);
  adobeKnobs(735,532);
  adobeKnobs(750,532);
  
  adobeKnobs(570,485);
  adobeKnobs(585,485);
  adobeKnobs(600,485);
  adobeKnobs(615,485);
  adobeKnobs(630,485);
  adobeKnobs(645,485);
  adobeKnobs(660,485);
  adobeKnobs(675,485);
  adobeKnobs(690,485);
  
  cloud(-100 + cloudValueX,50 + cloudValueY);
  cloud(-150 + cloudValueX,70 + cloudValueY);
  
  
  
  
  
 
  
  
  tram(388 + jumpValueX, 545 + jumpValueY);
  
  
  fill(0,185,210); //make text white
textSize(24);
text("Albuquerque, New Mexico", 400, 60, 300, 300);
textSize(12);
  text("X: " + mouseX, 0, 5, 300, 300); // print x coordinate in upper left corner
  text("Y: " + mouseY, 0, 20, 300, 300); // print y coordinate in upper left corner, under x coordinate
  text("page " + page, 0, 35, 300, 300); // print what page the function is on
  text("frame count" + abqTime(), 0, 50, 300, 300);
  
  
  fill(102, 175, 209); // purple 
  arc(480, 580, 80, 80, 0, PI, OPEN); //arc
  

}


function abqTime(){
  return frameCount % 1800
  
}
function adobeKnobs(knobX, knobY){
  fill(135, 102, 32)
  ellipse(knobX, knobY, 5,5);
}
function stars (starsX,starsY){
  fill(174 + .5 * colorChange, 232 + .5 * colorChange, 249 + .5 * colorChange, 250);
  rect(starsX,starsY,5,5);
}  


function tram (a,b){
  fill(200 - colorChange,0,0);
  rect(a,b, 50, 35);
  fill(255 - colorChange);
  rect(a, b +20, 50, 10);
  fill(100 - colorChange,230-colorChange,240-colorChange);
  rect(a, b +5, 50, 10);
  fill(255, 253, 239 - colorChange);
  ellipse(a,b, 5,5);
  fill(255, 253, 239, 50);
  ellipse(a,b,15, 15);
}
function cloud(c,d){
  fill(255 - colorChange);
  rect(c,d,100,40,200);
}

function balloon(x,y,color1,color2,color3, color4, color5, color6, color7, color8, color9){
  
  fill(255, 129, 50);
  ellipse(x + 10,y - 3,10,20)
  stroke(0);
  strokeWeight(2);
  fill(color4, color5, color6);
  ellipse(x-1, y + -50, 50,60)
  ellipse(x+20, y + -50, 50,60)
  fill(color1, color2, color3);
  ellipse(x + 10, y + -50, 50, 70)
  rect(x,y - 22, 20,10);
  fill(color6, color7, color8);
  ellipse(x + 10, y -50, 14,70);
  noStroke();
  fill(209, 156, 12);
  rect(x, y, 20, 20);
  fill(250, 190, 30);
  rect(x, y, 20, 20);
  
  
  
}
