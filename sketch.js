var seaImg, sea;
var ship, movingup_down, edges;

function preload(){
  movingup_down = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png")
  seaImg = loadImage("sea.png")
}

function setup(){
  createCanvas(400,400);

  sea = createSprite(300, 180, 600, 20)
  sea.velocityX = -3
  sea.addImage("sea", seaImg)

  ship = createSprite(150, 250, 20, 50)
  ship.addAnimation("moving", movingup_down)
  edges = createEdgeSprites();
  ship.scale = 0.3
}

function draw() {
  background("blue");
  if(sea.x < 0){
    sea.x = sea.width / 2
  }
  console.log(ship.y)
  drawSprites();
}