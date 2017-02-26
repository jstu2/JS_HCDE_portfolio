// Julie Stuart
// last edited 2/25/2017
// Displays periodic table. Colors show different melting and boiling points in Kelvin. Click to switch between. Hover to see 
//individual values

meltingPointColor1 = 255 //red color for boxes
meltingPointColor2 = 255 // green color for boxes
meltingPointColor3 = 255 // blue color for boxes
// chemical symbols array
var chemicalSymbol = [ "H" , "He" , "Li" , "Be" , "B", "C" , "N" , "O" , "F" , "Ne" , "Na" , "Mg" , "Al" , "Si" , "P" , "S" , "Cl" , "Ar" , "K" , "Ca" , "Sc" , "Ti" , "V" , "Cr" , "Mn" , "Fe" , "Co" , "Ni" , "Cu" , "Zn" , "Ga" , "Ge" , "As" , "Se" , "Br" , "Kr" , "Rb" , "Sr" , "Y" , "Zr" , "Nb", "Mo" , "Tc" , "Ru" , "Rh" , "Pd" , "Ag" , "Cd" , "In" , "Sn" , "Sb" , "Te" , "I" , "Xe" , "Cs" , "Ba" , "La" , "Ce" , "Pr" , "Nd" , "Pm" , "Sm" , "Eu" , "Gd" , "Tb" , "Dy" , "Ho" , "Er" , "Tm" , "Yb" , "Lu" , "Hf" , "Ta" , "W" , "Re" , "Os" , "Ir" , "Pt" , "Au" , "Hg" , "Tl" , "Pb" , "Bi" , "Po" , "At" , "Rn" , "Fr" , "Ra" , "Ac" , "Th" , "Pa" , "U" , "Np" , "Pu" , "Am" , "Cm" , "Bk" , "Cf" , "Es" , "Fm" , "Md" , "No" , "Lr", "Rf" , "Db" , "Sg" , "Bh" , "Hs" , "Mt" , "Ds" , "Rg" , "Cn"]
//melting point array
var meltingPoint = [14,-1,454,1560,2348,3823,63,55,54,25,371,923,933,1687,317,388,172,84,337,1115,1814,1941,2183,2180,1519,1811,1768,1728,1358,693,303,1211,1090,494,266,116,312,1050,1799,2128,2750,2896,2430,2607,2237,1828,1235,594,430,505,904,723,387,161,302,1000,1193,1071,1204,1294,1373,1345,1095,1586,1629,1685,1747,1770,1818,1092,1936,2506,3290,3695,3459,3306,2739,2041,1337,234,577,601,544,527,575,202,-1,973,1323,2023,1845,1408,917,913,1449,1618,1323,1173,1133,1800,1100,1100,1900, "unknown", "unknown", "unknown", "unknown", "unknown", "unknown", "unknown", "unknown", "unknown", ]
// boiling point array
var boilingPoint = [20,4,1615,2743,4273,4300,77,90,85,27,1156,1363,2792,3173,554,718,239,87,1032,1757,3103,3560,3680,2944,2334,3134,3200,3186,3200,1180,2477,3093,887,958,332,120,961,1655,3618,4682,5017,4912,4538,4423,3968,3236,2435,1040,2345,2875,1860,1261,457,165,944,2143,3737,3633,3563,3373,3273,2076,1800,3523,3503,2840,2973,3141,2223,1469,3675,4876,5731,5828,5869,5285,4701,4098,3129,630,1746,2022,1837,1235,,211,,2010,3473,5093,4273,4200,4273,3503,2284,3383, "unknown", "unknown", "unknown", "unknown", "unknown", "unknown", "unknown", "unknown", "unknown", "unknown", "unknown", "unknown", "unknown", "unknown", "unknown", "unknown", "unknown", "unknown"]
//box X coordinate for individual elements
var boxX = 30
var boxY = 30 // box y for individual elements
page = 0 // page, allows for switch between melting point and boiling point

function setup() {
  createCanvas(1000,800);
}

function draw() {
  background(0); //black
  fill(255); //white
  textSize(25); //big text
  text("Period Table of Elements", 225, 70) //title
  textSize(18); // smaller text
  text("Hover to view actual values", 245, 100); // text
  text("Click to switch between melting point and boiling point", 180, 130); // text
  fill(0); // black

  box1(boxX,boxY,1, 0); // Hydrogen
  box1(boxX + 17 * 50,boxY,1, 1); // He
  box1(boxX, boxY + 50, 2, 2); // Li - Be
  box1(boxX + 12 * 50,boxY + 50,6, 4); // B - Ne
  box1(boxX, boxY + 100, 2, 10); // Na - Mg
  box1(boxX + 12 * 50,boxY + 100,6, 12); // Al - Ar
  box1(boxX, boxY + 150, 18, 18); // K - Kr
  box1(boxX, boxY + 200, 18, 36); // Rb - Xe
  box1(boxX, boxY + 250, 2, 54); // Cs - Ba
  box1(boxX + 50, boxY + 400, 15, 56); // Hf - Rn
  box1(boxX + 50, boxY + 450, 15, 88); // La - Lu
  box1(boxX + 150, boxY + 250, 15, 71); // Ac - Lr
  box1(boxX, boxY + 300, 2, 86); // Fr - Ra
  box1(boxX + 150, boxY + 300, 9, 103); // Rf - Cn
}

