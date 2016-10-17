function setup(){
 createCanvas(windowWidth,windowHeight);
}



function draw() {

if(mouseIsPressed){
  line(pmouseX, pmouseY, mouseX, mouseY);
}
}