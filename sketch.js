var fixedRect, movingRect;
var gameObject1, gameObject2, gameObject3, gameObject4;

function setup() {
  createCanvas(1200,1200);

  //for touching rectangles
  fixedRect = createSprite(600, 300, 50, 50);
  fixedRect.shapeColor = "green";
 
  movingRect = createSprite(600, 500,50,50);
  movingRect.shapeColor = "green";

  //for bounce off
  object1 = createSprite(300, 200,50,50);
  object1.shapeColor = "green";

  object2 = createSprite(600, 200,50,50);
  object2.shapeColor = "green";

   object1.velocityX = +5;
   object2.velocityX= -5;
  
}

function draw() {
  background('black');  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  // if rectangle are touching, change color
  if (fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2
    && movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2
    && fixedRect.y - movingRect.y < movingRect.height/2 + fixedRect.height/2
    && movingRect.y - movingRect.y < movingRect.height/2 + fixedRect.height/2) {
      
      //if is true, then change color
       movingRect.shapeColor = "blue";
       fixedRect.shapeColor = "blue"; 
  }
  else {
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }

  
  //bounce off the rectangles
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2) {
    object1.velocityX = object1.velocityX * (-1);
    object2.velocityX = object2.velocityX * (-1);
  }
  if (object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object2.y < object2.height/2 + object1.height/2) {
      object1.velocityY = object1.velocityY * (-1);
      object2.velocityY = object2.velocityY * (-1);
  } 
  
   
  drawSprites();
}

