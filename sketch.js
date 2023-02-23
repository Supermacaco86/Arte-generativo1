function setup() {
  createCanvas(1600, 1400);
}

function draw() {
   background(255, 0, 0, 15);
   stroke( 0, 0, 200);// Esto le da color a las lineas
  line(0, 0, mouseX, mouseY);
  line(width, 0, mouseX, mouseY);
  line(0, height, mouseX, mouseY);
  line(width, height, mouseX, mouseY);

  fill(0, 200, 0);// Esto le da color a la elipse
  ellipse(mouseX, mouseY, 20); 
}
