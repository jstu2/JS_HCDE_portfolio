function setup() {
  createCanvas(500, 500); //creates canvas to draw on, length by width

  //Background gradient boxes
  //Purple to blue, left to right gradient, middle right
  noStroke(); //removes lines around rectangles
  from = color(103,60,89); //inputs what color starts on the left, purple
  to = color(173,194,200);//inputs what color the gradient will end on, blue
  colorMode(RGB);  // puts color form in RGB
  interA = lerpColor(from, to, .33); //alters how gradient is displayed, lower number sets distance from start color to next color
  interB = lerpColor(from, to, .66); //alters how gradient is displayed, higher number sets distance from end color to next color
  fill(from); //fill first rectangle
  rect(235, 350, 20, 80); //first rectangle in gradient: first number = X1, secoond number = y1, third and fourth = length by width
  fill(interA); //fills second rect
  rect(255, 350, 20, 80); //first number = X1, secoond number = y1, third and fourth = length by width
  fill(interB); //fills third rect
  rect(275, 350, 20, 80);//first number = X1, secoond number = y1, third and fourth = length by width
  fill(to); //fills fourth rect
  rect(295, 350, 20, 80);//first number = X1, secoond number = y1, third and fourth = length by width

  //Blue to purple, bottom right gradient
  from = color(173,194,200);//blue
  to = color(103,60,89);//purple
  colorMode(RGB);  //puts color form in RBG
  interA = lerpColor(from, to, .33);//alters how gradient is displayed, lower number sets distance from start color to next color
  interB = lerpColor(from, to, .66);//alters how gradient is displayed, higher number sets distance from end color to next color
  fill(from);//fill first rectangle
  rect(235, 430, 20, 80); //first rectangle in gradient: first number = X1, secoond number = y1, third and fourth = length by width
  fill(interA);//fills second rect
  rect(255, 430, 20, 80); //second rectangle in gradient: first number = X1, secoond number = y1, third and fourth = length by width
  fill(interB);//fills third rect
  rect(275, 430, 20, 80);//third rectangle in gradient: first number = X1, secoond number = y1, third and fourth = length by width
  fill(to);//fills fourth rect
  rect(295, 430, 20, 80);//fourth rectangle in gradient: first number = X1, secoond number = y1, third and fourth = length by width

  //Orange to yellow, middle right gradient
  from = color(235,93,42); //orange
  to = color(245,176,1);//yellow
  colorMode(RGB);  //puts color form in RBG
  interA = lerpColor(from, to, .33);//alters how gradient is displayed, lower number sets distance from start color to next color
  interB = lerpColor(from, to, .66);//alters how gradient is displayed, higher number sets distance from end color to next color
  fill(from);//fill first rectangle
  rect(235, 270, 20, 80);//first number = X1, secoond number = y1, third and fourth = length by width
  fill(interA);//fills second rect
  rect(255, 270, 20, 80);//first number = X1, secoond number = y1, third and fourth = length by width
  fill(interB);//fills third rect
  rect(275, 270, 20, 80);//first number = X1, secoond number = y1, third and fourth = length by width
  fill(to);//fills fourth rect
  rect(295, 270, 20, 80);//first number = X1, secoond number = y1, third and fourth = length by width

  //yellow to orange, middle left gradient
  from = color(245,176,1); //yellow
  to = color(235,93,42);//orange
  colorMode(RGB);  //changes color input
  interA = lerpColor(from, to, .33);//alters how gradient is displayed, lower number sets distance from start color to next color
  interB = lerpColor(from, to, .66);//alters how gradient is displayed, higher number sets distance from end color to next color
  fill(from);//fills first rect
  rect(150, 270, 20, 80);//first number = X1, secoond number = y1, third and fourth = length by width
  fill(interA);//2nt rect
  rect(170, 270, 20, 80);//first number = X1, secoond number = y1, third and fourth = length by width
  fill(interB);//3rd rect
  rect(190, 270, 20, 80);//first number = X1, secoond number = y1, third and fourth = length by width
  fill(to);//4th rect
  rect(210, 270, 20, 80);//first number = X1, secoond number = y1, third and fourth = length by width

  //red gradient, middle left
  from = color(154,18,28);//dark red
  to = color(151,93,79);// light red
  colorMode(RGB);  //input of color type
  interA = lerpColor(from, to, .33);//alters how gradient is displayed, lower number sets distance from start color to next color
  interB = lerpColor(from, to, .66);//alters how gradient is displayed, higher number sets distance from end color to next color
  fill(from); //1st rect
  rect(150, 350, 20, 80);//first number = X1, secoond number = y1, third and fourth = length by width
  fill(interA);//2nd rect
  rect(170, 350, 20, 80);//first number = X1, secoond number = y1, third and fourth = length by width
  fill(interB);//3rd rect
  rect(190, 350, 20, 80);//first number = X1, secoond number = y1, third and fourth = length by width
  fill(to);//4th rect
  rect(210, 350, 20, 80);//first number = X1, secoond number = y1, third and fourth = length by width

  //blue to green, middle left gradient
  from = color(52,158,215);//blue
  to = color(188,223,203);//green
  colorMode(RGB);  //input of color type
  interA = lerpColor(from, to, .33);//alters how gradient is displayed, lower number sets distance from start color to next color
  interB = lerpColor(from, to, .66);//alters how gradient is displayed, higher number sets distance from end color to next color
  fill(from);//1st rect
  rect(150, 430, 20, 80);//first number = X1, secoond number = y1, third and fourth = length by width
  fill(interA);//2nd rect
  rect(170, 430, 20, 80);//first number = X1, secoond number = y1, third and fourth = length by width
  fill(interB);//3rd rect
  rect(190, 430, 20, 80);//first number = X1, secoond number = y1, third and fourth = length by width
  fill(to);//4th rect
  rect(210, 430, 20, 80);//first number = X1, secoond number = y1, third and fourth = length by width

  //upper right blue gradient
  from = color(18, 117,189,50);// light blue
  to = color(8,131,203,200);//dark blue
  colorMode(RGB);  // input color format
  interA = lerpColor(from, to, .33); //alters how gradient is displayed, lower number sets distance from start color to next color
  interB = lerpColor(from, to, .66);//alters how gradient is displayed, higher number sets distance from end color to next color
  fill(from);//1st rect
  rect(398, 0, 40, 120);//first number = X1, secoond number = y1, third and fourth = length by width
  fill(interA);//2nd rect
  rect(418, 0, 40, 120);//first number = X1, secoond number = y1, third and fourth = length by width
  fill(interB);//3rd rect
  rect(438, 0, 40, 120);//first number = X1, secoond number = y1, third and fourth = length by width
  fill(to);//4th rect
  rect(458, 0, 40, 120);//first number = X1, secoond number = y1, third and fourth = length by width
  fill(to);//fifth rectangle
  rect(478,0,40,120);//first number = X1, secoond number = y1, third and fourth = length by width

  //mauve gradient, upper right
  from = color(74,16,12); //maroon
  to = color(77,69,74);//gray
  colorMode(RGB);  //color input
  interA = lerpColor(from, to, .33);//alters how gradient is displayed, lower number sets distance from start color to next color
  interB = lerpColor(from, to, .66);//alters how gradient is displayed, higher number sets distance from end color to next color
  fill(from);//1st rect
  rect(380, 120, 40, 120);//first number = X1, secoond number = y1, third and fourth = length by width
  fill(interA);//2nd rect
  rect(410, 120, 40, 120);//first number = X1, secoond number = y1, third and fourth = length by width
  fill(interB);//3rd rect
  rect(440, 120, 40, 120);//first number = X1, secoond number = y1, third and fourth = length by width
  fill(to);//4th rect
  rect(470, 120, 40, 120);//first number = X1, secoond number = y1, third and fourth = length by width

  //mauve gradient, lower middle right
  from = color(88,0,9);//mauve
  to = color(77,69,74);//gray
  colorMode(RGB);  //color input
  interA = lerpColor(from, to, .33);//alters how gradient is displayed, lower number sets distance from start color to next color
  interB = lerpColor(from, to, .66);//alters how gradient is displayed, higher number sets distance from end color to next color
  fill(from);//1st rect
  rect(315, 240, 140, 120);//first number = X1, secoond number = y1, third and fourth = length by width
  fill(interA);//2nd rect
  rect(335, 240, 100, 120);//first number = X1, secoond number = y1, third and fourth = length by width
  fill(interB);//3rd rect
  rect(355, 240, 60, 120);//first number = X1, secoond number = y1, third and fourth = length by width
  fill(to);//4th rect
  rect(375, 240, 20, 120);//first number = X1, secoond number = y1, third and fourth = length by width

  //mauve gradient, lower right right
  from = color(88,0,9);//mauve
  to = color(77,69,74);//gray
  colorMode(RGB);  //color input type
  interA = lerpColor(from, to, .33);//alters how gradient is displayed, lower number sets distance from start color to next color
  interB = lerpColor(from, to, .66);//alters how gradient is displayed, higher number sets distance from end color to next color
  fill(from);//1st rect
  rect(395, 240, 140, 120);//first number = X1, secoond number = y1, third and fourth = length by width
  fill(interA);//2nd rect
  rect(415, 240, 100, 120);//first number = X1, secoond number = y1, third and fourth = length by width
  fill(interB);//3rd rect
  rect(435, 240, 60, 120);//first number = X1, secoond number = y1, third and fourth = length by width
  fill(to);//4th rect
  rect(455, 240, 20, 120);//first number = X1, secoond number = y1, third and fourth = length by width

  //yellow green gradient, lower right(1st)
  from = color(32,78,39); //green
  to = color(228,164,24);//yellow
  colorMode(RGB);  //color input mode
  interA = lerpColor(from, to, .33);//alters how gradient is displayed, lower number sets distance from start color to next color
  interB = lerpColor(from, to, .66);//alters how gradient is displayed, higher number sets distance from end color to next color
  fill(from);//1st rect
  rect(315, 360, 140, 180);//first number = X1, secoond number = y1, third and fourth = length by width
  fill(interA);//2nd rect
  rect(335, 360, 100, 180);//first number = X1, secoond number = y1, third and fourth = length by width
  fill(interB);//3rd rect
  rect(355, 360, 60, 180);//first number = X1, secoond number = y1, third and fourth = length by width
  fill(to);//4th rect
  rect(375, 360, 20, 180);//first number = X1, secoond number = y1, third and fourth = length by width

  //yellow green gradient, lower right(2nd)
  from = color(228,164,24); //yellow
  to = color(32,78,39);//green
  colorMode(RGB);  //color input mode
  interA = lerpColor(from, to, .33);//alters how gradient is displayed, lower number sets distance from start color to next color
  interB = lerpColor(from, to, .66);//alters how gradient is displayed, higher number sets distance from end color to next color
  fill(from);//1st rect
  rect(395, 360, 140, 180);//first number = X1, secoond number = y1, third and fourth = length by width
  fill(interA);//2nd rect
  rect(415, 360, 100, 180);//first number = X1, secoond number = y1, third and fourth = length by width
  fill(interB);//3rd rect
  rect(435, 360, 60, 180);//first number = X1, secoond number = y1, third and fourth = length by width
  fill(to);//4th rect
  rect(455, 360, 20, 180);//first number = X1, secoond number = y1, third and fourth = length by width

  //green gradient, upper left
  from = color(188,223,203);//light green
  to = color(62,79,95,50);//dark green
  colorMode(RGB);  //color input mode
  interA = lerpColor(from, to, .33);//alters how gradient is displayed, lower number sets distance from start color to next color
  interB = lerpColor(from, to, .66);//alters how gradient is displayed, higher number sets distance from end color to next color
  fill(from);//1st rect
  rect(0, 0, 140, 180);//first number = X1, secoond number = y1, third and fourth = length by width
  fill(interA);//2nd rect
  rect(20, 0, 100, 180);//first number = X1, secoond number = y1, third and fourth = length by width
  fill(interB);//3rd rect
  rect(40, 0, 60, 180);//first number = X1, secoond number = y1, third and fourth = length by width
  fill(to);//4th rect
  rect(60, 0, 20, 180);//first number = X1, secoond number = y1, third and fourth = length by width

  //orange gradient,middle left 
  from = color(251,100,9);//dark orange
  to = color(236,146,13);//orange
  colorMode(RGB);  //color input mode
  interA = lerpColor(from, to, .33);//alters how gradient is displayed, lower number sets distance from start color to next color
  interB = lerpColor(from, to, .66);//alters how gradient is displayed, higher number sets distance from end color to next color
  fill(from);//1st rect
  rect(0, 180, 150, 180);//first number = X1, secoond number = y1, third and fourth = length by width
  fill(interA);//2nd rect
  rect(20,180, 100, 180);//first number = X1, secoond number = y1, third and fourth = length by width
  fill(interB);//3rd rect
  rect(40, 180, 60, 180);//first number = X1, secoond number = y1, third and fourth = length by width
  fill(to);//4th rect
  rect(60,180, 20, 180);//first number = X1, secoond number = y1, third and fourth = length by width

  //blue green gradient, bottom left 
  from = color(155,166,56); //blue
  to = color(113,185,192);//green
  colorMode(RGB);  //color input mode
  interA = lerpColor(from, to, .33);//alters how gradient is displayed, lower number sets distance from start color to next color
  interB = lerpColor(from, to, .66);//alters how gradient is displayed, higher number sets distance from end color to next color
  fill(from);//1st rect
  rect(0, 360, 150, 180);//first number = X1, secoond number = y1, third and fourth = length by width
  fill(interA);//2nd rect
  rect(20,360, 100, 180);//first number = X1, secoond number = y1, third and fourth = length by width
  fill(interB);//3rd rect
  rect(40, 360, 60, 180);//first number = X1, secoond number = y1, third and fourth = length by width
  fill(to);//4th rect
  rect(60,360, 20, 180);//first number = X1, secoond number = y1, third and fourth = length by width

  //gray rectangle inside orange circles
  rect(315, 120, 70, 120);//first number = X1, secoond number = y1, third and fourth = length by width

  //faint left tree line
  stroke(0);//black
  strokeWeight(1);//thickness of the line
  line(300, 520, 250, 00);//x1,y1,x2,y2

  //faint right tree line
  stroke(0);//black
  strokeWeight(1);//thickness of the line
  line(300, 520, 350, 00);//x1,y1,x2,y2
  
  //center orange circle gradient
  noStroke();//removes lines around ellipses
  from = color(235,93,42,200);//yellow
  to = color(245,176,1,200);//orange
  colorMode(RGB);  //color input mode
  interA = lerpColor(from, to, .33);//alters how gradient is displayed, lower number sets distance from start color to next color
  interB = lerpColor(from, to, .66);//alters how gradient is displayed, higher number sets distance from end color to next color
  fill(from);//1st circle
  ellipse(225, 120, 420, 420);//x1,y1, for center point, 3rd and fourth = length by width
  fill(interA);//2nd circle
  ellipse(225, 120, 360, 360);;//x1,y1, for center point, 3rd and fourth = length by width
  fill(interB);//3rd circle
  ellipse(225, 120, 300, 300);//x1,y1, for center point, 3rd and fourth = length by width
  fill(to);//4th circle
  ellipse(225, 120, 240, 240);//x1,y1, for center point, 3rd and fourth = length by width
  
  //outer faint circle yellow
  fill(244,191,60,40);//yellow
  ellipse(225, 120, 500, 500);//x1,y1, for center point, 3rd and fourth = length by width

  //lamp post left curve
  p1 = {x: 230, y: 76}, p2 = {x: 210, y: 200}//coordinates of points
  p3 = {x: 158, y: 170}, p4 = {x: 115, y: 0}//coordinates of points
  noFill();//not filled
  stroke(0);//black
  strokeWeight(4);//increases thickness
  curve(p1.x, p1.y, p1.x, p1.y, p2.x, p2.y, p3.x, p3.y)//first area of curve
  stroke(0);//black
  curve(p1.x, p1.y, p2.x, p2.y, p3.x, p3.y, p4.x, p4.y)//second area of curve
  
  //lamp post right curve
  p1 = {x: 230, y: 76}, p2 = {x: 250, y: 200}//coordinates of points
  p3 = {x: 300, y: 170}, p4 = {x: 190, y: 250}//coordinates of points
  noFill();//not filled
  stroke(0);//black
  curve(p1.x, p1.y, p1.x, p1.y, p2.x, p2.y, p3.x, p3.y)//first area of curve
  stroke(0);//black
  curve(p1.x, p1.y, p2.x, p2.y, p3.x, p3.y, p4.x, p4.y)//second area of curve
  stroke(0);//black
  curve(p1.x, p1.y, p2.x, p2.y, p3.x, p3.y, p4.x, p4.y)//third area of curve

  //lamp post base
  noStroke();//removes border
  fill(0,0,0, 200);//black, slightly transparent
  rect(225, 40, 10, 500);//starting coordinates and l x w
  
  //lights
  fill(241,251,245);//white
  //left light
  rect(130, 120, 55, 60, 120);//starting coordinates, rounded edge variable, length by width)
  //middle light
  rect(200, 20, 55, 60, 50);//starting coordinates, rounded edge variable, length by width)
  //right light
  rect(270, 120, 55, 60, 120);//starting coordinates, rounded edge variable, length by width)

  //thick tree branch left
  stroke(0,0,00,150);//black, slightly transparent
  strokeWeight(10);//thick line
  line(400, 520, 350, 300);//beginning and end coordinates
  
  //thick tree branch right
  stroke(0,0,0,150);//black, slightly transparent
  strokeWeight(10);//thick line
  line(400, 520, 450, 00);//beginning and end coordinates
















  
       

  
  
  
  
  
  

}