  
var mspImg, msptower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var pavan, pavanImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"


function preload(){
  mspImg = loadImage("pavan tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("msp cimb.png");
  pavanImg = loadImage("pavan.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600,600);
  spookySound.loop();
  msptower = createSprite(300,300);
  msptower .addImage("msptower",mspImg);
  msptower.velocityY = 1;
  
  doorsGroup = new Group();
  climbersGroup = new Group();
  invisibleBlockGroup = new Group();
  
  pavan = createSprite(200,200,50,50);
  pavan.scale = 0.3;
  pavan.addImage("pavan", pavanImg);
}


function draw() {
  background(255);
 if(msptower.y > 400 ){
     msptower.y = 300
    } 
  
  if (gameState === "play") {
    
    if(keyDown("LEFT_ARROW")){
        pavan.x = pavan.x - 3;

      
    }
    if(keyDown("RIGHT_ARROW")){
  
          pavan.x = pavan.x + 3;


      
    }
    if(keyDown("SPACE")){
  
         pavan.velocityY = -10;

    
      
    }
  
  pavan.velocityY = pavan.velocityY + 0.8;
  
   
    
    
      spawnDoors();

  

     if(climbersGroup.isTouching(pavan)){
      pavan.velocityY = 0;
    }
    if(invisibleBlockGroup.isTouching(pavan) || pavan.y > 600){
      pavan.destroy()
      gameState = "end"
    }
    
  
  drawSprites();
}
  if (gameState === "end"){
    stroke("yellow");
    fill("yellow");
    textSize(30);
    text("Game Over", 230,250)
  }
}

function spawnDoors()
 {
  
  if (frameCount % 240 === 0) {
    var door = createSprite(200, -50);
    var climber = createSprite(200,10);
    var invisibleBlock = createSprite(200,15);
    invisibleBlock.width = climber.width;
    invisibleBlock.height = 2;
  
    door.addImage(doorImg);
    climber.addImage(climberImg);
    
    door.velocityY = 1;
    climber.velocityY = 1;
    invisibleBlock.velocityY = 1;

    
    
     
    pavan.depth = door.depth;
    pavan.depth+= 1;


 door.lifetime = 800;
    climber.lifetime = 800;
    invisibleBlock.lifetime = 800;
    
    
     doorsGroup.add(door);
    invisibleBlock.debug = true;
    climbersGroup.add(climber);
    invisibleBlockGroup.add(invisibleBlock);
  }
}

