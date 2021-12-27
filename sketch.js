var road, roadImg;
var player, playerImg;

function preload() {
  roadImg = loadImage("path.png");
  playerImg = loadAnimation("Runner-1.png", "Runner-2.png");
}

function setup(){
  createCanvas(400, 400);
  
  road = createSprite(0, 0, 20, 40);
  road.addImage(roadImg);

  player = createSprite(0, 0, 20, 40);
  player.addImage(playerImg);
}

function draw() {
  background("red");
}
