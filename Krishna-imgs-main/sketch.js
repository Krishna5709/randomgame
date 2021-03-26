var saviour
var saviourImg
var dino1
var dino1Img
var dino2, dino2Img
var dino3, dino3Img
var hunter, hunterImg
var bg,bgImg
var gameState;
function preload(){
    bgImg = loadImage("bg.jpg")
    dino1Img = loadImage("dino1.png")
    dino2Img = loadImage("dino2.png")
    dinoImg3 = loadImage("dino3.png")
    hunterImg = loadImage("hunter.png")
    saviorImg = loadImage("saviour.png")
}

function setup()
{
  dino1 = createSprite(200,399,15,15)
 dino2 = createSprite(300,399,50,50)
  dino3 = createSprite(400,399,80,80) 
 saviour = createSprite(25,399,30,30)
 hunter = createSprite(100,399,30,30)
}

function draw(){
background("green") 
if(bulletGroup.isTouching(hunter)){
hunter.visible = false;
}
drawSprites()
}
function bullet(){
var bullet = createSprite(30,370,5,5)  
bullet.x=360
arrow.y=bow.y
bullet.velocityX=-4
bullet.lifetime=100
bulletGroup.add(bullet)
}
