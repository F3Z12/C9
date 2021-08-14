var box;
function setup() {
  createCanvas(600,600);
  box = createSprite(300,300,30,30);
  box.shapeColor = ("red")
}

function draw() 
{
  background(30);
  if (keyIsDown(RIGHT_ARROW)){
 box.x += 2
}
 else if (keyIsDown(LEFT_ARROW)){
  box.x -= 2
  }
  else if (keyIsDown(UP_ARROW)){
    box.y -= 2
  }
  else if (keyIsDown(DOWN_ARROW)){
    box.y += 2
  }
drawSprites();
}




