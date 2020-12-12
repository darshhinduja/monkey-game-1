
var monkey , monkeyimg
var banana ,bananaimg, obstacle, obstacleimg,bananagroup
var FoodGroup, obstacleGroup
var score
var ground

function preload(){
  
   
  monkeyimg =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaimg = loadImage("banana.png");
  obstaceimg= loadImage("obstacle.png");
 
}

function setup() {
createCanvas(600,600);
  
  monkey = createSprite(150,400,50,25);
  monkey.addAnimation("monkey", monkeyimg)
  monkey.scale = 0.2
  
  ground = createSprite(500,500,1000,20)
  ground.velocityX = 3;
  obstacleGroup = new Group();
  bananagroup = new Group();
   
   score = 0;
}


function draw() {
  background("white");
  
   text("Score: "+ score, 500,50);
  
  if (ground.x < 600){
      ground.x = ground.width/2;
    }
  
  if(keyDown("space")){
      monkey.velocityY = -20  ;
    }
  
   if(monkey.isTouching( obstacleGroup)){
     gamesta
      
      }
   monkey.velocityY = monkey.velocityY + 0.8
   monkey.collide(ground); 
  
 
  spawnStones();
  spawnFood();
  
   drawSprites();
}

function spawnStones  (){
  if (frameCount % 100 === 0){
   var obstacle = createSprite(550,465,10,40);
   obstacle.velocityX = -6;
     obstacle.x = Math.round(random(300,700));
    obstacle.addImage ( obstaceimg)
    obstacle.scale = 0.3;
    obstacleGroup.add(obstacle);
  }
  
}
function spawnFood (){
  if (frameCount % 100 === 0){
   var banana = createSprite(300,100,10,40);
   banana.velocityX = -6;
     banana.x = Math.round(random(300,700));
    banana.addImage ( bananaimg )
     banana.scale = 0.2;
     bananagroup.add(banana);
  }
  
}




