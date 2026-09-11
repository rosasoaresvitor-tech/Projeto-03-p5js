//Projeto 3 - Desenhando circulos

function setup() {
  createCanvas(400, 400);
}

function draw() {
  stroke("black")
  fill(255,0,0);
  if(mouseIsPressed){
    circle(mouseX,mouseY,20);
  }
}