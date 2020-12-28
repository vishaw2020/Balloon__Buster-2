var bow, bowImage;
var ground, red, green, pink;
var arrow;



function preload(){
bowImage=loadImage("bow0.png");
ground2 = loadImage("background0.png");
redcolor=loadImage("red_balloon0.png");
greencolor=loadImage("green_balloon0.png");
bluecolor=loadImage("blue_balloon0.png");
pinkcolor=loadImage("pink_balloon0.png");
arrow2=loadImage("arrow0.png")
 
  
}

function setup() {
  createCanvas(600, 600);

  ground = createSprite(300,5,50,50);
  ground.addImage("imges",ground2);
  ground.scale=3
  bow = createSprite(550,200,20,50);
  bow.addImage("mage",bowImage);
  bow.scale=2;
  ground.x=ground.width/2;
  arrow=createSprite(520,200,20,50)
  arrow.addImage("images",arrow2);
  arrow.scale=0.5
  
  
}

function draw() {
background("white")
  drawSprites();
  arrow.y=mouseY;
  bow.y = mouseY;
  ground.velocityX=-2;
  
  if(ground.x<0)   {
  
  ground.x=ground.width/2;
  
  
  }
 
  if (arrow.x<0) {
    arrow.x=bow.x;
    arrow.velocityX=0;
}
   if (keyDown("Space")) {
    arrow.velocityX=-50;
    
    
  
}
   


  
  
  
   for (var i = 50; i < 500; i= i+80) {
     red=createSprite(50,i,10,10);
     red.addImage("image",redcolor);
     red.scale=0.1;
    
  }
   for (var i = 100; i < 450; i=i+70) {
     green=createSprite(100,i,10,10);
     green.addImage("image",greencolor);
     green.scale=0.1;
  }
   for (var i = 150; i < 400; i=i+70) {
    blue=createSprite(150,i,10,10);
    blue.addImage("image",bluecolor);
    blue.scale=0.1;
     
    
  }
   for (var i = 200; i < 300;i= i+70) {
    pink=createSprite(200,i,10,10);
    pink.addImage("image",pinkcolor);
    pink.scale=1.2;
     
  }
  
  
}