function mousePressed (){ // when mouse is pressed
  page = 1 - page; // make page one minus page
}

function box1(xCorner,yCorner, rowLength, index){ //draw box at x and y coordinates, draw this many boxes, start at this index
  boxWidth = 50; //width of element boxes
  column = 0; //column to start on
  
  //this for loop draws the boxes for the elements and assigns color value
  for (i = index; i < rowLength+index; i++){ // i equals index, i is less than rowLength(number of boxes plus number of index)
    if (meltingPoint[i] > 0 && meltingPoint[i] < 999 && page == 0) { //if melting point of element in array is greater than 0
    //and less than 999 and page == 0, show yellow
      meltingPointColor1 = 255, 
      meltingPointColor2 = 252, 
      meltingPointColor3 = 130;
    }
    else if (meltingPoint[i] > 1000  && meltingPoint[i] < 1999 && page == 0){ // show orange if melting point index is 1000-2000
      meltingPointColor1 = 255, 
      meltingPointColor2 = 176, 
      meltingPointColor3 = 30;
    }
    else if(meltingPoint[i] > 1999 && page == 0){ //show red if melting point index is greater than 2000
      meltingPointColor1 = 198, 
      meltingPointColor2 = 19, 
      meltingPointColor3 = 19;
    }
    else if (meltingPoint[i] == "unknown" && page == 0) { //show unknown if index value is unknown
      meltingPointColor1 = 149
      meltingPointColor2 = 149
      meltingPointColor3 = 149
    }
    
    if (boilingPoint[i] > 0 && boilingPoint[i] < 2000 && page == 1){ //if boiling point is 0-2000, show green on page 1
      meltingPointColor1 = 103
      meltingPointColor2 = 15 
      meltingPointColor3 = 150
    }
    else if (boilingPoint[i] > 2000 && boilingPoint[i] < 4000 && page == 1){ // if boiling point is 2000-4000, show blue on page 1
      meltingPointColor1 = 91
      meltingPointColor2 = 132
      meltingPointColor3 = 255
    }
    else if ( boilingPoint[i] > 4000 && page == 1) { // if boiling point is over 4000, show purple on page 1
      meltingPointColor1 = 149
      meltingPointColor2 = 249
      meltingPointColor3 = 127
    }
    else if (boilingPoint[i] == "unknown" && page == 1) { // show unknowin if boiling point is unknown
      meltingPointColor1 = 149
      meltingPointColor2 = 149
      meltingPointColor3 = 149
    }
  
  fill(meltingPointColor1, meltingPointColor2, meltingPointColor3); // color fill with r,g,b colors
  rect(xCorner + boxWidth * column, yCorner, boxWidth, boxWidth) //draw element boxes
  // if page is 0 and mouse X and y are in the box of an element, show that elements melting point
    if (page == 0 && mouseX > xCorner + boxWidth * column && mouseX < xCorner + boxWidth * column + boxWidth && mouseY > yCorner  && mouseY < yCorner + boxWidth ){
      fill(255); // white
      text(meltingPoint[i] + "K", 680,600) // print the value of the melting point in the right corner
    }
    // if page is 1 and mouse X and Y are in the box of an element, show that element's boiling point
    if (page == 1 && mouseX > xCorner + boxWidth * column && mouseX < xCorner + boxWidth * column + boxWidth && mouseY > yCorner  && mouseY < yCorner + boxWidth ){
      fill(255); //white
      text(boilingPoint[i] + "K", 680,600) //print the value of the boiling point in the right corner
    }
  fill(0); // black
  textSize(20); // bigger text
  text(chemicalSymbol[i], xCorner + boxWidth * column + 15, yCorner + 30); //print the chemical symbol of the element in the box it is assigned 
  column = column + 1 //as the loop runs, add 1 each time to keep assigning symbols to the next one in line
}

 if (page == 0){ // if page == 0
   fill(255); // black
   text("Less than 1000 degrees Kelvin", 240, 572); // melting point scale
   text("1000 - 2000 degrees Kelvin", 240, 607); // melting point scale
   text("Over 3000 degrees Kelvin", 240, 642); // melting point scale
   text("Unknown", 240, 682); // melting point scale
   fill(251, 255, 140) // yellow
   rect(200, 550, 30,30); //scale square
   fill(255, 182, 25); //orange
   rect(200, 585, 30,30);//scale square
   fill(193, 37, 13); // red
   rect(200, 620, 30,30);//scale square
   fill(149); //gray
   rect(200, 655, 30,30);//scale square
   fill(255); //white
   text("Melting Point: ", 550,600) //print text for melting point
 }
 else{ // if page == 1
   fill(255); // white
   text("Less than 2000 degrees Kelvin", 240, 572); //boiling point scale
   text("2000 - 4000 degrees Kelvin", 240, 607);//boiling point scale
   text("Over 4000 degrees Kelvin", 240, 642);//boiling point scale
   text("Unknown", 240, 682);//boiling point scale
   fill(169, 255, 132) // green
   rect(200, 550, 30,30); // scale square
   fill(56, 155, 255); // blue
   rect(200, 585, 30,30);// scale square
   fill(154, 52, 226); // purple
   rect(200, 620, 30,30);// scale square
   fill(149); // gray
   rect(200, 655, 30,30);// scale square
   fill(255); // white
   text("Boiling Point: ", 550, 600); // print boiling point text label
   
 }
}
