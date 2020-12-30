
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var survivalTime=0;
var ground
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,600);
  
  monkey=createSprite(50,160,20,50);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.1;
  
  ground=createSprite(0,200,2000,5);
  
  foodGroup=createGroup();
  obstaclesGroup=createGroup();
  
  monkey.setCollider("rectangle",0,0,monkey.width,monkey.height);
  



  
}


function draw() {
background("White");
 
 stroke("white");
  textSize(20);
  fill("white");
  text("Score:"+score,500,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("survival Time: "+survivalTime,100,50);
  
  
  ground.velocityX=-4;
  
  if(ground.x<0){
   ground.x=ground.width/2; 
  }
  
  if(keyDown("space")&&monkey.y>=0){
    monkey.velocityY=-12;
  }
  
  monkey.velocityY=monkey.velocityY+0.8;
  
  monkey.collide(ground);
  
  obstaclesGroup.setLifetimeEach(-1);
  foodGroup.setLifetimeEach(-1);
  
  banana();
 obstacle() ;
  
  
  
  
  drawSprites() ;
}
function banana(){
if  (frameCount % 80 === 0){
var banana = createSprite(600,250,40,10);
banana.y = Math.round(random(100,50));
banana.addImage(bananaImage);
banana.scale = 0.05;
banana.velocityX = -5;
banana.lifetime = 300;
monkey.depth= banana.depth + 1;
}
}

function obstacle(){
if  (frameCount % 200 === 0){
var obstacle = createSprite(380,390,20,20);
obstacle.y = Math.round(random(170,170));
obstacle.addImage(obstacleImage);
obstacle.scale = 0.2;
obstacle.velocityX = -3;
obstacle.lifetime = 300; 
    
}
}

