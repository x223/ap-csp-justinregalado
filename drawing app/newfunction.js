var strokeColor = 'pink';

function setup(){
 createCanvas(windowWidth,windowHeight);
 background('yellow');
  
}


function keyTyped() {
  if (key === 'b') {
    strokeColor = 'black';
  } else if (key === 'p') {
    strokeColor = '#E32173';
    strokeWeight = 10;
  }
}

function draw() {
  stroke(strokeColor);
if(mouseIsPressed){
  line(pmouseX, pmouseY, mouseX, mouseY);
}
}