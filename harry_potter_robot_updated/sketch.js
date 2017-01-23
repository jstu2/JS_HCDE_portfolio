//When I remove the background line of code, multiple versions of my robot are printed acrosst the screen as I drag the mouse within the canvas
//When the background is put back, the robot follows the mouse on a gray background, but without printing multiple robots

function setup() {
    createCanvas(720, 480); //creates grid to draw on
    smooth()//smooths edges
    strokeWeight(2);//gives line a slightly thicker appearance
}
    
function draw() {
  background(205);//gray background
  translate(mouseX, mouseY);//moves pictue w/ mouse movement
 // Neck
  stroke(104, 19, 22);//color of lines
  line(266, 257, 266, 162);//(x1,y1,x2,y2)
  line(276, 257, 276, 162);//(x1,y1,x2,y2)
  line(286, 257, 286, 162);//(x1,y1,x2,y2)
  
  // Antennae
  //
  line(276, 155, 246, 112);//(x1,y1,x2,y2)
  line(310, 50, 280, 150);//(x1,y1,x2,y2)
  line(276, 155, 342, 170);//(x1,y1,x2,y2)
  
  // Body
  noStroke();//removes border
  fill(104, 19, 22);//maroon 
  ellipse(264, 377, 66, 66); //bottom wheel, x,y starting coordinates, second two are height and width of ellipse
  fill(153, 3, 53);//lighter maroon
  rect(219, 257, 90, 120);//large rectangle (x1,y1,height, width)
  fill(226, 199, 99);//gold
  rect(219, 274, 90, 6);//gold rectangel coordinates (x1,y1,height, width)
  
  // Head
  fill(168, 15, 43);//maroon 
  ellipse(276, 155, 90, 90);//head coordinates (x1,y1=center, height, width)
  fill(255);//white 
  ellipse(288, 150, 28, 28); //eyeball (x1,y1=center, height, width)
  fill(7, 114, 5);//green
  ellipse(288, 150, 6, 6);//iris
  fill(255, 194, 28);//gold
  ellipse(263, 148, 10, 10);//head dot
  ellipse (296, 130, 8, 8);//head dot
  ellipse(305, 162, 6, 6);//head dot
  
}