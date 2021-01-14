var movingRect;
var gameobject1,gameobject2,gameobject3,gameobject4;

function setup() {
  createCanvas(1600,400);

  gameobject1 = createSprite(100,100,50,50);
  gameobject1.shapeColor = "yellow";
  gameobject1.debug = true;

  gameobject2 = createSprite(200,200,50,50);
  gameobject2.shapeColor = "pink";
  gameobject2.debug = true;

  gameobject3 = createSprite(300,300,50,50);
  gameobject3.shapeColor = "purple";
  gameobject3.debug = true;

  gameobject4 = createSprite(400,400,50,50);
  gameobject4.shapeColor = "skyblue";
  gameobject4.debug = true;

function draw() {
  background(0,0,0);  
  movingRect.velocityX = 4
  movingRect.velocityY = -4

  createEdgeSprites();

  movingRect.bounceOff(edges);
  
 
  if(movingRect.istouching(gameobject4) && movingRect.bounceOff(gameobject4)){
    movingRect.shapeColor = "skyblue";
    gameobject4.shapeColor = "skyblue";
  }
  
  if(movingRect.isTouching(gameobject1) && movingRect.bounceOff(gameobject1)){
    movingRect.shapeColor = "yellow";
    gameobject1.shapeColor = "yellow";
  }

  if(movingRect.istouching(gameobject2) && movingRect.bounceOff(gameobject2)){
    movingRect.shapeColor = "pink";
    gameobject2.shapeColor = "pink";
  }

  if(movingRect.istouching(gameobject3) && movingRect.bounceOff(gameobject3)){
    movingRect.shapeColor = "purple";
    gameobject3.shapeColor = "purple";
  }

  if(hasCollided( movingRect,gameobject4)){
    movingRect.shapeColor = "skyblue";
    gameobject4.shapeColor = "skyblue";
  }
  
  if(hasCollided( movingRect,gameobject1)){
    movingRect.shapeColor = "yellow";
    gameobject1.shapeColor = "yellow";
  }

  if(hasCollided( movingRect,gameobject2)){
    movingRect.shapeColor = "pink";
    gameobject2.shapeColor = "pink";
  }

  if(hasCollided( movingRect,gameobject3)){
    movingRect.shapeColor = "purple";
    gameobject3.shapeColor = "purple";
  }


  drawSprites();
}
}
function isTouching(object1,object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2) {
  return true;
}
else {
 return false;

}
}