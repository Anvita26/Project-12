//declaring variables
var road , player;
var road_image, player_animation;
var boundary1 , boundary2; 

function preload(){
  //pre-load images
  road_image = loadImage("path.png");
  player_animation = loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
  createCanvas(400,400);

  //create sprites here
  road = createSprite(200,200);
  road.addImage("road",road_image);
  road.velocityY = 5 ; 
  road.scale= 1.2;

  player = createSprite(200,300);
  player.addAnimation("running player",player_animation);
  player.scale = 0.05;
  
  boundary1 = createSprite(25,250,48,500);
  boundary1.visible= false;
  boundary2 = createSprite(375,250,48,500);
  boundary2.visible= false;

}

function draw() {
  background("black");
  //reset the road
  if(road.y > 500) {
    road.y= 0;
  }
  //move player's x position with the mouse's x position
  player.x = World.mouseX; 
  //to collidee the player with the boundaries
  player.collide(boundary1);
  player.collide(boundary2)
  drawSprites();
}