const colorPalette = ["SteelBlue", "IndianRed", "LightSkyBlue", "Salmon"];
const d = 50;
const a = 20;

function preload() {
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(4);
  noStroke();
}


function draw() {
  background("LightSkyBlue");

  for(let x=a; x<=width; x+=d) {
    for(let y=a; y<=height; y+=d) {

    if (mouseIsPressed) {
      if (mouseX<windowWidth && mouseY<windowHeight) {
          fill(color(random(colorPalette)));
  }
}

      ellipse(x,y,d);
      square(x,y,25);


      push();
      noStroke();
      textFont("Helvetica");
      fill("black");
      textSize(20);
      text("click on screen to change pattern", 750, 220);
      pop();
    }
  }
}
