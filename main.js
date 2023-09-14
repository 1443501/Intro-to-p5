function preload(){

}

function setup(){
    canvas=createCanvas(640,640);
    
    canvas.center();
    webcam=createCapture(VIDEO);
    
}

function draw(){
    image(webcam,0,0,40,80);
    fill(204, 101, 192, 127);
  stroke(127, 63, 120);
rect(40, 80, 100, 40);
ellipse(100, 200, 100, 20);
triangle(300, 100, 320, 100, 310, 80);
translate(580, 200);
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 30, 20, 80);
    rotate(PI/5);
  }
}